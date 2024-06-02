import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import location from "../assets/location.png"
import redirect from "../assets/redirect.png"


function Experience() {
    return (
        <div id="experience" className="bg-gradient-to-r from-[#00304f] via-[#0d364d] to-[#002440] h-fit p-5 md:p-20 pt-36 max-w-screen flex flex-col justify-center items-center">
            <div className="text-7xl md:text-9xl font-mono font-bold text-[#FFFF]">
                <p>My Experience</p>
            </div>
            <Accordion type="single" collapsible className="w-full xl:w-[75%] m-6">
                <AccordionItem value="item-1" className="border-b-0">
                    <AccordionTrigger className="bg-[#420d78] m-2 rounded-lg p-5 text-slate-100 hover:no-underline">
                        <div className="flex flex-row justify-between w-full h-full p-5 pt-0 pb-0">
                            <p className="text-sm md:text-xl font-mono font-extrabold">Backend Developer @Scaler-Innovation-Labs </p>
                            <p className="text-sm md:text-xl font-bold">2024 - Present</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-[#170f1fc9] m-2 rounded-lg p-5 text-slate-100 ">
                        <div className="w-full h-full p-5 pt-0 pb-0">
                            <div className="flex flex-wrap pb-10">
                                <div className="text-lg flex items-center m-1">
                                    <span>
                                        <img src={location} alt="location" height={24} width={24} />
                                    </span>
                                    <span className="p-1">Bengaluru, India</span>
                                </div>
                                <div className="text-lg flex items-center m-1">
                                    <span>
                                        <img src={redirect} alt="redirect" height={22} width={22} />
                                    </span>
                                    <a className="no-underline text-indigo-700 p-1" href="https://api-zolo.onrender.com">https://api-zolo.onrender.com</a>
                                </div>
                                <div className="text-md md:text-lg flex items-center m-2 w-[75%]">
                                    <span>I am responsible for designing and developing a RESTful API for a book-sharing backend. This API will be utilized by Zolo,
                                        a co-living PG, for integrating with their app to be used by their residents.</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-evenly gap-1">
                                    <div className="rounded-full bg-[#6391ca] w-full h-fit p-2 text-center">Java</div>
                                    <div className="rounded-full bg-[#6391ca] w-full h-fit p-2 text-center">SpringBoot</div>
                                    <div className="rounded-full bg-[#6391ca] w-full h-fit p-2 text-center">MySQL</div>
                                    <div className="rounded-full bg-[#6391ca] w-full h-fit p-2 text-center">Azure</div>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b-0">
                    <AccordionTrigger className="bg-[#420d78] m-2 rounded-lg p-5 text-slate-100 hover:no-underline">
                        <div className="flex flex-row justify-between w-full h-full p-5 pt-0 pb-0">
                            <p className="text-sm md:text-xl font-mono font-extrabold">OSS Core Member @Scaler-School-of-Technology </p>
                            <p className="text-sm md:text-xl font-bold">2023 - Present</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-[#170f1fc9] m-2 rounded-lg p-5 text-slate-100 ">
                        <div className="w-full h-full p-5 pt-0 pb-0">
                            <div className="flex flex-wrap pb-10">
                                <div className="text-lg flex items-center m-1">
                                    <span>
                                        <img src={location} alt="location" height={24} width={24} />
                                    </span>
                                    <span className="p-1">Bengaluru, India</span>
                                </div>
                                <div className="text-lg flex items-center m-1">
                                    <span>
                                        <img src={redirect} alt="redirect" height={22} width={22} />
                                    </span>
                                    <a className="no-underline text-indigo-700 p-1" href="https://github.com/2k4sm/">https://github.com/2k4sm/</a>
                                </div>
                                <div className="text-md md:text-lg flex items-center m-2 w-[75%]">
                                    <span>Responsible for Creating and leading open source projects for the club and help others to get into open source.</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-evenly gap-1">
                                    <div className="rounded-full bg-[#6391ca] w-full h-fit p-2 text-center">Python</div>
                                    <div className="rounded-full bg-[#6391ca] w-full h-fit p-2 text-center">Git</div>
                                    <div className="rounded-full bg-[#6391ca] w-full h-fit p-2 text-center">Docker</div>
                                    <div className="rounded-full bg-[#6391ca] w-full h-fit p-2 text-center">go-lang</div>
                                    <div className="rounded-full bg-[#6391ca] w-full h-fit p-2 text-center">Java</div>
                                    <div className="rounded-full bg-[#6391ca] w-full h-fit p-2 text-center">Rust</div>
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Experience;