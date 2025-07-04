import { useEffect, useState } from "react";
import background from '../assets/p2.png'

interface Repo {
  author: string;
  description: string;
  forks: number;
  language: string;
  name: string;
  stars: number;
}

function ShowCase() {

  const [repos, setRepos] = useState<Repo[]>([])

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://kaama-darshana.deno.dev");
        const data = await response.json();
        console.log(data);
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, [])
  const baselink = "https://github.com/2k4sm/"
  return (
    <div id="showcase" className="bg-gradient-to-r from-[#00304f] via-[#0d364d] to-[#002440] h-fit p-3 sm:p-5 md:p-20 pt-20 sm:pt-28 md:pt-36 max-w-screen flex flex-col justify-center items-center w-full">
      <div className="flex flex-col h-fit w-full xl:pt-24">
        <span className="w-full sm:w-[50%] md:w-[25%] text-4xl sm:text-6xl md:text-8xl xl:text-9xl font-mono font-bold text-[#FFFF] break-words">My Work</span>
      </div>

      {repos.map((repo: {
        author: string,
        description: string,
        forks: number,
        language: string,
        name: string,
        stars: number
      }
      ) => {
        return (
          <div key={repo.name} className="p-4 sm:p-6 md:p-10 rounded-lg m-1 w-full h-fit flex flex-col justify-between backdrop-blur" style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,1.0), rgba(0,0,0,0.0)), url(${background})`,
            backgroundPosition: "center",
            backgroundAttachment: 'fixed',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <header className="flex-1">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-slate-200 mb-2 break-words">{repo.name}</div>
                <div className="mb-6 sm:mb-8 md:mb-10">
                  <a className="text-sm sm:text-base md:text-xl lg:text-3xl text-teal-700 break-all hover:underline" href={baselink + repo.name}>https://github.com/2k4sm/{repo.name}</a>
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-3xl text-slate-400 break-words">{repo.description}</div>
              </header>
              <main className="text-left sm:text-center text-slate-200 pt-3 md:w-44 flex-shrink-0">
                <div className="text-lg sm:text-xl md:text-xl lg:text-3xl text-emerald-500">{repo.language}</div>
                <div className="text-sm sm:text-base md:text-base lg:text-lg">Forks: {repo.forks}</div>
                <div className="text-sm sm:text-base">Stars: {repo.stars}</div>
              </main>
            </div>

            <footer>
              <div className="text-base sm:text-lg md:text-xl lg:text-3xl text-lime-500 mt-4">{repo.author}</div>
            </footer>
          </div>
        )
      })}
    </div>

  )
}


export default ShowCase;
