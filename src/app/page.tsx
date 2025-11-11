"use client";
import About from "./components/About";
import Header from "./components/Header";
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

    // Set initial states immediately (at position 0)
    gsap.set(headerLinks, { opacity: 0 });
    gsap.set(aboutParagraph, { opacity: 0, y: -20 });
    gsap.set(projectContainer, { opacity: 0, y: -20 });
    gsap.set(projects, { opacity: 0, y: -20 });

    // Initialise GSAP timeline
    const tl = gsap.timeline();
    tl.to(headerLinks, { opacity: 1, duration: 0.5, delay: 0.8 })
      .to(aboutParagraph, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
      .to(projectContainer, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
      .to(
        projects,
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
      <Header />
      <About /> 
      <Projects />
    </div>
  );
}
