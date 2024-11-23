import Link from "next/link";
import { Icons } from "../Icons";
import UserAuthForm from "./UserAuthForm";
import { Separator } from "../ui/separator";

export default function SignupComponent() {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 ">

      <div className="flex flex-col space-y-2 text-center  items-center">
        <Icons.nextLogo className="h-4" />
        <h1 className="text-2xl font-semibold tracking-light">Register Here</h1>

        <div className="flex gap-8 text-lg" >
          <div className="gap-2 flex flex-col">
            <p>
              Start as a <span className="font-semibold">Candidate</span>
            </p>

            <UserAuthForm role="CANDIDATE" className="min-w-60" />
          </div>

          <Separator orientation="vertical" className=" bg-black/30" />

          <div className="gap-2 flex flex-col">
            <p>
              Start as a <span className="font-semibold">Recruiter</span>
            </p>

            <UserAuthForm role="RECRUITER" className="min-w-60" />
          </div>
        </div>


        <p className="px-8 text-center text-sm text-zinc-700">
          Already a Member ?{" "}
          <Link href={"/login"} className="hover:text-zinc-800 text-sm underline underline-offset-4">
            Login
          </Link>
        </p>
      </div>

    </div>
  )
}