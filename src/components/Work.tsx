import ShowCase from "./ShowCase";

function Work() {
    return (
        <div id="work" className="bg-gradient-to-r from-[#00304f] via-[#0d364d] to-[#002440] h-fit p-5 md:p-20 pt-36 max-w-screen">
            <div className="md:flex md:flex-row justify-center  items-center ">
                <div>
                    <div className="text-8xl md:text-9xl font-mono font-bold text-[#FFFF]">
                        <span>My Work</span>
                    </div>
                    <div className="text-xl md:text-3xl font-sans text-[#c5c5c6] max-w-md md:max-w-2xl mx-2">
                        <p>
                            Deployed a scalable book-sharing backend application designed for Zolo residents to easily share books with one another. The backend, developed using Java Spring Boot, efficiently manages books, appeals, users, images, and notifications.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center text-8xl md:text-9xl max-w-fit text-center mx-2">
                    Rive Image
                </div>
            </div>
            <div className="flex justify-center items-center h-fit pt-36 w-full">
                <ShowCase />
            </div>
        </div>
    )
}

export default Work;