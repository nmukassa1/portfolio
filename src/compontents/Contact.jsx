function Contact() {
    return ( 
        <a  href="mailto: nmukassa1@gmail.com" id="contact" className="uppercase font-bold border border-2">
            <div id="desktop" className="relative flex justify-center items-center h-full">
                <h1 className="">Like what you see? <i className="fa-solid fa-envelope ml-2"></i></h1>
            </div>

            <div id="mobile" className="place-content-center h-full">
                <i className="fa-solid fa-envelope"></i>
            </div>
        </a>
    );
}

export default Contact;