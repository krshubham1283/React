import {useState, useEffect} from "react";
import {Book} from './components/types'
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {

  const [books, setBooks] = useState([] as Book[])

  const fetchBooks = async () => {
    const response  = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const deleteBookById = async (id: number) => {
    await axios.delete(`http://localhost:3001/books/${id}`)

    const updateBook = books.filter((book) => {
      return book.id !== id
    })
    setBooks(updateBook)
  }

  const editBookById = async (updateBook: Book) => {
     const response = await axios.put(`http://localhost:3001/books/${updateBook.id}`, {...updateBook})
    const updateBooks = books.map((book) => {
      if (book.id === updateBook.id) {
        return { ...book, ...response.data}
      }
      return book
    })
    setBooks(updateBooks)
  }

  const createBook = async (title: string) => {
    const response = await axios.post('http://localhost:3001/books', { title })
    console.log(response)

    const updateBook = [
      ...books, response.data
    ]
    setBooks(updateBook)
  }

  return (
    <div className='app'>
      <h1>Reading Books</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
      <BookCreate onCreate={createBook}/>
    </div>
  )
}

export default App
