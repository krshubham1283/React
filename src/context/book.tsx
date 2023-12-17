import {createContext, useState, useCallback, ReactNode} from 'react'
import {Book, BooksContextType} from "../components/types";
import axios from "axios";

const BooksContext = createContext<BooksContextType | undefined>(undefined);

type ProviderProp = {
  children: ReactNode
}

const Provider = ({children} : ProviderProp) => {

  const [books, setBooks] = useState([] as Book[])

  const fetchBooks = useCallback( async () => {
    const response  = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
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

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks
  }


  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  )
}

export {Provider}
export default BooksContext
