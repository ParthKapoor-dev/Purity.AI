"use client";

import AiInput from "@/components/kokonutui/AI-Input";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { Block, ChatBlock, UserBlock } from "@/types/blocks";
import { useState, useEffect, useRef } from "react";
import ReturnBlock from "./chatbox/returnBlock";
import InputBlock from "./chatbox/inputBlock";
import { Trash } from "lucide-react";
import getUsersByIds from "./chatbox/getUsers";

export default function RecruiterDashboard() {
    const [blocks, setBlocks] = useState<Block[]>(() => {
        const blocks = localStorage.getItem("blocks");
        return blocks ? JSON.parse(blocks) : [];
    });

    const aiInputRef = useRef<SVGSVGElement | undefined>(null);
    const aiInputResponse = "These are the Eligible Candidates according to your query";

    function handleDelete() {
        localStorage.setItem("blocks", JSON.stringify([]));
        setBlocks([]);
    }

    async function handleAddNewBlock(input: string, item: string | null) {
        const newBlock: UserBlock = {
            type: 'user',
            input,
        };

        setBlocks(prev => {
            const newBlocks = [...prev];
            newBlocks.push(newBlock);
            localStorage.setItem("blocks", JSON.stringify(newBlocks));
            return newBlocks;
        });

        const top_k = 5;

        try {
            const url = process.env.AI_SERVER || "http://localhost:8000" +
                `/api/search/?query=${encodeURIComponent(input)}&top_k=${top_k}`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            });

            const json = await response.json();
            if (response.ok) {

                const users = await getUsersByIds(json.results);

                const aiResponse: ChatBlock = {
                    type: 'chat',
                    input: aiInputResponse,
                    candidates : users
                };

                setBlocks(prev => {
                    const newBlocks = [...prev];
                    newBlocks.push(aiResponse);
                    localStorage.setItem("blocks", JSON.stringify(newBlocks));
                    return newBlocks;
                });
            }
        } catch (error) {
            console.error("Error fetching AI response:", error);
        }
    }

    useEffect(() => {
        if (aiInputRef.current) {
            aiInputRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [blocks]);

    return (
        <div className="flex flex-col items-center gap-6 pb-20">
            <GradualSpacing className="font-display text-center text-xl font-semibold -tracking-widest text-black dark:text-white md:text-xl " text="Welcome Recruiter! Search your next Candidates with AI" />

            <div className="flex flex-col gap-6 w-full">
                {blocks.map(item => {
                    if (item.type === "chat") return <ReturnBlock {...item} key={item.input} />;
                    if (item.type === "user") return <InputBlock {...item} key={item.input} />;
                })}
            </div>

            {/* Add reference to AiInput */}
            <AiInput onSubmit={handleAddNewBlock} />

            <div className="flex justify-end w-full max-w-xl items-center gap-6 text-red-500">
                <p>
                    Delete Chats
                </p>

                <div className="p-2 border-[1px] border-red-500 rounded-lg hover:bg-red-500 hover:text-white text-red-500 duration-200" onClick={handleDelete}>
                    <Trash className="cursor-pointer" ref={aiInputRef} />
                </div>
            </div>
        </div>
    );
}
