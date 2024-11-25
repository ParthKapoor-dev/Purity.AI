import Particles from "@/components/magicui/particles";

export function ParticlesHeroSection({title} : {title : string}) {

  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        {title}
      </span>
      <Particles
        className="absolute inset-0"
        quantity={300}
        ease={80}
        color={"black"}
        refresh
      />
    </div>
  );
}
