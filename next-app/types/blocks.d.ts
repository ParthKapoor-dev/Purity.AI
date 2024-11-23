
export type Block = UserBlock | ChatBlock;

export interface UserBlock {
    type: 'user'
    input: string
}


export interface ChatBlock {
    type: 'chat'
    input: string
    candidates?: candidate[]
}

export interface candidate {
    name: string
    id: string
}