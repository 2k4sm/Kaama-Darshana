import { useEffect, useState } from "react";


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
        <div className="flex flex-col justify-center items-center w-full">
            {repos.map((repo: {
                author: string,
                description: string,
                forks: number,
                language: string,
                name: string,
                stars: number
            }) => {
                return (
                    <div className="bg-slate-600 p-10 rounded-lg m-1 w-full h-96">
                        <div>{repo.author}</div>
                        <div>{repo.name}</div>
                        <div>{repo.description}</div>
                        <div>{repo.language}</div>
                        <div>{repo.forks}</div>
                        <div>{repo.stars}</div>
                    </div>
                )
            })}
        </div>

    )
}


export default ShowCase;