import useData from "../useData";

import {Link} from 'react-router-dom'

function RenderWork({display}) {

    const {data} = useData()

    return ( 
        <>
            {data && (
                <div id="project-container" className={`${display} gap-[32px] overflow-scroll pb-[15px]`}>
                    {
                        data.map((item, index) => (
                            <Link to={`/project/${item.title.toLowerCase()}`} 
                            key={index} 
                            className="rounded-2xl shrink-0 w-[80%] relative overflow-hidden" 
                            id={item.id} 
                            onClick={() => {localStorage.setItem('data', JSON.stringify(item))}}>
                                <img src={item.pic[0]} alt="" className="rounded-[.5rem] shadow-lg"/>

                                <div className="overlay h-full w-full bg-black absolute top-0 left-0 opacity-10"></div>
                            </Link>
                        ))
                    }
                </div>
            )}
        </>
    );
}

export default RenderWork;