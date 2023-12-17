import {useContext} from "react";
import BooksContext from "../context/book";

const useBooksContext = () => {
  const booksContext = useContext(BooksContext)
  if(!booksContext){
    throw new Error('BookContext not defined')
  }
  return booksContext
}

export default useBooksContext
