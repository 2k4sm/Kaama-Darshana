import { faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"

const experiences = [
  {
    company: "Convergent AI",
    bullets: [
      "Built and deployed a real-time audio-to-lipsynced video pipeline using the MuseTalk open-source model, achieving 24+ FPS (on a Nvidia A100 GPU) by implementing chunked processing and DASH streaming with FFmpeg",
      "Engineered a robust FastAPI service around WebSockets to expose the entire pipeline, ensuring low-latency, concurrent stream handling for multiple users",
      "Completed end-to-end project delivery within one month, from model integration to deployment and manual testing",
      "Initiated and executed a proof of concept to migrate the existing AI video chat orchestration pipeline from Vapi to pipecat, successfully meeting all project milestones and completing within 1.5 months",
    ],
    tags: ["Python", "FastAPI", "WebSockets", "FFmpeg", "GPU"],
  },
  {
    company: "Dukaan\u00AE",
    bullets: [
      "Engineered solution for memory leak detection and resolution, improving system reliability for 3,000 daily active users",
      "Reduced API response latency by 70% (5 s to 1.5 s) and resolved Zapier integration issues, decreasing system downtime to under 10%",
      "Implemented Redis-based distributed locking and middleware solutions to resolve concurrent access issues",
      "Executed database migration from SQLite to PostgreSQL with containerized deployment on AWS EC2 using Docker",
    ],
    tags: ["Redis", "PostgreSQL", "Docker", "AWS"],
  },
  {
    company: "Zolo - Innovation Labs",
    bullets: [
      "Architected RESTful APIs for book-sharing platform using Java and Spring Boot framework",
      "Utilised submodule-based architecture, resulting in 50% increase in development team efficiency",
      "Reduced API response time by 75% (4 s to 1 s) through caching and pagination, migrated and configured everything at Azure on mysql database.",
    ],
    tags: ["Java", "Spring Boot", "Azure", "MySQL"],
  },
]

function Expertise() {
  return (
    <div id="expertise" className="flex flex-col items-center justify-center bg-gradient-to-r from-[#00304f] via-[#0d364d] to-[#002440] h-fit pt-12 sm:pt-16 md:pt-0 px-4 sm:px-6">
      <div className="flex flex-col md:items-center h-fit w-full xl:pt-12 p-3 sm:p-5 md:p-10">
        <h2 className="text-white text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-mono font-bold text-left">
          My Experience
        </h2>
        <Separator className="mt-4 mx-auto bg-gradient-to-r from-transparent via-[#c84576] to-transparent h-0.5 border-0 max-w-xs" />
      </div>

      <div className="flex flex-col gap-6 sm:w-[95%] px-2 sm:px-4">
        {experiences.map((exp) => (
          <Card
            key={exp.company}
            className="bg-white/[0.03] backdrop-blur-lg border border-white/[0.08] rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.15] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faCode} fade style={{ color: "#B197FC" }} className="text-lg" />
                <CardTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold">
                  {exp.company}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-none space-y-3 text-sm sm:text-base md:text-lg lg:text-xl text-[#d1b2f0] leading-relaxed">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#B197FC] mt-1.5 shrink-0">&#x2022;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-[#B197FC]/15 text-[#B197FC] border-[#B197FC]/30 hover:bg-[#B197FC]/25 transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Expertise
