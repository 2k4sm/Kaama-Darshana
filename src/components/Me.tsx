import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

function Me() {

    const { RiveComponent } = useRive({
        src: 'home_page.riv',
        stateMachines: 'State Machine 1',
        layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
        autoplay: true,
    });

    return (
        <div id="me" className="bg-gradient-to-r from-[#00304f] via-[#0d364d] to-[#002440] h-fit p-5 md:p-20 pt-36 max-w-screen">
            <div className="xl:flex xl:flex-row justify-between items-center">
                <div className="">
                    <div className="w-[33%] text-8xl md:text-9xl font-mono font-bold text-[#FFFF]">
                        <span>Know Me</span>
                    </div>
                    <div className="text-xl md:text-3xl font-sans text-[#c5c5c6] max-w-md md:max-w-2xl mx-2">
                        <p className="mb-7">
                            I enjoy backend development, cybersecurity, DevOps, cloud computing, and web development. Currently, I'm learning microservices in Golang, Spring Boot/FastAPI, data structures, databases, and middlewares.                        </p>
                        <p>
                        In my free time, I love immersing myself in rock music, diving into video games, and exploring new technologies. My goals are to remain curious, expand my knowledge and skills, embrace mistakes, and find happiness in the journey.</p>
                    </div>
                </div>
                <div className="text-center">
                    <RiveComponent className="xl:w-[50vw] h-[300px] md:h-[699px]" />
                </div>
            </div>
        </div>
    )
}

export default Me;