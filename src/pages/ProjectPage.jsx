
function ProjectPage() {

    const data = JSON.parse(localStorage.getItem('data'))

    const isUnwind = data.id === 'unw01';

    return ( 
        <>
            {data && (
                <section id="project-page-grid" className="h-screen grid overflow-hidden">

                    <div id="project-img" className="h-full bg-[#D9D9D9] overflow-scroll p-5">

                        {/* Layout will be different if project is Unwind */}
                        {isUnwind && (
                            <div className="flex flex-col gap-6">
                                <img src={data.pic[0]} alt="" />
                                <div className="grid grid-cols-2 gap-2 justify-center">
                                    <img src={data.pic[1]} alt="" className="w-full" />
                                    <img src={data.pic[2]} alt="" className="w-full" />
                                </div>
                                <img src={data.pic[3]} alt="" />
                            </div>
                        )}

                        {!isUnwind && (
                            <div className="grid place-content-center gap-6 h-full">
                                {data.pic.map((item, index) => (
                                 <img src={item} alt="" key={index}/>   
                                ))}
                            </div>
                        )}

                    </div>

                    <div id="project-info" className="h-full p-5">
                        <h1 className="uppercase font-bold text-[42px] cursor-default">{data.title}</h1>

                        <ul id="tools-used" className="flex gap-5">
                            {data.tools.map((item, index) => (
                                <li className="bg-[#D9D9D9] p-2 rounded-3xl cursor-default text-sm" key={index}>{item}</li>
                            ))}
                        </ul>


                        <div className="about-project mt-5">
                            <h2 className="italic">About Site:</h2>
                            {data.about.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </div>

                        <a href={data.link} target="_blank" rel="noreferrer" className="uppercase font-bold text-center cursor-pointer bg-black text-white w-[80px] h-[80px] rounded-full flex items-center justify-center mt-5 hover:bg-white hover:text-black hover:border hover:border-black">View <br /> Site</a>
                    </div>
                </section>
            )}
        </>
    );
}

export default ProjectPage;