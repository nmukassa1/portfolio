import Hero from "../compontents/Hero"
import About from "../compontents/About"
import Contact from "../compontents/Contact";
import Projects from "../compontents/Projects";
import Techstack from "../compontents/Techstack";

function HomePage() {
    return ( 
        <>
            <div id="top-container" className="grid-1fr-2fr">
                <Hero />
                <Contact /> 
            </div>
            <div className="grid-1fr-2fr my-[20px]" id="middle-container">
                <About />
                <Projects />
            </div>
            <Techstack />
        </>
    );
}

export default HomePage;