"use client";
import { useEffect, useState } from "react";

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
  const [hoveredProjectId, setHoveredProjectId] = useState<null | number>(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [imageOpacity, setImageOpacity] = useState(0);
  const imageSize = { width: 300, height: 200 };

  const handleProjectClick = (id: number) => {
    if (selectedProject === id) {
      setSelectedProject(null); // Deselect if already selected
      setImageOpacity(1); // Restore image preview
    } else {
      setSelectedProject(id); // Select the clicked project
      setImageOpacity(0); // Hide image preview on expand
    }
  };

  const handleImagePosition = (e: React.MouseEvent) => {
    const offsetX = 150;
    const offsetY = 100;

    setImagePosition({
      x: e.clientX - offsetX,
      y: e.clientY - offsetY,
    });
  };

  const handleRowPadding = (e: React.MouseEvent) => {
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

  return (
    <section
      id="projects"
      className={`mt-7 relative ${
        imageOpacity === 1 ? "cursor-none" : "cursor-default"
      }`}
      onMouseMove={handleImagePosition}
    >
      <div className="grid grid-cols-2 md:grid-cols-2 font-semibold border-b border-black text-2xl">
        <div className="text-left py-2">Projects</div>
        <div className="text-right py-2">Year</div>
      </div>

      {/* Image Preview Box */}
      <div
        className={`w-[300px] h-[200px] fixed pointer-events-none transition-transform duration-100 ease-in-out`}
        style={{
          top: `${imagePosition.y}px`,
          left: `${imagePosition.x}px`,
          opacity: imageOpacity,
          backgroundColor: `${findProjectById(hoveredProjectId)}`,
        }}
      ></div>

      {/* Rows */}
      {projects.map((project) => (
        <div
          key={project.id}
          onMouseEnter={(e) => {
            if (selectedProject !== project.id) {
              handleRowPadding(e);
              setImageOpacity(1);
              setHoveredProjectId(project.id);
            }
          }}
          onMouseLeave={(e) => {
            handleRowPadding(e);
            if (selectedProject !== project.id) {
              setImageOpacity(0);
              setHoveredProjectId(null);
            }
          }}
          className="border-b border-black hover:bg-black hover:text-white transition-all ease-in-out duration-300"
        >
          {/* Project Name, Tech Stack, Year */}
          <div
            className="grid grid-cols-2 md:grid-cols-2 transition-all ease-in-out duration-300 py-3 text-2xl"
            onClick={() => handleProjectClick(project.id)}
          >
            <div className="text-left py-2">{project.name}</div>
            <div className="text-right py-2">{project.year}</div>
          </div>

          {/* Project Description */}
          <div
            className={`bg-red-400 transition-all ease-in-out duration-300 ${
              selectedProject === project.id ? "h-[200px]" : "h-0"
            }`}
          ></div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
