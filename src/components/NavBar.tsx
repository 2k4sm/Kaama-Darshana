
function NavBar() {
    return (
        <nav className="flex justify-between p-10">
            <div className="text-4xl w-2/5 text-start min-w-fit">
                <span className="text-[#c84576]">2k4sm <strong>.</strong></span>
                <span className="text-[#1c7ea1] font-medium"> _</span>
            </div>

            <div className="flex justify-start w-3/5 font-mono font-bold">
                <p className="m-4 text-[#c74b7c]"><a href="#home">// home</a></p>
                <p className="m-4 text-[#b95093]"><a href="#expertise">// expertise</a></p>
                <p className="m-4 text-[#a56498]"><a href="/work">// work</a></p>
                <p className="m-4 text-[#9b4d9b]"><a href="/experience">// experience</a></p>
                <p className="m-4 text-[#5a2f83]"><a href="/contact">// contact</a></p>
            </div>
        </nav>
    )
}

export default NavBar