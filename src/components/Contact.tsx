import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

function Contact() {

    const { RiveComponent } = useRive({
        src: 'footer.riv',
        stateMachines: 'State Machine 1',
        layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
        autoplay: true,
    });


    return (
        <div id="contact" className="bg-gradient-to-b from-[#00154f] via-[#0d1e4d] to-[#002440] h-fit p-5 md:p-20 pt-36 max-w-screen">
            <div className="xl:flex xl:flex-row justify-between items-center">
                <div className="xl:w-[60%] text-center xl:text-start">
                    <div className="text-3xl md:text-5xl font-mono font-bold text-[#FFFF] pb-10">
                        <span>Open to Select Opportunities</span>
                    </div>
                    <div>
                        <div className="text-xl md:text-3xl font-mono font-bold text-[#93ebe3] pb-2">
                            <span>
                                Have an exciting project you need help with?
                            </span>
                        </div>
                        <div className="text-xl md:text-3xl font-mono font-bold text-[#93ebe3]">
                            <span>
                                Send me an email or contact me via instant message!
                            </span>
                        </div>
                    </div>

                    <div className="pt-16 flex flex-row justify-center xl:justify-start">

                        <div className="text-xl md:text-3xl font-mono font-bold flex flex-col text-[#e1d9f0]">
                            <a href="mailto:shrinibasmahanta2004@gmail.com" className="text-[#b293eb]">shrinibasmahanta2004@gmail.com</a>
                            <a className="no-underline hover:text-fuchsia-600 duration-200" href="https://x.com/2k4shrini">X</a>
                            <a className="no-underline hover:text-fuchsia-600 duration-200" href="https://www.linkedin.com/in/shrinibas-mahanta-9a499427b/">Linkedin</a>
                            <a className="no-underline hover:text-fuchsia-600 duration-200" href="https://github.com/2k4sm/">Github</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center xl:items-end w-full">
                    <RiveComponent className="w-[350px] md:w-[500px] xl:w-[724px] h-[450px]" />
                </div>
            </div>
            <div className="pt-20">
                <div className="text-center text-[#93ebe3]">
                    <span>© {new Date().getFullYear()} Shrinibas Mahanta. All rights reserved.</span>

                </div>
            </div>
        </div>
    )
}

export default Contact;