import React, { useRef } from "react"

interface BookFormProps {
    onAdd(name: string, year: string, type: string): void
}

export const BookForm: React.FC<BookFormProps> = (props) => {
    const name = useRef<HTMLInputElement>(null)
    const year = useRef<HTMLInputElement>(null)
    const type = useRef<HTMLInputElement>(null)

    const save = () => {
        props.onAdd(name.current!.value, year.current!.value, type.current!.value)
        name.current!.value = ''
        year.current!.value = ''
        type.current!.value = ''
    }

    return (
        <>
            <h2>Добавить книгу</h2>
            <div className="row mt-2">
                <div className="input-field col s4">
                    <input
                        ref={name}
                        type="text"
                        id="name"
                        placeholder="Введите имя"
                    />
                    <label htmlFor="name" className="active">Название</label>
                </div>

                <div className="input-field col s4">
                    <input
                        ref={year}
                        type="text"
                        id="year"
                        placeholder="Введите год"
                    />
                    <label htmlFor="year" className="active">Год</label>
                </div>

                <div className="input-field col s4">
                    <input
                        ref={type}
                        type="text"
                        id="year"
                        placeholder="Введите жанр"
                    />
                    <label htmlFor="year" className="active">Жанр</label>
                </div>

                <button className="btn waves-effect waves-light" type="submit" onClick={save}>Сохранить</button>
            </div>
        </>
    )
}