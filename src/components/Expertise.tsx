
function Expertise() {

    return (
        <div id="expertise" className="flex flex-col items-center justify-center bg-gradient-to-r from-[#00304f] via-[#0d364d] to-[#002440] h-fit pt-60 md:pb-60">
            <div className="text-5xl md:text-8xl font-mono font-bold text-[#FFFF] mt-5">
                <span>My Expertise</span>
            </div>

            <div className="flex flex-wrap md:flex md:flex-wrap justify-center m-10 text-[#FFFF]">
                <div className="text-xl md:text-3xl border-4 w-full m-2 md:w-1/4 p-10 min-w-min">
                    <div>
                        <span className="">Software Development</span>
                    </div>
                    <p className="mt-3 font-sans text-base md:text-xl text-[#d1b2f0]">Skilled in procedural and Object-Oriented Programming languages like Rust, Python, Go, Java, and TypeScript.</p>
                </div>

                <div className="text-xl md:text-3xl border-4 w-full m-2 md:w-1/4 p-10 min-w-min text-[#FFFF]">
                    <div>
                        <span className="">Backend Development: Golang, Node.js, Rust, Python</span>
                    </div>
                    <p className="mt-3 font-sans text-base md:text-xl text-[#d1b2f0]">Enthusiastic about microservices, backend systems, networking, cloud computing, and Linux. With over a year of experience.</p>
                </div>
            </div>
        </div>
    )
}


export default Expertise