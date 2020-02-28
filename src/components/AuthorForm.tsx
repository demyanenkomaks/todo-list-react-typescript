import React, { useRef } from "react"

interface AuthorFormProps {
    onAdd(name: string, year: string): void
}

export const AuthorForm: React.FC<AuthorFormProps> = (props) => {

    const name = useRef<HTMLInputElement>(null)
    const year = useRef<HTMLInputElement>(null)

    const save = () => {
        props.onAdd(name.current!.value, year.current!.value)
        name.current!.value = ''
        year.current!.value = ''
    }

    return (
        <>
            <h1>Добавление автора</h1>
            <div className="row mt-2">
                <div className="input-field col s6">
                    <input
                        ref={name}
                        type="text"
                        id="name"
                        placeholder="Введите имя"
                    />
                    <label htmlFor="name" className="active">Имя</label>
                </div>

                <div className="input-field col s6">
                    <input
                        ref={year}
                        type="text"
                        id="year"
                        placeholder="Введите год рождения"
                    />
                    <label htmlFor="year" className="active">Год рождения</label>
                </div>

                <button className="btn waves-effect waves-light" type="submit" onClick={save}>Сохранить</button>
            </div>
        </>
    )
}