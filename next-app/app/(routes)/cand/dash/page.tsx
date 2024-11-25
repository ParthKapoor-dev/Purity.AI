import { getAuthSession } from "@/app/api/auth/[...nextauth]/auth"
import { prisma } from "@/prisma/db";
import UploadResume from "./UploadResume";
import ProfileCard from "@/components/kokonutui/card-02";
import List from "@/components/kokonutui/list-02";

export default async function HomePage() {

    const session = await getAuthSession();
    const user = session?.user;

    const profile = await prisma.profile.findFirst({
        where: { userId: session?.user.id }
    })

    console.log(profile)

    if (!profile) {
        return <UploadResume />
    }

    return (
        <div className="flex flex-col items-center w-full max-w-xl mx-auto gap-6">

            <ProfileCard
                name={user?.name || ""}
                image={user?.image || ""}
                email={user?.email || ""}
                resume_link={profile.resumeLink}
                rating={9}
            />

            <List />


        </div>
    )
}