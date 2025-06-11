"use client";
import Link from "next/link";
import { FC } from "react";

type Project = {
  id: number;
  name: string;
  year: number;
  techStack?: string;
  img?: string;
};

type Props = {
  project: Project;
  selectedProject: number | null;
  showPreview: boolean;
  onMouseEnter: (e: React.MouseEvent, id: number) => void;
  onMouseLeave: (e: React.MouseEvent) => void;
  onClick: (id: number) => void;
};

const ProjectRow: FC<Props> = ({
  project,
  selectedProject,
  showPreview,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  return (
    <div
      onMouseEnter={(e) => onMouseEnter(e, project.id)}
      onMouseLeave={(e) => onMouseLeave(e)}
      onClick={() => onClick(project.id)}
      className={`border-b border-black ${
        selectedProject !== project.id ? "hover:bg-black hover:text-white" : ""
      }  transition-all ease-in-out duration-300 ${
        showPreview ? "cursor-none" : "cursor-default"
      }`}
    >
      <div className="grid grid-cols-2 transition-all ease-in-out duration-300 py-3 text-2xl sm:text-6xl">
        <div className="text-left py-2">{project.name}</div>
        <div className="text-right py-2">{project.year}</div>
      </div>

      {/* Project details */}
      <div
        className={`transition-all overflow-hidden ease-in-out duration-300 ${
          selectedProject === project.id
            ? "max-h-[1000px] pt-2 mb-4 "
            : "max-h-0"
        }`}
      >
        <h2 className="sm:w-3/4 text-lg lg:text-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          fuga sequi tenetur doloribus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Explicabo fuga sequi tenetur doloribus. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Explicabo fuga sequi
          tenetur doloribus.
        </h2>

        <div className="mt-4">
          <Link
            href={"/"}
            className="bg-black text-lg text-white px-4 py-2 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Site
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectRow;
