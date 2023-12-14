import {useState} from "react";
import {Book} from './components/types'
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {

  const [books, setBooks] = useState([] as Book[])

  const deleteBookById = (id: number) => {
    const updateBook = books.filter((book) => {
      return book.id !== id
    })
    setBooks(updateBook)
  }

  const editBookById = (updateBook: Book) => {
    const updateBooks = books.map((book) => {
      if (book.id === updateBook.id) {
        return { ...book, name: updateBook.name}
      }
      return book
    })
    setBooks(updateBooks)
  }

  const createBook = (title: string) => {
    const updateBook = [
      ...books,
      {
        id: Math.round(Math.random()*9999),
        name: title
      }
    ]
    setBooks(updateBook)
  }

  return (
    <div className='app'>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
      <BookCreate onCreate={createBook}/>
    </div>
  )
}

export default App
