import {ChangeEvent, FormEvent, useState} from "react";
import useBooksContext from '../hooks/useBooksContext'


function BookCreate() {

  const [title, setTitle] = useState('')
  const booksContext = useBooksContext()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    booksContext?.createBook(title)
    setTitle('')
  }


  return (
    <div className='book-create'>
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className='input' value={title} type="text" onChange={handleChange}/>
        <button className='button'>Submit</button>
      </form>
    </div>
  )
}

export default BookCreate
