import { faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Expertise() {

    return (
        <div id="expertise" className="flex flex-col items-center justify-center bg-gradient-to-r from-[#00304f] via-[#0d364d] to-[#002440] h-fit">
            <div className="flex flex-col md:items-center h-fit w-full xl:pt-24 p-5 md:p-20">
                <span className="w-[25%] text-8xl md:text-9xl font-mono font-bold text-[#FFFF]">My Forte</span>
            </div>

            <div className="flex flex-wrap md:flex md:flex-wrap justify-center m-2 text-[#FFFF]">
                <div className="text-xl md:text-3xl border-4 w-full m-2 md:mt-2 md:w-[50%] p-10 min-w-min">
                    <div>
                        <span><FontAwesomeIcon icon={faCode} fade style={{ color: "#B197FC" }} /> </span>
                    </div>
                    <span className="">Software Development</span>
                    <p className="mt-3 font-sans text-base md:text-xl text-[#d1b2f0]">Skilled in procedural and object-oriented programming with languages like Rust, Python, Go, Java, and TypeScript. Experienced in building efficient systems with Rust, scripting and automation with Python, distributed systems with Go, enterprise applications with Java, and maintainable web apps with TypeScript. Utilizes language-specific patterns and best practices to create elegant, efficient, and maintainable software solutions across performance, systems, web development, and cross-platform engineering.</p>
                    <span><FontAwesomeIcon icon={faCode} fade style={{ color: "#B197FC" }} /> </span>
                </div>

                <div className="text-xl md:text-3xl border-4 w-full m-2 md:mt-2 md:w-[50%] p-10 min-w-min text-[#FFFF]">
                    <div>
                        <div>
                            <span><FontAwesomeIcon icon={faCode} fade style={{ color: "#B197FC" }} /> </span>
                        </div>
                        <span className="">Backend Development: Golang, Node.js, Rust, Python</span>

                    </div>
                    <p className="mt-3 font-sans text-base md:text-xl text-[#d1b2f0]">Enthusiastic about microservices, backend systems, networking, cloud computing, and Linux. Experienced in developing robust backend services, building resilient networked applications, provisioning cloud resources efficiently, and administering Linux environments. Over a year of hands-on experience with microservices architecture, cloud infrastructure, and system automation.</p>
                    <span><FontAwesomeIcon icon={faCode} fade style={{ color: "#B197FC" }} /> </span>
                </div>
            </div>
        </div>
    )
}


export default Expertise