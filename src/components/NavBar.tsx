import { useRef, useEffect } from "react"

function NavBar() {

    const nameRef = useRef<HTMLElement>(null);
    const underlineRef = useRef<HTMLElement>(null);
    const navref = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                nameRef.current?.classList.add('hidden');
                underlineRef.current?.classList.add('hidden');
                navref.current?.classList.add('bg-[#00000085]');
                navref.current?.classList.remove('pt-10');
                navref.current?.classList.add('pt-2');

            } else {
                nameRef.current?.classList.remove('hidden');
                underlineRef.current?.classList.remove('hidden');
                navref.current?.classList.remove('bg-[#00000085]');
                navref.current?.classList.add('pt-10');
                navref.current?.classList.remove('pt-2');

            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <nav className=" md:flex justify-between duration-1000 pt-10 pl-10" ref={navref}>
                <div className="text-center text-4xl w-full md:w-2/5 md:text-start min-w-fit">
                    <span className="text-[#c84576]" ref={nameRef}>2k4sm <strong>.</strong></span>
                    <span className="text-[#1c7ea1] font-medium" ref={underlineRef}> _</span>
                </div>

                <ul className="flex flex-wrap justify-center md:justify-start items-center w-[75%] mx-auto md:w-3/5 font-mono font-bold list-none">
                    <li className="w-fit p-0.5 m-2 text-[#c74b7c] duration-500 hover:bg-[#d8cbc24b] hover:rounded-sm"><a href="#home">//home</a></li>
                    <li className="w-fit p-0.5 m-2 text-[#b95093] duration-500 hover:bg-[#d8cbc24b] hover:rounded-sm"><a href="#me">//me</a></li>
                    <li className="w-fit p-0.5 m-2 text-[#b95093] duration-500 hover:bg-[#d8cbc24b] hover:rounded-sm"><a href="#expertise">//expertise</a></li>
                    <li className="w-fit p-0.5 m-2 text-[#b95093] duration-500 hover:bg-[#d8cbc24b] hover:rounded-sm"><a href="#showcase">//work</a></li>
                    <li className="w-fit p-0.5 m-2 text-[#9b4d9b] duration-500 hover:bg-[#d8cbc24b] hover:rounded-sm"><a href="#experience">//experience</a></li>
                    <li className="w-fit p-0.5 text-[#5a2f83] duration-500 hover:bg-[#d8cbc24b] hover:rounded-sm"><a href="#contact">//contact</a></li>
                </ul>
            </nav>
        </div>

    )
}

export default NavBar