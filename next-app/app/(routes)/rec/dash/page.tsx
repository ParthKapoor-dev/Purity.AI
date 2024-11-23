"use client";

import AiInput from "@/components/kokonutui/AI-Input";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { Block, ChatBlock, UserBlock } from "@/types/blocks";
import {  useState } from "react";
import ReturnBlock from "./chatbox/returnBlock";
import InputBlock from "./chatbox/inputBlock";

export default function RecruiterDashboard() {

    const [blocks, setBlocks] = useState<Block[]>(() => {
        const blocks = localStorage.getItem("blocks");
        return blocks ? JSON.parse(blocks) : [];
    })


    // Testing 
    // localStorage.setItem("blocks", JSON.stringify([]));



    async function handleAddNewBlock(input: string, item: string | null) {

        const newBlock: UserBlock = {
            type: 'user',
            input,
        }

        const aiResponse: ChatBlock = {
            type : 'chat',
            input : "You can define an interface Block that is a union type of UserBlock and ChatBlock. This allows a Block to be either a UserBlock or a ChatBlock, and TypeScript will enforce the correct type-checking for the type property."
        }

        setBlocks(prev => {
            const newBlocks = [...prev];
            newBlocks.push(newBlock);
            newBlocks.push(aiResponse);

            localStorage.setItem("blocks", JSON.stringify(newBlocks));
            return newBlocks;
        });

    }

    return (
        <div className="flex flex-col items-center gap-6 ml-10">

            <GradualSpacing className="font-display text-center text-xl font-semibold -tracking-widest  text-black dark:text-white md:text-xl " text="Welcome Recruiter! Search your next Candidates with AI" />

            <div className="flex flex-col gap-6 w-full">
                {blocks.map(item => {
                    if (item.type == "chat") return <ReturnBlock {...item} />
                    if (item.type == "user") return <InputBlock {...item} />
                })}
            </div>

            <AiInput onSubmit={handleAddNewBlock} />

        </div>
    )
}   