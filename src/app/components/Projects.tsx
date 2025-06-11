"use client";
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import ImagePreview from "./ImagePreview";
import ProjectRow from "./ProjectRow";

type Project = {
  id: number;
  name: string;
  year: number;
  techStack?: string;
  img?: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Designspo",
    techStack: "Nextjs, React, Express, Supabase, Chrome Api",
    year: 2025,
    img: "red",
  },
  {
    id: 2,
    name: "Unwind",
    techStack: "React, Json Database",
    year: 2024,
    img: "blue",
  },
  {
    id: 3,
    name: "Top 20",
    techStack: "React, Tailwind, 3rd Party Api",
    year: 2022,
    img: "beige",
  },
  {
    id: 4,
    name: "Spotify Clone",
    techStack: "HTML, Css, Vanilla js",
    year: 2022,
    img: "pink",
  },
  {
    id: 5,
    name: "Photosnap",
    techStack: "HTML, Css, Vanilla js",
    year: 2021,
    img: "yellow",
  },
];

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

  const findProjectById = (id: number | null) => {
    return projects.find((p) => p.id === id)?.img || "transparent";
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
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 100);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
        bgColor={findProjectById(hoveredProject)}
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
