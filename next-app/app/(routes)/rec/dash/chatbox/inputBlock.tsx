import Card from "@/components/kokonutui/Card"
import { UserBlock } from "@/types/blocks"
import { LinkIcon } from "lucide-react";

interface InputBlockProps extends UserBlock {
}

export default function InputBlock({ input }: InputBlockProps) {

    return (

        <div>

            <Card input={input} type="user"  />

        </div>

    )
}