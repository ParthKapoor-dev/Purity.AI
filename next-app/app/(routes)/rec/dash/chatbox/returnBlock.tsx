import Card from "@/components/kokonutui/Card"
import { candidate, ChatBlock } from "@/types/blocks"
import Image from "next/image"
import Link from "next/link"

interface ReturnBlockProps extends ChatBlock {
}

export default function ReturnBlock({ input , candidates }: ReturnBlockProps) {

    console.log(candidates)

    return (
        <div className="flex flex-col gap-4">

            <Card input={input} type="chat" />

            <div className="flex flex-col gap-2 w-full max-w-xl mx-auto">
                {candidates?.map(cand => <Candidate user={cand} key={cand.id}/>)}
            </div>


        </div>
    )
}


function Candidate({ user } : { user : candidate}){

    return(

        <div className="flex gap-3 items-center">
            <img src={user.image || ""} alt="" className="h-8 w-8 rounded-full" />
            <p>
                {user.name}
            </p>

            <p className=" text-slate-500">
                ({user.email})
            </p>

            <Link href={user.profile?.resumeLink ? user.profile.resumeLink : ""} target="_blank" className=" cursor-pointer hover:underline text-blue-900">
                Resume
            </Link>

        </div>

    )

}