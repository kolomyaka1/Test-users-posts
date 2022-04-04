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