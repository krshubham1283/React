import {Book, BookShowProp} from "./types";
import {useState} from "react";
import BookEdit from "./BookEdit";
import useBooksContext from '../hooks/useBooksContext'

function BookShow(prop: BookShowProp) {

  const [showEdit, toggleEdit] = useState(false)
  const booksContext = useBooksContext()

  const handleEditClick = (book: Book) => {
    toggleEdit(!showEdit)
    booksContext?.editBookById(book)
  }

  const handleClick = () => {
    booksContext?.deleteBookById(prop.book.id)
  }

  const content = showEdit ? <BookEdit book={prop.book} toggleEditView={handleEditClick}/> : prop.book.title

  return (
    <div className='book-show'>
      {content}
      <div className="actions">
        <button className='edit' onClick={()=>toggleEdit(!showEdit)}>Edit</button>
        <button className='delete' onClick={handleClick}>Delete</button>
      </div>
    </div>
  )
}

export default BookShow
