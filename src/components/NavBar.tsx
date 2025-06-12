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
        navref.current?.classList.remove('pt-10', 'sm:pt-8', 'md:pt-10');
        navref.current?.classList.add('pt-2');

      } else {
        nameRef.current?.classList.remove('hidden');
        underlineRef.current?.classList.remove('hidden');
        navref.current?.classList.remove('bg-[#00000085]');
        navref.current?.classList.add('pt-10', 'sm:pt-8', 'md:pt-10');
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
      <nav className="flex flex-col sm:flex-row sm:justify-between duration-1000 pt-10 sm:pt-8 md:pt-10 px-4 sm:px-6 md:px-10" ref={navref}>
        <div className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl w-full sm:w-auto mb-2 sm:mb-0 min-w-fit">
          <span className="text-[#c84576]" ref={nameRef}>sm2k4 <strong>.</strong></span>
          <span className="text-[#1c7ea1] font-medium" ref={underlineRef}> _</span>
        </div>

        <ul className="flex flex-wrap justify-center sm:justify-end items-center w-full sm:w-auto font-mono font-bold list-none text-xs sm:text-sm md:text-base">
          <li className="w-fit p-1 m-1 sm:p-0.5 sm:m-2 text-[#c74b7c] duration-500 hover:bg-[#d8cbc24b] hover:rounded-sm"><a href="#home">//home</a></li>
          <li className="w-fit p-1 m-1 sm:p-0.5 sm:m-2 text-[#b95093] duration-500 hover:bg-[#d8cbc24b] hover:rounded-sm"><a href="#me">//me</a></li>
          <li className="w-fit p-1 m-1 sm:p-0.5 sm:m-2 text-[#b95093] duration-500 hover:bg-[#d8cbc24b] hover:rounded-sm"><a href="#expertise">//expertise</a></li>
          <li className="w-fit p-1 m-1 sm:p-0.5 sm:m-2 text-[#b95093] duration-500 hover:bg-[#d8cbc24b] hover:rounded-sm"><a href="#showcase">//work</a></li>
          <li className="w-fit p-1 m-1 sm:p-0.5 sm:m-2 text-[#5a2f83] duration-500 hover:bg-[#d8cbc24b] hover:rounded-sm"><a href="#contact">//contact</a></li>
        </ul>
      </nav>
    </div>

  )
}

export default NavBar
