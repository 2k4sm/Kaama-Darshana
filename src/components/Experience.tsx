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
      <Accordion type="single" collapsible className="w-full xl:w-[75%] m-6 xl:pb-48">
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="bg-[#420d78] m-2 rounded-lg p-5 text-slate-100 hover:no-underline">
            <div className="flex flex-row justify-between w-full h-full p-5 pt-0 pb-0">
              <p className="text-sm md:text-xl font-mono font-extrabold">SDE Intern @Convergent AI</p>
              <p className="text-sm md:text-xl font-bold">Feb 2025 - Apr 2025</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-[#170f1fc9] m-2 rounded-lg p-5 text-slate-100 ">
            <div className="w-full h-full p-5 pt-0 pb-0">
              <div className="flex flex-wrap pb-10">
                <div className="text-lg flex items-center m-1">
                  <span>
                    <img src={location} alt="location" height={24} width={24} />
                  </span>
                  <span className="p-1">Remote</span>
                </div>
                <div className="text-md md:text-lg flex items-center m-2 w-[90%]">
                  <span>Built and deployed a real-time audio-to-lipsynced video pipeline using the MuseTalk open-source model, achieving 24+ FPS by implementing chunked processing and DASH streaming with FFmpeg. Engineered a robust FastAPI service around WebSockets to expose the entire pipeline, ensuring low-latency, concurrent stream handling for multiple users.</span>
                </div>
              </div>
              <div>
                <div className="flex justify-evenly gap-1">
                  <div className="rounded-full bg-[#6391ca] w-full h-fit p-2 text-center">Python</div>
                  <div className="rounded-full bg-[#6391ca] w-full h-fit p-2 text-center">FastAPI</div>
                  <div className="rounded-full bg-[#6391ca] w-full h-fit p-2 text-center">WebSockets</div>
                  <div className="rounded-full bg-[#6391ca] w-full h-fit p-2 text-center">FFmpeg</div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b-0">
          <AccordionTrigger className="bg-[#420d78] m-2 rounded-lg p-5 text-slate-100 hover:no-underline">
            <div className="flex flex-row justify-between w-full h-full p-5 pt-0 pb-0">
              <p className="text-sm md:text-xl font-mono font-extrabold">SDE Intern @Dukaan®</p>
              <p className="text-sm md:text-xl font-bold">Oct 2024 - Dec 2024</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-[#170f1fc9] m-2 rounded-lg p-5 text-slate-100 ">
            <div className="w-full h-full p-5 pt-0 pb-0">
              <div className="flex flex-wrap pb-10">
                <div className="text-lg flex items-center m-1">
                  <span>
                    <img src={location} alt="location" height={24} width={24} />
                  </span>
                  <span className="p-1">Bengaluru, Karnataka</span>
                </div>
                <div className="text-md md:text-lg flex items-center m-2 w-[90%]">
                  <span>Engineered solution for memory leak detection and resolution, improving system reliability for 3,000 daily active users. Reduced API response latency by 70% (5s to 1.5s) and resolved Zapier integration issues. Implemented Redis-based distributed locking and executed database migration from SQLite to PostgreSQL with containerized deployment on AWS EC2.</span>
                </div>
              </div>
              <div>
                <div className="flex justify-evenly gap-1">
                  <div className="rounded-full bg-[#6391ca] w-full h-fit p-2 text-center">Redis</div>
                  <div className="rounded-full bg-[#6391ca] w-full h-fit p-2 text-center">PostgreSQL</div>
                  <div className="rounded-full bg-[#6391ca] w-full h-fit p-2 text-center">Docker</div>
                  <div className="rounded-full bg-[#6391ca] w-full h-fit p-2 text-center">AWS</div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b-0">
          <AccordionTrigger className="bg-[#420d78] m-2 rounded-lg p-5 text-slate-100 hover:no-underline">
            <div className="flex flex-row justify-between w-full h-full p-5 pt-0 pb-0">
              <p className="text-sm md:text-xl font-mono font-extrabold">Backend Developer @Zolo - Innovation Labs</p>
              <p className="text-sm md:text-xl font-bold">Feb 2024 - Jun 2024</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-[#170f1fc9] m-2 rounded-lg p-5 text-slate-100 ">
            <div className="w-full h-full p-5 pt-0 pb-0">
              <div className="flex flex-wrap pb-10">
                <div className="text-lg flex items-center m-1">
                  <span>
                    <img src={location} alt="location" height={24} width={24} />
                  </span>
                  <span className="p-1">Bengaluru, Karnataka</span>
                </div>
                <div className="text-lg flex items-center m-1">
                  <span>
                    <img src={redirect} alt="redirect" height={22} width={22} />
                  </span>
                  <a className="no-underline text-indigo-700 p-1" href="https://api-zolo.onrender.com">https://api-zolo.onrender.com</a>
                </div>
                <div className="text-md md:text-lg flex items-center m-2 w-[90%]">
                  <span>Architected RESTful APIs for book-sharing platform using Java and Spring Boot framework. Utilized submodule-based architecture, resulting in 50% increase in development team efficiency. Reduced API response time by 75% (4s to 1s) through caching and pagination implementation, with Azure database integration.</span>
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
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Experience;
