import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper deep-purple darken-2 px-1">
            <a href="/" className="brand-logo">React + Typescript</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">Список Авторов</NavLink></li>
                <li><NavLink to="/books">Список Книг</NavLink></li>
                <li><NavLink to="/about">Информация</NavLink></li>
            </ul>
        </div>
    </nav>
)

