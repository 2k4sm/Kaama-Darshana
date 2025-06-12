import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

function Contact() {

  const { RiveComponent } = useRive({
    src: 'footer.riv',
    stateMachines: 'State Machine 1',
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
    autoplay: true,
  });


  return (
    <div id="contact" className="bg-gradient-to-b from-[#00154f] via-[#0d1e4d] to-[#002440] h-fit p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 pt-20 sm:pt-28 md:pt-36 max-w-screen overflow-hidden">
      <div className="flex flex-col xl:flex-row justify-between items-center gap-8 xl:gap-16">
        <div className="w-full xl:w-[60%] text-center xl:text-start">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-[#FFFF] pb-6 sm:pb-8 md:pb-10 leading-tight">
            <span>Open to Select Opportunities</span>
          </div>
          <div className="space-y-2 sm:space-y-3">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono font-bold text-[#93ebe3] leading-relaxed">
              <span>
                Have an exciting project you need help with?
              </span>
            </div>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono font-bold text-[#93ebe3] leading-relaxed">
              <span>
                Send me an email or contact me via instant message!
              </span>
            </div>
          </div>

          <div className="pt-8 sm:pt-12 md:pt-16 flex flex-row justify-center xl:justify-start">
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-mono font-bold flex flex-col text-[#e1d9f0] space-y-1 sm:space-y-2">
              <a href="mailto:shrinibasmahanta2004@gmail.com" className="text-[#b293eb] break-all sm:break-normal">shrinibasmahanta2004@gmail.com</a>
              <a className="no-underline hover:text-fuchsia-600 duration-200" href="https://2k4sm.tech">Website</a>
              <a className="no-underline hover:text-fuchsia-600 duration-200" href="https://x.com/2k4shrini">X</a>
              <a className="no-underline hover:text-fuchsia-600 duration-200" href="https://linkedin.com/in/2k4sm">Linkedin</a>
              <a className="no-underline hover:text-fuchsia-600 duration-200" href="https://github.com/2k4sm/">Github</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center xl:items-end w-full xl:w-auto mt-8 xl:mt-0">
          <RiveComponent className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] xl:w-[724px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] max-w-full" />
        </div>
      </div>
      <div className="pt-12 sm:pt-16 md:pt-20">
        <div className="text-center text-[#93ebe3] text-sm sm:text-base px-4">
          <span>© {new Date().getFullYear()} Shrinibas Mahanta. All rights reserved.</span>
        </div>
      </div>
    </div>
  )
}

export default Contact;
