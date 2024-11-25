import DevBlock from "@/components/Home/DevBlock";
import { DevLinks } from "@/components/Home/DevLinks";
import { ParticlesHeroSection } from "@/components/Home/HeroSection";
import TechStackList from "@/components/Home/TechStackList";
import Particles from "@/components/ui/particles";

export default function App() {

  return (
    <div className="py-2 mb-10 flex flex-col gap-8">

      <div className="mt-4 flex gap-8 max-md:flex-col">
        <ParticlesHeroSection title="Purity AI" />

        <TechStackList items={items} />
      </div>
      <div className="flex gap-8 max-md:flex-col">

        <DevBlock />

        <DevLinks title={"Meet the Dev : Parth Kapoor"} links={devLinks} />
      </div>
    </div>
  )
}

const devLinks = {
  github: "https://github.com/parthKapoor-dev/",
  linkedin: "https://www.linkedin.com/in/parthkapoor08/",
  twitter: "https://x.com/Parthkapoor_TE",
  portfolio: "https://linktr.ee/parthkapoordev",
  email : "mailto:parthkapoor.coder@gmail.com"
}

const items = [
  {
    name: "Parth Kapoor",
    description: "Placed at Amazon",
    icon: "👑",
    color: "#333333",
    link: "https://nextjs.org/"
  },
  {
    name: "Giriraj Dhyani",
    description: "Interned at Google",
    icon: "👤",
    color: "#FFB800",
    link: "https://prisma.io/"
  },
  {
    name: "Aarya Agarwal",
    description: "Declared Drug Addict at Thapar University",
    icon: "💬",
    color: "#FF3D71",
    link: "https://next-auth.js.org/"
  },
  {
    name: "Shishimaru",
    description: "Biggest Perv of India",
    icon: "💫",
    color: "#FF4D71",
    link: "https://magicui.design/"
  },
  {
    name: "Gouri Rabgotra",
    description: "AI Specialist",
    icon: "👻",
    color: "#EE86RF",
    link: "https://tailwindcss.com/"
  },
  {
    name: "Deepok Bhagat",
    description: "President at Racist Society of India",
    icon: "🏎️",
    color: "#000000",
    link: "https://www.framer.com/motion"
  },
  {
    name: "Anisha Sharma",
    description: "Cultivation Engineering",
    icon: "🎡",
    color: "#87CEEB",
    link: "https://ui.shadcn.com/docs/dark-mode/next"
  },
  // {
  //   name: "Lucide-react",
  //   description: "Easy to use Icons",
  //   icon: "🍦",
  //   color: "#FFC0CB",
  //   link: "https://lucide.dev/"
  // },
  // {
  //   name: "Intercepting Auth Routes",
  //   description: "Implemeted @AuthModal Routes",
  //   icon: "🔐",
  //   color: "#1E3A8A",
  //   link: "https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes"
  // },
];
