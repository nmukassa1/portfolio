"use client";
import { useEffect, useState } from "react";
import {
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import ImagePreview from "./ImagePreview";
import ProjectRow from "./ProjectRow";
import projects from "@/app/database";

function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | number>(null);
  const [hoveredProject, setHoveredProject] = useState<null | number>(null);
  const [imageOpacity, setImageOpacity] = useState(0);
  const [showPreview, setShowPreview] = useState(true);

  const handleProjectClick = (id: number) => {
    setSelectedProject((prev) => (prev === id ? null : id));
    setShowPreview(false);
  };

  const handleRowPadding = (e: React.MouseEvent) => {
    if (navigator.maxTouchPoints > 0) return;
    const el = e.currentTarget.firstChild as HTMLElement;
    if (!el || !el.classList) return;
    e.type === "mouseenter"
      ? el.classList.add("px-4")
      : el.classList.remove("px-4");
  };

  const findPreviewImageById = (id: number | null) => {
    if (id === null) return undefined;

    let left = 0;
    let right = projects.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midProject = projects[mid];

      if (midProject.id === id) {
        return midProject.previewImage || undefined;
      } else if (midProject.id < id) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return undefined; // Return undefined if the id is not found
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 30 });
  const velocityX = useVelocity(springX);
  const velocityY = useVelocity(springY);
  const skewX = useTransform(velocityX, [-1000, 1000], [-15, 15]);
  const skewY = useTransform(velocityY, [-1000, 1000], [-15, 15]);

  useEffect(() => {
    const section = document.getElementById("projects");
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const bounds = section.getBoundingClientRect();
      mouseX.set(e.clientX - bounds.left - 150); // offset within Projects
      mouseY.set(e.clientY - bounds.top - 100);
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="projects" className="mt-7 relative">
      <div className="grid grid-cols-2 font-semibold border-b border-black text-2xl">
        <div className="text-left py-2">Projects</div>
        <div className="text-right py-2">Year</div>
      </div>

      <ImagePreview
        show={showPreview}
        imageOpacity={imageOpacity}
        left={springX}
        top={springY}
        skewX={skewX}
        skewY={skewY}
        previewImage={findPreviewImageById(hoveredProject)}
      />

      {projects.map((project) => (
        <ProjectRow
          key={project.id}
          project={project}
          selectedProject={selectedProject}
          showPreview={showPreview}
          onMouseEnter={(e, id) => {
            handleRowPadding(e);
            setHoveredProject(id);
            setImageOpacity(1);
            setShowPreview(true);
          }}
          onMouseLeave={(e) => {
            handleRowPadding(e);
            setImageOpacity(0);
            setHoveredProject(null);
          }}
          onClick={handleProjectClick}
        />
      ))}
    </section>
  );
}

export default Projects;
