import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import { Separator } from "./ui/separator";

function Contact() {

  const { RiveComponent } = useRive({
    src: 'footer.riv',
    stateMachines: 'State Machine 1',
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
    autoplay: true,
  });

  const links = [
    { href: "https://2k4sm.tech", label: "Website" },
    { href: "https://x.com/2k4shrini", label: "X" },
    { href: "https://linkedin.com/in/2k4sm", label: "LinkedIn" },
    { href: "https://github.com/2k4sm/", label: "Github" },
  ];

  return (
    <div id="contact" className="bg-gradient-to-b from-[#00154f] via-[#0d1e4d] to-[#002440] h-fit p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 pt-20 sm:pt-28 md:pt-36 max-w-screen overflow-hidden">
      <div className="flex flex-col xl:flex-row justify-between items-center gap-8 xl:gap-16">
        <div className="w-full xl:w-[60%] text-center xl:text-start">
          <h2 className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-bold pb-4 sm:pb-6 leading-tight">
            Open to Select Opportunities
          </h2>
          <Separator className="mb-6 mx-auto xl:mx-0 bg-gradient-to-r from-[#93ebe3] to-transparent h-0.5 border-0 max-w-[200px]" />

          <div className="space-y-3">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono font-bold text-[#93ebe3]/90 leading-relaxed">
              Have an exciting project you need help with?
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono font-bold text-[#93ebe3]/90 leading-relaxed">
              Send me an email or contact me via instant message!
            </p>
          </div>

          <div className="pt-8 sm:pt-12 md:pt-16 flex flex-row justify-center xl:justify-start">
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-mono font-bold flex flex-col text-[#e1d9f0] space-y-3">
              <a
                href="mailto:shrinibasmahanta2004@gmail.com"
                className="text-[#b293eb] break-all sm:break-normal hover:text-[#c9b0f5] transition-colors duration-200"
              >
                shrinibasmahanta2004@gmail.com
              </a>
              <Separator className="bg-white/10" />
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {links.map((link) => (
                  <a
                    key={link.label}
                    className="no-underline hover:text-fuchsia-400 transition-all duration-200 hover:-translate-y-0.5"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center xl:items-end w-full xl:w-auto mt-8 xl:mt-0">
          <RiveComponent className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] xl:w-[724px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] max-w-full" />
        </div>
      </div>

      <Separator className="mt-12 sm:mt-16 md:mt-20 bg-white/5" />
      <div className="pt-6 pb-4">
        <div className="text-center text-[#93ebe3]/70 text-sm sm:text-base px-4">
          <span>&copy; {new Date().getFullYear()} Shrinibas Mahanta. All rights reserved.</span>
        </div>
      </div>
    </div>
  )
}

export default Contact;
