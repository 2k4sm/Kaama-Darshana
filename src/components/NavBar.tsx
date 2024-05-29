
function NavBar() {
    return (
        <nav className="bg-[#0000006b]  md:flex justify-between p-10">
            <div className="text-center text-4xl w-full md:w-2/5 md:text-start min-w-fit">
                <span className="text-[#c84576]">2k4sm <strong>.</strong></span>
                <span className="text-[#1c7ea1] font-medium"> _</span>
            </div>

            <ul className="flex justify-center md:justify-start items-center w-1/3 mx-auto md:w-3/5 font-mono font-bold list-none">
                <li className="w-fit m-1 sm:m-4 text-[#c74b7c]"><a href="#home">// home</a></li>
                <li className="w-fit m-1 sm:m-4 text-[#b95093]"><a href="#expertise">// expertise</a></li>
                <li className="w-fit m-1 sm:m-4 text-[#a56498]"><a href="#work">// work</a></li>
                <li className="w-fit m-1 sm:m-4 text-[#9b4d9b]"><a href="/experience">// experience</a></li>
                <li className="w-fit m-1 sm:m-4 text-[#5a2f83]"><a href="/contact">// contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar