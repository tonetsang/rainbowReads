import React, { Component } from 'react'
import './App.scss'
import Spinner from './components/spinner'
import Overlay from './components/overlay'
import Book from './components/book'
import BookGrid from './components/bookGrid'
import { Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/tonetsang/e0fa7b407a491491ea71f51bf33826fd/raw/7ed2b7f217c8bc1687c44bbc2dc77bece42fc321/books.json')
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
    } else {
        return (
          <div className="app">
            <header class="container">
              <div class="text-center">
                <img src="https://res.cloudinary.com/tonetsang/image/upload/v1623707504/rainbowReads/logo_kfsfgm.png" alt=""></img>
              </div>
            </header>
              <Route>
                <BookGrid>
                  <ol>
                    {books.map((book) => (
                      <li key={book.id}><Book {...book} /></li>
                    ))}
                  </ol>
                </BookGrid>
              </Route>
          </div>
        )
      }
  }
}

export default App
