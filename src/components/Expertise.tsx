
function Expertise() {

    return (
        <div className="flex flex-col items-center justify-center mt-60 mb-60">
            <div className="text-8xl font-mono font-bold text-slate-700 mt-5">
                <span>My Expertise</span>
            </div>

            <div className="flex justify-center m-10">
                <div className="border-4 w-3/12 p-10 min-w-min mr-0.5">
                    <div>
                        <span className="text-3xl">Software Development</span>
                    </div>
                    <p className="mt-3 font-sans text-xl">Skilled in procedural and Object-Oriented Programming languages like Rust, Python, Go, Java, and TypeScript.</p>
                </div>

                <div className="border-4 w-3/12 p-10 min-w-min">
                    <div>
                        <span className="text-3xl">Backend Development: Golang, Node.js, Rust, Python</span>
                    </div>
                    <p className="mt-3 font-sans text-xl">Enthusiastic about microservices, backend systems, networking, cloud computing, and Linux. With over a year of experience, I specialize in designing robust backend architectures and developing scalable microservices.</p>
                </div>
            </div>
        </div>
    )
}


export default Expertise