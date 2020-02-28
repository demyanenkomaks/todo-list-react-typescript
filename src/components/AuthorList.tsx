import React from "react"
import {IAuthor} from "../interfaces";
import {Link} from "react-router-dom"

type AuthorFormProps = {
    authors: IAuthor[],
    onRemove: (id: number) => void
}

export const AuthorList: React.FC<AuthorFormProps> = ({authors, onRemove}) => {
    if (authors.length === 0) {
        return <p className="center">Ни одного автора не добавлено!!!</p>
    }

    return (
        <>
            <h2>Список авторов</h2>
            <table>
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Год рождения</th>
                    <th>Действия</th>
                </tr>
                </thead>

                <tbody>
                {authors.map(author => {
                  return (
                      <tr className="author" key={author.id}>
                          <td>{author.name}</td>
                          <td>{author.year}</td>
                          <td>
                              <Link to={`/author/${author.id}`}>
                                  <i
                                      className="material-icons green-text"

                                  >
                                      visibility
                                  </i>
                              </Link>
                              <i
                                  className="material-icons red-text"
                                  onClick={() => onRemove(author.id)}
                              >
                                  delete
                              </i>
                          </td>
                      </tr>
                  )
                })}
                </tbody>
            </table>
        </>
    )
}