import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

function Me() {

  const { RiveComponent } = useRive({
    src: 'home_page.riv',
    stateMachines: 'State Machine 1',
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
    autoplay: true,
  });

  return (
    <div id="me" className="bg-gradient-to-r from-[#00304f] via-[#0d364d] to-[#002440] h-fit p-5 md:p-20 pt-36 max-w-screen">
      <div className="xl:flex xl:flex-row justify-between items-center">
        <div className="">
          <div className="w-[33%] text-8xl md:text-9xl font-mono font-bold text-[#FFFF]">
            <span>Know Me</span>
          </div>
          <div className="text-xl md:text-3xl font-sans text-[#c5c5c6] max-w-md md:max-w-2xl mx-2">
            <p className="mb-7">
              I'm a passionate software engineer specializing in backend development, cloud computing, and AI/ML systems. Currently pursuing my Bachelor's + Master's in Computer Science, I enjoy building scalable systems, working with microservices architectures, and optimizing performance at scale.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, listening to rock music, or diving into video games. I believe in continuous learning, embracing challenges, and finding joy in the journey of creating impactful software solutions.
            </p>
          </div>
        </div>
        <div className="text-center">
          <RiveComponent className="xl:w-[50vw] h-[300px] md:h-[699px]" />
        </div>
      </div>
    </div>
  )
}

export default Me;
