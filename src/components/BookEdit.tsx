import {ChangeEvent, FormEvent, useState} from "react";
import {BookEditProp} from "./types";

function BookEdit(props: BookEditProp) {
  const [bookName, setBookName] = useState(props.book.name)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBookName(event.target.value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    props.toggleEditView({...props.book, name: bookName})
  }

  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input value={bookName} type="text" onChange={handleChange}/>
        <button className='button is-primary'>Save</button>
      </form>
    </div>
  )
}

export default BookEdit
