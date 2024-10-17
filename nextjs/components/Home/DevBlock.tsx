import Link from "next/link";
import { CoolMode } from "../magicui/coolMode";
import { Button } from "../ui/button";

export default function DevBlock() {
  return (
    <div className="relative flex flex-col h-[400px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-4 md:shadow-xl gap-2">
      <CoolMode>
        <Button>
          Hola Fellow Devs , Come Click Me
        </Button>
      </CoolMode>

      <Link href={"https://github.com/ParthKapoor-dev/create-next-js"} className="flex justify-center items-center" target="_blank">
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-700/80 bg-clip-text text-center text-xl font-semibold leading-none text-transparent dark:from-white dark:to-black md:text-3xl">
          I am Parth , the developer of this package. I crafted it to ease the development of your rapid-prototypes. It is an open source project , So if you feel need for any changes try contributing to{" "}
          <span className=" cursor-pointer underline underline-offset-6 decoration-gray-700/80">
            @parthkapoor-dev/create-next-js
          </span>
        </span>
      </Link>
    </div>
  )
}