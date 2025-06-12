import { faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Expertise() {

  return (
    <div id="expertise" className="flex flex-col items-center justify-center bg-gradient-to-r from-[#00304f] via-[#0d364d] to-[#002440] h-fit pt-12 sm:pt-16 md:pt-0 px-4 sm:px-6">
      <div className="flex flex-col md:items-center h-fit w-full xl:pt-24 p-3 sm:p-5 md:p-20">
        <span className="xl:w-[33%] text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-mono font-bold text-[#FFFF] text-center md:text-left">My Experience</span>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6 md:gap-4 sm:w-[95%] px-2 sm:px-4 text-[#FFFF]">

        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl border-4 w-full p-4 sm:p-6 md:p-8 lg:p-10">
          <div>
            <span><FontAwesomeIcon icon={faCode} fade style={{ color: "#B197FC" }} /> </span>
          </div>
          <span className="">Convergent AI</span>
          <div className="mt-2 sm:mt-3 font-sans text-sm sm:text-base md:text-lg lg:text-xl text-[#d1b2f0] leading-relaxed">
            <ul className="list-disc list-inside space-y-1 sm:space-y-2">
              <li>Built and deployed a real-time audio-to-lipsynced video pipeline using the MuseTalk open-source model, achieving 24+ FPS (on a Nvidia A100 GPU) by implementing chunked processing and DASH streaming with FFmpeg</li>
              <li>Engineered a robust FastAPI service around WebSockets to expose the entire pipeline, ensuring low-latency, concurrent stream handling for multiple users</li>
              <li>Completed end-to-end project delivery within one month, from model integration to deployment and manual testing</li>
              <li>Initiated and executed a proof of concept to migrate the existing AI video chat orchestration pipeline from Vapi to pipecat, successfully meeting all project milestones and completing within 1.5 months</li>
            </ul>
          </div>
          <span><FontAwesomeIcon icon={faCode} fade style={{ color: "#B197FC" }} /> </span>
        </div>

        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl border-4 w-full p-4 sm:p-6 md:p-8 lg:p-10">
          <div>
            <span><FontAwesomeIcon icon={faCode} fade style={{ color: "#B197FC" }} /> </span>
          </div>
          <span className="">Dukaan®</span>
          <div className="mt-2 sm:mt-3 font-sans text-sm sm:text-base md:text-lg lg:text-xl text-[#d1b2f0] leading-relaxed">
            <ul className="list-disc list-inside space-y-1 sm:space-y-2">
              <li>Engineered solution for memory leak detection and resolution, improving system reliability for 3,000 daily active users</li>
              <li>Reduced API response latency by 70% (5 s to 1.5 s) and resolved Zapier integration issues, decreasing system downtime to under 10%</li>
              <li>Implemented Redis-based distributed locking and middleware solutions to resolve concurrent access issues</li>
              <li>Executed database migration from SQLite to PostgreSQL with containerized deployment on AWS EC2 using Docker</li>
            </ul>
          </div>
          <span><FontAwesomeIcon icon={faCode} fade style={{ color: "#B197FC" }} /> </span>
        </div>

        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl border-4 w-full p-4 sm:p-6 md:p-8 lg:p-10">
          <div>
            <span><FontAwesomeIcon icon={faCode} fade style={{ color: "#B197FC" }} /> </span>
          </div>
          <span className="">Zolo - Innovation Labs</span>
          <div className="mt-2 sm:mt-3 font-sans text-sm sm:text-base md:text-lg lg:text-xl text-[#d1b2f0] leading-relaxed">
            <ul className="list-disc list-inside space-y-1 sm:space-y-2">
              <li>Architected RESTful APIs for book-sharing platform using Java and Spring Boot framework</li>
              <li>Utilised submodule-based architecture, resulting in 50% increase in development team efficiency</li>
              <li>Reduced API response time by 75% (4 s to 1 s) through caching and pagination, migrated and configured everything at Azure on mysql database.</li>
            </ul>
          </div>
          <span><FontAwesomeIcon icon={faCode} fade style={{ color: "#B197FC" }} /> </span>
        </div>

      </div>
    </div>
  )
}


export default Expertise
