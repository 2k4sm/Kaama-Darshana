import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import ShowCase from "./ShowCase";

function Work() {

    const { RiveComponent } = useRive({
        src: '/public/home_page.riv',
        stateMachines: 'State Machine 1',
        layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
        autoplay: true,
    });

    return (
        <div id="work" className="bg-gradient-to-r from-[#00304f] via-[#0d364d] to-[#002440] h-fit p-5 md:p-20 pt-36 max-w-screen">
            <div className="xl:flex xl:flex-row justify-between items-center">
                <div className="">
                    <div className="w-[33%] text-8xl md:text-9xl font-mono font-bold text-[#FFFF]">
                        <span>My Work</span>
                    </div>
                    <div className="text-xl md:text-3xl font-sans text-[#c5c5c6] max-w-md md:max-w-2xl mx-2">
                        <p>
                            Deployed a scalable book-sharing backend application designed for Zolo residents to easily share books with one another. The backend, developed using Java Spring Boot, efficiently manages books, appeals, users, images, and notifications.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <RiveComponent className="xl:w-[50vw] h-[300px] md:h-[550px]" />
                </div>
            </div>
            <div className="flex justify-center items-center h-fit w-full xl:pt-24">
                <ShowCase />
            </div>
        </div>
    )
}

export default Work;