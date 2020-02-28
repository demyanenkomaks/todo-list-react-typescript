import React from "react"
import { BookView } from "../components/BookView"
import { useParams } from "react-router-dom"


interface RouteParams {
    id: string
}

export const BookPage: React.FC = () => {
    const id = useParams<RouteParams>().id;
    const book = JSON.parse(localStorage.getItem('books') || '[]').find(a => a.id === Number(id))

    const author = JSON.parse(localStorage.getItem('authors') || '[]').find(a => a.id === Number(book.author_id))

    return (
        <React.Fragment>
            <BookView book={book} author={author}/>
        </React.Fragment>
    )
}