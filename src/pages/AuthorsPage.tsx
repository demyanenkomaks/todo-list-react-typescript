import React, {useState, useEffect} from "react"
import {AuthorForm} from "../components/AuthorForm";
import {AuthorList} from "../components/AuthorList";
import {IAuthor} from "../interfaces";

declare var confirm: (question: string) => boolean

export const AuthorsPage: React.FC = () => {
    const [authors, setAuthors] = useState<IAuthor[]>([])

    useEffect(() => {
        const savedAuthor = JSON.parse(localStorage.getItem('authors') || '[]') as IAuthor[]
        setAuthors(savedAuthor)
    }, [])

    useEffect(() => {
        localStorage.setItem('authors', JSON.stringify(authors))
    }, [authors])

    const addHandlerAuthor = (name: string, year: string) => {
        const newAuthor: IAuthor = {
            name: name,
            year: year,
            id: Date.now()
        }
        setAuthors(prev => [newAuthor, ...prev])
    }

    const removeHandlerAuthor = (id: number) => {
        const shoudRemove = confirm('Вы уверены что хотите удалить элемент?')
        if (shoudRemove) {
            setAuthors(prev => prev.filter(author => author.id !== id))
        }
    }

    return (
        <React.Fragment>
            <AuthorForm onAdd={addHandlerAuthor} />

            <AuthorList authors={authors} onRemove={removeHandlerAuthor}/>
        </React.Fragment>
    )
}