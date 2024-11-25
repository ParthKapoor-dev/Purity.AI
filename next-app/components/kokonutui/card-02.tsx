import { Calendar, Clock, File, Send } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";


interface Card02Props {
    name?: string;
    email?: string;
    image?: string;
    resume_link: string;
    rating?: number;
}


export default function ProfileCard({
    name,
    email ,
    image ,
    resume_link ,
    rating ,
}: Card02Props ) {
    return (
        <div className="relative w-full max-w-lg mx-auto">
            <div
                className="relative overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 
                bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-2xl shadow-md"
            >
                <div className="p-8">
                    <div className="flex items-start gap-6">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-2xl overflow-hidden ring-2 ring-zinc-100 dark:ring-zinc-800">
                                {image && (
                                    <Image
                                        src={image}
                                        alt={name}
                                        width={96}
                                        height={96}
                                        className="object-cover"
                                    />
                                )}
                            </div>
                            <div
                                className="absolute -bottom-1 -right-1 p-1.5 rounded-lg 
                                bg-emerald-50 dark:bg-emerald-900/50 
                                text-emerald-600 dark:text-emerald-400
                                ring-2 ring-white dark:ring-zinc-900"
                            >
                                <Clock className="w-3.5 h-3.5" />
                            </div>
                        </div>

                        <div className="flex-1 pt-2">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                                        {name}
                                    </h3>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                        {email}
                                    </p>
                                </div>
                                <div
                                    className="flex items-center gap-1 px-2.5 py-1 rounded-full 
                                    bg-zinc-100 dark:bg-zinc-800"
                                >
                                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                        {rating}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                                    <File className="w-4 h-4" />
                                    <Link href={resume_link} target="_blank" className=" hover:underline">
                                        Resume
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
