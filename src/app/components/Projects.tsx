"use client";
import { Ultra } from "next/font/google";
import { useEffect, useState } from "react";

const ultra = Ultra({
  weight: "400", // Ultra only has one weight
  subsets: ["latin"],
  display: "swap",
});

const projects = [
  {
    id: 1,
    name: "Designspo",
    techStack: "Nextjs, React, Express, Supabase, Chrome Api",
    year: 2025,
  },
  {
    id: 2,
    name: "Unwind",
    techStack: "React, Json Database",
    year: 2023,
  },
  {
    id: 3,
    name: "Top 20",
    techStack: "React, Tailwind, 3rd Party Api",
    year: 2023,
  },
  {
    id: 4,
    name: "Spotify Clone",
    techStack: "HTML, Css, Vanilla js",
    year: 2023,
  },
  {
    id: 5,
    name: "Photosnap",
    techStack: "HTML, Css, Vanilla js",
    year: 2023,
  },
];

function Projects() {
  const [slectedProject, setSelectedProject] = useState<null | number>(null);

  const handleProjectClick = (id: number) => {
    if (slectedProject === id) {
      setSelectedProject(null); // Deselect if already selected
    } else {
      setSelectedProject(id); // Select the clicked project
    }
  };

  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [imageOpacity, setImageOpacity] = useState(0);
  const imageSize = { width: 300, height: 200 }; // Size of the image preview box

  const handleImagePosition = (e: React.MouseEvent) => {
    const offsetX = 150; // Half of 300px width
    const offsetY = 100; // Half of 200px height

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
        {/* <div className="text-center py-2 hidden md:block">Tech Stack</div> */}
        <div className="text-right py-2">Year</div>
      </div>

      {/* Image Preview Box */}
      <div
        className={`w-[${imageSize.width}px] h-[${imageSize.height}px] bg-black fixed  pointer-events-none transition-transform duration-100  ease-in-out`}
        style={{
          top: `${imagePosition.y}px`,
          left: `${imagePosition.x}px`,
          opacity: imageOpacity,
        }}
      ></div>

      {/* Rows */}
      {projects.map((project) => (
        <div
          key={project.id}
          onMouseEnter={(e) => {
            handleRowPadding(e);
            // Show the image preview box
            setImageOpacity(1);
          }}
          onMouseLeave={(e) => {
            handleRowPadding(e);
            // Hide the image preview box
            setImageOpacity(0);
          }}
          className="border-b border-black hover:bg-black hover:text-white transition-all ease-in-out duration-300"
        >
          {/* Project Name, Tech Stack, Year */}
          <div
            className="grid grid-cols-2 md:grid-cols-2   transition-all ease-in-out duration-300 py-3 text-2xl"
            onClick={() => handleProjectClick(project.id)}
          >
            <div className="text-left py-2">{project.name}</div>
            {/* <div className="text-center py-2 hidden md:block">
                {project.techStack}
              </div> */}
            <div className="text-right py-2">{project.year}</div>
          </div>

          {/* Project Description*/}
          <div
            className={`bg-red-400 transition-all ease-in-out duration-300  ${
              slectedProject === project.id ? "h-[200px]" : "h-0"
            }`}
          ></div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
