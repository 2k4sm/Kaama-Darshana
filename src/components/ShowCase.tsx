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

    return (
        <div className="flex flex-wrap flex-col justify-center items-center w-full">
            {repos.map((repo: {
                author: string,
                description: string,
                forks: number,
                language: string,
                name: string,
                stars: number
            }) => {
                return (
                    <div className="p-10 rounded-lg m-1 w-full h-fit flex flex-col justify-between" style={{
                        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${background})`,
                        backgroundPosition: "center",
                        backgroundAttachment: 'fixed',
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}>
                        <div className="md:flex justify-between">
                            <header>
                                <div className="text-3xl md:text-5xl font-bold text-slate-200">{repo.name}</div>
                                <div className="text-xl md:text-3xl text-slate-400 md:w-[70%]">{repo.description}</div>

                            </header>
                            <main className="text-center text-slate-200 pt-3 md:w-44">
                                <div className="text-xl md:text-3xl text-emerald-500">{repo.language}</div>
                                <div className="text-base md:text-lg">Forks: {repo.forks}</div>
                                <div>Stars: {repo.stars}</div>
                            </main>
                        </div>

                        <footer>
                            <div className="text-xl md:text-3xl text-lime-500">{repo.author}</div>
                        </footer>
                    </div>
                )
            })}
        </div>

    )
}


export default ShowCase;