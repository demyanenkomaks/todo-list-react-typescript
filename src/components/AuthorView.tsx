import React from "react"
import { IAuthor } from "../interfaces"

type AuthorFormProps = {
    author: IAuthor
}

export const AuthorView: React.FC<AuthorFormProps> = ({author}) => {
    return (
        <>
            <h1>Просмотр автора</h1>

            <table>
                <tbody>
                <tr>
                    <td>Имя</td>
                    <td>{author.name}</td>
                </tr>
                <tr>
                    <td>Год рождения</td>
                    <td>{author.year}</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}