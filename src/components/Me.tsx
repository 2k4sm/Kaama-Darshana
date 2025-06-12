import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

function Me() {

  const { RiveComponent } = useRive({
    src: 'home_page.riv',
    stateMachines: 'State Machine 1',
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
    autoplay: true,
  });

  return (
    <div id="me" className="bg-gradient-to-r from-[#00304f] via-[#0d364d] to-[#002440] h-fit p-5 md:p-20 pt-16 sm:pt-24 md:pt-36 max-w-screen">
      <div className="flex flex-col xl:flex-row justify-between items-center gap-8 xl:gap-0">
        <div className="w-full xl:w-auto">
          <div className="w-full sm:w-[80%] md:w-[60%] xl:w-[33%] text-4xl sm:text-6xl md:text-8xl xl:text-9xl font-mono font-bold text-[#FFFF] mb-6 sm:mb-8">
            <span>Know Me</span>
          </div>
          <div className="text-base sm:text-lg md:text-xl xl:text-3xl font-sans text-[#c5c5c6] max-w-full sm:max-w-lg md:max-w-xl xl:max-w-2xl mx-0 sm:mx-2">
            <p className="mb-4 sm:mb-5 md:mb-7">
              I'm Shrinibas Mahanta (he/him), a self-taught developer currently pursuing a Bachelor's in Computer Science at BITS Pilani. My passion for computers and technology drives me to keep exploring and learning.            </p>
            <p className="mb-4 sm:mb-5 md:mb-7">
              I specialize in backend development and love diving into new technologies. Lately, I’ve been focusing on application architectures, frameworks, improving in data structures and algorithms, exploring databases, and writing cleaner code.            </p>
            <p >
              Beyond tech, I enjoy rock music, video games, and bike trips. My goals are to stay curious, apply what I learn to make an impact, grow from my mistakes, and find happiness along the way.
            </p>
          </div>
        </div>
        <div className="text-center w-full xl:w-auto">
          <RiveComponent className="w-full sm:w-[80vw] md:w-[60vw] xl:w-[50vw] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[699px]" />
        </div>
      </div>
    </div >
  )
}

export default Me;
