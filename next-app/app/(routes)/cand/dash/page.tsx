import { getAuthSession } from "@/app/api/auth/[...nextauth]/auth"
import { prisma } from "@/prisma/db";
import UploadResume from "./UploadResume";

export default async function HomePage() {

    const session = await getAuthSession();

    const profile = await prisma.profile.findFirst({
        where: { userId : session?.user.id }
    })

    console.log(profile)

    if( !profile){
        return <UploadResume />
    }

    return (
        <div>
            Candidates HomePage
        </div>
    )
}