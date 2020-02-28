import React from "react"
import {IAuthor, IBook} from "../interfaces"
import {Link} from "react-router-dom";

type BookFormProps = {
    book: IBook
    author: IAuthor
}

export const BookView: React.FC<BookFormProps> = ({book, author}) => {
    return (
        <>
            <h1>Просмотр книги</h1>

            <table>
                <tbody>
                <tr>
                    <td>Название</td>
                    <td>{book.name}</td>
                </tr>
                <tr>
                    <td>Год рождения</td>
                    <td>{book.year}</td>
                </tr>
                <tr>
                    <td>Жанр</td>
                    <td>{book.type}</td>
                </tr>
                <tr>
                    <td>Автор</td>
                    <td>
                        <Link to={`/author/${author.id}`}>
                            {author.name}
                        </Link>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    )
}