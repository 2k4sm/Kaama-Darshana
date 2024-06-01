import { useEffect, useState } from "react";
import background from '../assets/p2.png'

function ShowCase() {

    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetch("https://pinned.berrysauce.me/get/2k4sm")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRepos(data)
            })
    }, [])
    const baselink = "https://github.com/2k4sm/"
    return (
        <div className="bg-gradient-to-r from-[#00304f] via-[#0d364d] to-[#002440]  h-fit p-5 md:p-20 pt-36 max-w-screen flex flex-col justify-center items-center w-full">
            <div className="flex flex-col h-fit w-full xl:pt-24">
                <span className="w-[25%] text-8xl md:text-9xl font-mono font-bold text-[#FFFF]">My Work</span>
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
                    <div className="p-10 rounded-lg m-1 w-full h-fit flex flex-col justify-between backdrop-blur" style={{
                        backgroundImage: `linear-gradient(to right, rgba(0,0,0,1.0), rgba(0,0,0,0.0)), url(${background})`,
                        backgroundPosition: "center",
                        backgroundAttachment: 'fixed',
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}>
                        <div className="md:flex justify-between">
                            <header>
                                <div className="text-3xl md:text-5xl font-bold text-slate-200 mb-2">{repo.name}</div>
                                <div className="mb-10">
                                    <a className="text-xl md:text-3xl text-teal-700 md:w-[70%] break-all" href={baselink + repo.name}>https://github.com/2k4sm/{repo.name}</a>
                                </div>
                                <div className="text-xl md:text-3xl text-slate-400 md:w-[70%]">{repo.description}</div>
                            </header>
                            <main className="text-center text-slate-200 pt-3 md:w-44">
                                <div className="text-xl md:text-3xl text-emerald-500">{repo.language}</div>
                                <div className="text-base md:text-lg">Forks: {repo.forks}</div>
                                <div>Stars: {repo.stars}</div>
                            </main>
                        </div>

                        <footer>
                            <div className="text-xl md:text-3xl text-lime-500 mt-4">{repo.author}</div>
                        </footer>
                    </div>
                )
            })}
        </div>

    )
}


export default ShowCase;