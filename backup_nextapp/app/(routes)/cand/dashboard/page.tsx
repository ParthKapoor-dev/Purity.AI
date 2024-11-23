import { getAuthSession } from "@/app/api/auth/[...nextauth]/auth"
import { prisma } from "@/prisma/db";

export default async function HomePage() {

    const session = await getAuthSession();

    const user = await prisma.user.findFirst({
        where: { email: session?.user.email }
    });

    console.log("Hello World")
    console.log(user);

    // console.log(profile);



    return (
        <div>
            Candidates HomePage
        </div>
    )
}