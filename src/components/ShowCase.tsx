import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

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
      <div className="flex flex-col h-fit w-full xl:pt-24 mb-8">
        <h2 className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent w-full sm:w-[50%] md:w-[25%] text-4xl sm:text-6xl md:text-8xl xl:text-9xl font-mono font-bold break-words">
          My Work
        </h2>
        <Separator className="mt-4 bg-gradient-to-r from-[#c84576] to-transparent h-0.5 border-0 max-w-[200px]" />
      </div>

      <div className="flex flex-col gap-4 w-full">
        {repos.map((repo) => (
          <Card
            key={repo.name}
            className="bg-white/[0.03] backdrop-blur-lg border border-white/[0.08] rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.15] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            <CardHeader className="pb-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <CardTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-200 font-bold break-words">
                  {repo.name}
                </CardTitle>
                <div className="flex items-center gap-3 shrink-0">
                  <Badge className="bg-emerald-500/15 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/25 transition-colors duration-200">
                    {repo.language}
                  </Badge>
                  <span className="text-slate-400 text-sm">
                    {repo.stars > 0 && <span className="mr-3">&#9733; {repo.stars}</span>}
                    {repo.forks > 0 && <span>&#x1F374; {repo.forks}</span>}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <a
                className="text-sm sm:text-base md:text-lg text-teal-500 break-all hover:text-teal-300 transition-colors duration-200"
                href={baselink + repo.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {baselink}{repo.name}
              </a>
              <p className="text-base sm:text-lg md:text-xl text-slate-400">{repo.description}</p>
            </CardContent>
            <CardFooter>
              <span className="text-sm text-lime-400/80">{repo.author}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ShowCase;
