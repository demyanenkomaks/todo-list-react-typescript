import React from "react"
import {IBook} from "../interfaces";
import {Link} from "react-router-dom";

type BookFormProps = {
    books: IBook[],
    onRemove: (id: number) => void
}

export const BookAuthorList: React.FC<BookFormProps> = ({books, onRemove}) => {
    if (books.length === 0) {
        return <p className="center">Ни одной книги не добавлено!!!</p>
    }

    return (
        <>
            <h2>Список книг автора</h2>
            <table>
                <thead>
                <tr>
                    <th>Название</th>
                    <th>Год рождения</th>
                    <th>Жанр</th>
                    <th>Действия</th>
                </tr>
                </thead>

                <tbody>
                {books.map(book => {
                  return (
                      <tr className="book" key={book.id}>
                          <td>{book.name}</td>
                          <td>{book.year}</td>
                          <td>{book.type}</td>
                          <td>
                              <Link to={`/book/${book.id}`}>
                                  <i
                                      className="material-icons green-text"

                                  >
                                      visibility
                                  </i>
                              </Link>
                              <i
                                  className="material-icons red-text"
                                  onClick={() => onRemove(book.id)}
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