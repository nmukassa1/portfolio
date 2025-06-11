"use client";
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const projects = [
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
    year: 2023,
    img: "blue",
  },
  {
    id: 3,
    name: "Top 20",
    techStack: "React, Tailwind, 3rd Party Api",
    year: 2023,
    img: "beige",
  },
  {
    id: 4,
    name: "Spotify Clone",
    techStack: "HTML, Css, Vanilla js",
    year: 2023,
    img: "pink",
  },
  {
    id: 5,
    name: "Photosnap",
    techStack: "HTML, Css, Vanilla js",
    year: 2023,
    img: "yellow",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | number>(null);
  const [hoveredProject, setHoveredProject] = useState<null | number>(null);
  console.log(99);

  const handleProjectClick = (id: number) => {
    setSelectedProject((prev) => (prev === id ? null : id));
  };

  const handleRowPadding = (e: React.MouseEvent) => {
    // Skip on touch devices (mobile/iPad)
    if (navigator.maxTouchPoints > 0) return;

    const firstChildElement = e.currentTarget.firstChild as HTMLElement;
    const isEntered = e.type === "mouseenter";
    if (firstChildElement && firstChildElement.classList) {
      if (isEntered) {
        firstChildElement.classList.add("px-4");
      } else {
        firstChildElement.classList.remove("px-4");
      }
    }
  };

  const findProjectById = (id: number | null) => {
    const project = projects.find((project) => project.id === id);
    return project ? project.img : "transparent";
  };

  // Motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  const velocityX = useVelocity(springX);
  const velocityY = useVelocity(springY);

  const skewX = useTransform(velocityX, [-1000, 1000], [-15, 15]);
  const skewY = useTransform(velocityY, [-1000, 1000], [-15, 15]);

  const [imageOpacity, setImageOpacity] = useState(0);
  const [showPreview, setShowPreview] = useState(true); // For hiding on click

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150); // Center offset
      mouseY.set(e.clientY - 100);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="projects" className={`mt-7 relative`}>
      <div className="grid grid-cols-2 font-semibold border-b border-black text-2xl">
        <div className="text-left py-2">Projects</div>
        <div className="text-right py-2">Year</div>
      </div>

      {/* Fluid Image Preview Box */}
      {showPreview && (
        <motion.div
          className="w-[300px] h-[200px] fixed pointer-events-none z-50"
          style={{
            left: springX,
            top: springY,
            opacity: imageOpacity,
            skewX,
            skewY,
            backgroundColor: findProjectById(hoveredProject),
            borderRadius: "30px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 40 }}
        />
      )}

      {projects.map((project) => (
        <div
          key={project.id}
          onMouseEnter={(e) => {
            handleRowPadding(e);
            setHoveredProject(project.id);
            setImageOpacity(1);
            setShowPreview(true);
          }}
          onMouseLeave={(e) => {
            handleRowPadding(e);
            setImageOpacity(0);
            setHoveredProject(null);
          }}
          onClick={() => {
            handleProjectClick(project.id);
            setShowPreview(false); // Hide preview box when clicking
          }}
          className={`border-b border-black hover:bg-black hover:text-white transition-all ease-in-out duration-300 ${
            showPreview ? "cursor-none" : "cursor-default"
          }`}
        >
          <div className="grid grid-cols-2 transition-all ease-in-out duration-300 py-3 text-2xl">
            <div className="text-left py-2">{project.name}</div>
            <div className="text-right py-2">{project.year}</div>
          </div>

          {/* Expandable project detail */}
          <div
            className={`transition-all ease-in-out duration-300 ${
              selectedProject === project.id ? "h-[200px] bg-red-400" : "h-0"
            }`}
          ></div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
