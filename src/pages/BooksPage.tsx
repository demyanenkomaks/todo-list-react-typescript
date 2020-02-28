import React, {useState, useEffect} from "react"

import {BookList} from "../components/BookList";
import {IBook} from "../interfaces";

declare var confirm: (question: string) => boolean

export const BooksPage: React.FC = () => {
    const [books, setBooks] = useState<IBook[]>([])

    useEffect(() => {
        const savedBook = JSON.parse(localStorage.getItem('books') || '[]') as IBook[]
        setBooks(savedBook)
    }, [])

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])


    const removeHandlerBook = (id: number) => {
        const shoudRemove = confirm('Вы уверены что хотите удалить элемент?')
        if (shoudRemove) {
            setBooks(prev => prev.filter(author => author.id !== id))
        }
    }

    return (
        <React.Fragment>
            <BookList books={books} onRemove={removeHandlerBook}/>
        </React.Fragment>
    )
}