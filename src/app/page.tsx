"use client";
import About from "./components/About";
import Projects from "./components/Projects";
import { gsap } from "gsap";
import { useEffect } from "react";

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
      { opacity: 1, duration: 0.5, delay: 0.8 }
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
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          stagger: 0.1,
        },
        "<"
      );
  }, []);
  return (
    <div id="home-page" className="">
      <About />
      <Projects />
    </div>
  );
}
