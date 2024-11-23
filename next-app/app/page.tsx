import DevBlock from "@/components/Home/DevBlock";
import { DevLinks } from "@/components/Home/DevLinks";
import ParticlesHeroSection from "@/components/Home/HeroSection";
import TechStackList from "@/components/Home/TechStackList";

export default function App() {

  return (
    <div className="py-2 mb-10 flex flex-col gap-8">

      <div className="mt-4 flex gap-8 max-md:flex-col">
        <ParticlesHeroSection title={"Your Next JS Starter Pack"}  />

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
    name: "Next JS",
    description: "The React Framework for the Web",
    icon: "👑",
    color: "#333333",
    link: "https://nextjs.org/"
  },
  {
    name: "Prisma",
    description: "Simplified Database working",
    icon: "👤",
    color: "#FFB800",
    link: "https://prisma.io/"
  },
  {
    name: "Next Auth",
    description: "For Secure Authentication",
    icon: "💬",
    color: "#FF3D71",
    link: "https://next-auth.js.org/"
  },
  {
    name: "ShadCN UI",
    description: "Customizable & Resuable UI Components",
    icon: "🗞️",
    color: "#1E86FF",
    link: "https://ui.shadcn.com/"
  },
  {
    name: "Magic UI",
    description: "Latest Design UI / UX",
    icon: "💫",
    color: "#FF4D71",
    link: "https://magicui.design/"
  },
  {
    name: "Tailwind CSS",
    description: "Customizable & Resuable UI Components",
    icon: "👻",
    color: "#EE86RF",
    link: "https://tailwindcss.com/"
  },
  {
    name: "Framer Motion",
    description: "Fast & Amazing Animations",
    icon: "🏎️",
    color: "#000000",
    link: "https://www.framer.com/motion"
  },
  {
    name: "Next Themes",
    description: "To Setup your own theming",
    icon: "🎡",
    color: "#87CEEB",
    link: "https://ui.shadcn.com/docs/dark-mode/next"
  },
  {
    name: "Lucide-react",
    description: "Easy to use Icons",
    icon: "🍦",
    color: "#FFC0CB",
    link: "https://lucide.dev/"
  },
  {
    name: "Intercepting Auth Routes",
    description: "Implemeted @AuthModal Routes",
    icon: "🔐",
    color: "#1E3A8A",
    link: "https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes"
  },
];
