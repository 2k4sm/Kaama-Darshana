
function NavBar() {
    return (
        <nav className="flex justify-between m-4">
            <div className="text-4xl w-2/5 text-start min-w-fit">
                <span>2k4sm.</span>
                <span>_</span>
            </div>

            <div className="flex justify-start w-3/5 font-mono font-bold">
                <p className="m-4"><a href="/">// home</a></p>
                <p className="m-4"><a href="/expertise">// expertise</a></p>
                <p className="m-4"><a href="/work">// work</a></p>
                <p className="m-4"><a href="/experience">// experience</a></p>
                <p className="m-4"><a href="/contact">// contact</a></p>
            </div>
        </nav>
    )
}

export default NavBar