import React from "react"
import {useHistory} from "react-router-dom"

export const AboutPage: React.FC = () => {

    const history = useHistory()
    return (
        <>
            <h1>Страница информации</h1>

            <p>Данное Todo приложение написано на <b>React + TypeScript</b></p>
            <p>В котором есть азы работы с формой: сохранение и удаление данных в localStorage.</p>
            <p>Данное приложение было написано на базе просмотренного видео урока </p>
            <p>
                <iframe width="1280" height="719" src="https://www.youtube.com/embed/OvLWWvjoi8s" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </p>
            <button className="btn" onClick={() => history.push('/')}>Обратно к списку авторов</button>
        </>
    )
}