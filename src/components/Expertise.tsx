
function Expertise() {

    return (
        <div id="expertise" className="flex flex-col items-center justify-center p-10 mb-60 bg-gradient-to-r from-[#004c84] via-[#245f85] to-[#004276]  relative top-[-10vh]">
            <div className="text-8xl font-mono font-bold text-[#FFFF] mt-5">
                <span>My Expertise</span>
            </div>

            <div className="flex justify-center m-10 text-[#FFFF]">
                <div className="border-4 w-3/12 p-10 min-w-min mr-0.5">
                    <div>
                        <span className="text-3xl">Software Development</span>
                    </div>
                    <p className="mt-3 font-sans text-xl text-[#d1b2f0]">Skilled in procedural and Object-Oriented Programming languages like Rust, Python, Go, Java, and TypeScript.</p>
                </div>

                <div className="border-4 w-3/12 p-10 min-w-min text-[#FFFF]">
                    <div>
                        <span className="text-3xl">Backend Development: Golang, Node.js, Rust, Python</span>
                    </div>
                    <p className="mt-3 font-sans text-xl text-[#d1b2f0]">Enthusiastic about microservices, backend systems, networking, cloud computing, and Linux. With over a year of experience, I specialize in designing robust backend architectures and developing scalable microservices.</p>
                </div>
            </div>
        </div>
    )
}


export default Expertise