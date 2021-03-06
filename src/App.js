import React, { Component } from 'react'
import './App.scss'
import Spinner from './components/spinner'
import Overlay from './components/overlay'
import Book from './components/book'
import View from './components/view'
import BookGrid from './components/bookGrid'
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/tonetsang/e0fa7b407a491491ea71f51bf33826fd/raw/88e50f141b3330f1712644b08a88f112df6f6697/books.json')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          books: json,
          isLoaded: true,
        })
      })
  }

  render() {
    let { isLoaded, books } = this.state

    if (!isLoaded) {
      return (
        <Overlay>
          <Spinner />
        </Overlay>
      )
    }else {
      return (
        <div className="App">
          <header class="container">
            <div class="text-center">
              <img src="https://res.cloudinary.com/tonetsang/image/upload/v1623707504/rainbowReads/logo_kfsfgm.png" alt=""></img>
              <p class="header">Top ?? LGBTQIA+ Books</p>
            </div>
          </header>
            <Switch>
              <Route exact path="/" render={() => 
                <ol>
                  <BookGrid>
                    {books.map(book => (
                      <li key={book.id}>
                        <Book {...book} />
                      </li>
                    ))}
                  </BookGrid>
                </ol>
              }>
              </Route>
              <Route exact path="/view/:id" component={View} />
            </Switch>
        </div>
      )
    }
  }
}

export default App
