import React, { useEffect, useState } from "react"
import { AuthorView } from "../components/AuthorView"
import { BookForm } from "../components/BookForm"
import { IBook } from "../interfaces"
import { BookAuthorList } from "../components/BookAuthorList"
import { useParams } from "react-router-dom"

interface RouteParams {
    id: string
}

declare var confirm: (question: string) => boolean

export const AuthorPage: React.FC = () => {
    const id = useParams<RouteParams>().id;
    const author = JSON.parse(localStorage.getItem('authors') || '[]').find(a => a.id === Number(id))

    const [books,  setBooks] = useState<IBook[]>([])

    useEffect(() => {
        const savedBook = JSON.parse(localStorage.getItem('books') || '[]').filter(a => a.author_id === Number(id)) as IBook[]
        setBooks(savedBook)
    }, [])

    const addHandlerBook = (name: string, year: string, type:string) => {
        const newBook: IBook = {
            name: name,
            year: year,
            type: type,
            author_id: author.id,
            id: Date.now()
        }
        setBooks(prev => [newBook, ...prev])

        let booksAll = JSON.parse(localStorage.getItem('books') || '[]');
        booksAll.push(newBook)
        localStorage.setItem('books', JSON.stringify(booksAll))
    }

    const removeHandlerBook = (id: number) => {
        const shoudRemove = confirm('Вы уверены что хотите удалить элемент?')
        if (shoudRemove) {
            setBooks(prev => prev.filter(book => book.id !== id))

            let booksAll = JSON.parse(localStorage.getItem('books') || '[]');
            booksAll.forEach(function(item, i) {
                if (item.id === id) {
                    booksAll.splice(i, 1);
                }
            });
            localStorage.setItem('books', JSON.stringify(booksAll))
        }
    }

    return (
        <React.Fragment>
            <AuthorView author={author}/>

            <BookForm onAdd={addHandlerBook} />
            <BookAuthorList books={books} onRemove={removeHandlerBook}/>

        </React.Fragment>
    )
}