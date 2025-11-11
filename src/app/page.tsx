import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import AnimationWrapper from "./components/AnimationWrapper";

export default function Home() {
  return (
    <AnimationWrapper>
      <div id="home-page" className="">
        <Header />
        <About /> 
        <Projects />
      </div>
    </AnimationWrapper>
  );
}
