export type Response = {
    status: number,
    message: string
}

export interface User {
    id: number;
    name: string;
    company: Company
}
type Company = {
    name: string
}

export interface Post {
    id: number
    userId: number
    title: string
    body: string
}