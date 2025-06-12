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
  return (
    <div>
      <Header />
      <About />
      <Projects />
    </div>
  );
}
