import {Book, BookShowProp} from "./types";
import {useState} from "react";
import BookEdit from "./BookEdit";

function BookShow(prop: BookShowProp) {

  const [showEdit, toggleEdit] = useState(false)

  const handleEditClick = (book: Book) => {
    toggleEdit(!showEdit)
    prop.onEdit(book)
  }

  const handleClick = () => {
    prop.onDelete(prop.book.id)
  }

  let content = showEdit ? <BookEdit book={prop.book} toggleEditView={handleEditClick}/> : prop.book.title

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
