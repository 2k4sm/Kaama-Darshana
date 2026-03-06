function HomeContent() {
  return (
    <div id="home" className="bg-[#0000006b] h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#00304f]/80 pointer-events-none" />

      <div className="relative z-10 space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-mono font-bold text-slate-200 leading-tight break-words max-w-full tracking-tight opacity-0 animate-fade-in-up">
          SHRINIBAS MAHANTA
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl font-normal text-slate-400 max-w-full px-2 opacity-0 animate-fade-in-up [animation-delay:200ms]">
          Software Engineer, Full Stack Developer.
        </p>

        <div className="flex items-center justify-center gap-3 pt-4 opacity-0 animate-fade-in-up [animation-delay:400ms]">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c84576]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#c84576] animate-pulse" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c84576]" />
        </div>
      </div>
    </div>
  )
}

export default HomeContent;
