import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { Navbar } from "./components/Navbar"
import { AuthorsPage } from "./pages/AuthorsPage";
import { AboutPage } from "./pages/AboutPage";
import { AuthorPage } from "./pages/AuthorPage";
import { BookPage } from "./pages/BookPage";
import {BooksPage} from "./pages/BooksPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
            <Route component={ AuthorsPage } path='/' exact />
            <Route component={ AuthorPage } path="/author/:id"  />
            <Route component={ BooksPage } path="/books"  />
            <Route component={ BookPage } path="/book/:id"  />
            <Route component={ AboutPage } path='/about'/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
