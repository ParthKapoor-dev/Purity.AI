
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
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    username: string | null;
    role: Role | null;
    image: string | null;
    profile : {
        resumeLink : string,
        id : string,
        userId : string
    } | null
}