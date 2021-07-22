import React, { Component } from 'react'
import './App.scss'
import Spinner from './components/spinner'
import Overlay from './components/overlay'
import Book from './components/book'
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
    fetch('https://gist.githubusercontent.com/tonetsang/e0fa7b407a491491ea71f51bf33826fd/raw/bb9237a34b434a42d3341c3e3380e3ac27f539bb/books.json')
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
              <Route>
                <ol>
                  <BookGrid>
                    {books.map(book => (
                      <li key={book.id}>
                        <Book {...book} />
                      </li>
                    ))}
                  </BookGrid>
                </ol>
              </Route>
              <Route path="/view/:id" render={books.id} />
            </Switch>
        </div>
      )
    }
  }
}

export default App
