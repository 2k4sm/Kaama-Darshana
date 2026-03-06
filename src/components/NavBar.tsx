import { useRef, useEffect } from "react"
import { Separator } from "./ui/separator"

function NavBar() {

  const nameRef = useRef<HTMLElement>(null);
  const underlineRef = useRef<HTMLElement>(null);
  const navref = useRef<HTMLElement>(null);
  const separatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        nameRef.current?.classList.add('hidden');
        underlineRef.current?.classList.add('hidden');
        separatorRef.current?.classList.add('hidden');
        navref.current?.classList.add('bg-black/40', 'backdrop-blur-xl', 'border-b', 'border-white/[0.08]');
        navref.current?.classList.remove('pt-10', 'sm:pt-8', 'md:pt-10');
        navref.current?.classList.add('pt-3', 'pb-3');

      } else {
        nameRef.current?.classList.remove('hidden');
        underlineRef.current?.classList.remove('hidden');
        separatorRef.current?.classList.remove('hidden');
        navref.current?.classList.remove('bg-black/40', 'backdrop-blur-xl', 'border-b', 'border-white/[0.08]');
        navref.current?.classList.add('pt-10', 'sm:pt-8', 'md:pt-10');
        navref.current?.classList.remove('pt-3', 'pb-3');

      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav className="flex flex-col sm:flex-row sm:justify-between transition-all duration-500 ease-in-out pt-10 sm:pt-8 md:pt-10 px-4 sm:px-6 md:px-10" ref={navref}>
        <div className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl w-full sm:w-auto mb-2 sm:mb-0 min-w-fit">
          <span className="font-bold bg-gradient-to-r from-[#c84576] via-[#b95093] to-[#5a2f83] bg-clip-text text-transparent" ref={nameRef}>sm2k4 <strong>.</strong></span>
          <span className="text-[#1c7ea1] font-medium" ref={underlineRef}> _</span>
        </div>

        <ul className="flex flex-wrap justify-center sm:justify-end items-center w-full sm:w-auto font-mono font-bold list-none text-xs sm:text-sm md:text-base gap-1">
          {[
            { href: "#home", label: "//home" },
            { href: "#me", label: "//me" },
            { href: "#expertise", label: "//expertise" },
            { href: "#showcase", label: "//work" },
            { href: "#contact", label: "//contact" },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block px-3 py-1.5 text-[#d4a0c0] rounded-md transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div ref={separatorRef}>
        <Separator className="bg-white/5" />
      </div>
    </div>

  )
}

export default NavBar
