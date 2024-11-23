import Card from "@/components/kokonutui/Card"
import { ChatBlock } from "@/types/blocks"

interface ReturnBlockProps extends ChatBlock {
}

export default function ReturnBlock({ input }: ReturnBlockProps) {
    return (
        <div>

            <Card input={input} type="chat" />

        </div>
    )
}