"use client";
import About from "./components/About";
import AnimatedPreviewBox from "./components/AnimatedPreviewBox";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect } from "react";
import Header from "./components/Header";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useEffect(() => {
    let smoother = ScrollSmoother.create({
      wrapper: "#scroll-wrapper",
      content: "#scroll-content",
      smooth: 1.5,
      smoothTouch: 0.1,
    });
  }, []);
  return (
    <div id="scroll-wrapper" className="px-4 pb-14">
      <div id="scroll-content" className="relative">
        <Header />
        <About />
        <Projects />
      </div>
    </div>
  );
}
