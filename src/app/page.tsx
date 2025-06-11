import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      {/* <svg viewBox="">
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="28"
          fill="currentColor"
        >
          <tspan>N</tspan>
          <tspan>Y</tspan>
          <tspan>A</tspan>
          <tspan>H</tspan>
        </text>
      </svg> */}
      <About />
      <Projects />
    </div>
  );
}
