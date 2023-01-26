// import {Link} from 'react-router-dom'
import useData from "../useData";

import {useState} from 'react'

function Projects() {
    const {data} = useData()

    const [currentIndex, setCurrentIndex] = useState(0);

    function prevSlide(){
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    function nextSlide(){
        const isLasttSlide = currentIndex === data.length - 1;
        const newIndex = isLasttSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    return ( 
        <section id="projects" className=''>
            <div id="projects-container" className="relative overflow-hidden border border-2">

                <div id="projects-slide" className="flex">
                    {data && (

                        <a href={data[currentIndex].link}
                            target="_blank"
                            rel="noreferrer"
                            className="shrink-0 w-full relative" 
                            id={data[currentIndex].id}>

                            <img src={data[currentIndex].pic[0]} alt="" className=""/>

                            <div id="view" className='opacity-0 hover:opacity-100 bg-black/20 absolute top-0 left-0 h-full w-full grid place-content-center'>
                                VIEW
                            </div>
                        </a>
                    )}
                </div>

                <span className="absolute bottom-0 left-0 bg-black text-white p-4 uppercase">Project</span>

                <div id="arrow-functions" className='absolute bottom-0 right-0 flex items-center'>
                    <button id="previous" className='bg-black text-white p-5' onClick={() => prevSlide()}>
                        <i className="fa-solid fa-less-than"></i>
                    </button>
                    <button id="next" className='bg-black text-white p-5' onClick={() => nextSlide()}>
                        <i className="fa-solid fa-greater-than"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Projects;