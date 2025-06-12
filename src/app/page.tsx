"use client";
import About from "./components/About";
import Projects from "./components/Projects";
import { gsap } from "gsap";
import { useEffect } from "react";
import Header from "./components/Header";

export default function Home() {
  useEffect(() => {
    // Get html elements
    const headerLinks = document.querySelectorAll(".header-link");
    const aboutParagraph = document.querySelector("#aboutParagraph");
    const projects = document.querySelectorAll(".project");
    const projectContainer = document.querySelector("#projects-container");

    // Initialise GSAP timeline
    const tl = gsap.timeline();
    tl.fromTo(
      headerLinks,
      { opacity: 0 },
      { opacity: 1, duration: 0.7, delay: 0.5 }
    )
      .fromTo(
        aboutParagraph,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(
        projectContainer,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(
        projects,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 },
        "-=0.3"
      );
  }, []);
  return (
    <div className="px-4 pb-14">
      <Header />
      <About />
      <Projects />
    </div>
  );
}
