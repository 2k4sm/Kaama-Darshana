import { faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Expertise() {

  return (
    <div id="expertise" className="flex flex-col items-center justify-center bg-gradient-to-r from-[#00304f] via-[#0d364d] to-[#002440] h-fit pt-20 md:pt-0 ">
      <div className="flex flex-col md:items-center h-fit w-full xl:pt-24 p-5 md:p-20">
        <span className="xl:w-[33%] text-8xl md:text-9xl font-mono font-bold text-[#FFFF]">My Forte</span>
      </div>

      <div className="flex flex-wrap md:flex md:flex-wrap justify-center m-2 text-[#FFFF]">
        <div className="text-xl md:text-3xl border-4 w-full m-2 md:mt-2 md:w-[50%] p-10 min-w-min">
          <div>
            <span><FontAwesomeIcon icon={faCode} fade style={{ color: "#B197FC" }} /> </span>
          </div>
          <span className="">Software Development</span>
          <p className="mt-3 font-sans text-base md:text-xl text-[#d1b2f0]">Proficient in multiple programming languages including Go, Java, Python, JavaScript, and Rust. Experienced in building efficient, scalable systems with focus on performance optimization and clean architecture. Strong foundation in data structures, algorithms, and software design patterns for creating robust, maintainable applications across various domains.</p>
          <span><FontAwesomeIcon icon={faCode} fade style={{ color: "#B197FC" }} /> </span>
        </div>

        <div className="text-xl md:text-3xl border-4 w-full m-2 md:mt-2 md:w-[50%] p-10 min-w-min text-[#FFFF]">
          <div>
            <div>
              <span><FontAwesomeIcon icon={faCode} fade style={{ color: "#B197FC" }} /> </span>
            </div>
            <span className="">Backend & Cloud Engineering</span>

          </div>
          <p className="mt-3 font-sans text-base md:text-xl text-[#d1b2f0]">Specialized in backend development using SpringBoot, FastAPI, Node.js, and Express.js. Extensive experience with databases (MySQL, PostgreSQL, Redis), cloud platforms (AWS, Azure), and containerization (Docker, Podman). Passionate about microservices architecture, distributed systems, API design, and DevOps practices for scalable, high-performance applications.</p>
          <span><FontAwesomeIcon icon={faCode} fade style={{ color: "#B197FC" }} /> </span>
        </div>
      </div>
    </div>
  )
}


export default Expertise
