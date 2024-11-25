
import { getAuthSession } from "@/app/api/auth/[...nextauth]/auth";
import UploadInput from "@/components/kokonutui/input-03";
import { prisma } from "@/prisma/db";
import { toast } from "@/components/ui/use-toast";


export default function UploadResume() {


    async function createUserProfile(resumeLink: string) {
        "use server"
        try {

            const session = await getAuthSession();

            const profile = await prisma.profile.create({
                data: {
                    resumeLink: resumeLink,
                    user: {
                        connect: { id: session?.user.id }
                    }
                },
            });

            console.log('Profile created:', profile);

            const userId = session?.user.id;
            const url =  process.env.AI_SERVER + `/api/resume/?resume_url=${encodeURIComponent(resumeLink)}${userId ? `&userId=${encodeURIComponent(userId)}` : ''}`;

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "Application/json"
                },
            });

            const json = await response.json();

            toast({
                variant : "default",
                title : "OnBoarding Process Completed!"
            })

        } catch (error: any) {
            console.error('Error creating profile:', error.message);
            throw error;
        }
    }



    return (
        <div className="flex flex-col h-full w-full items-center gap-6">

            <p className="p-3 border rounded-lg bg-slate-200 text-slate-500">
                Profile Incomplete
            </p>

            <p>We First Need you to upload your Resume in a PDF format.</p>


            <UploadInput createUserProfile={createUserProfile} />
        </div>
    );
}

