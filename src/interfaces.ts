export interface IAuthor {
    name: string,
    year: string,
    id: number,
}

export interface IBook {
    name: string,
    year: string,
    type: string,
    author_id: number,
    id: number,
}