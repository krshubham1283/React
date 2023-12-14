import {BookListProp} from "./types";
import BookShow from "./BookShow";

function BookList(props: BookListProp) {

  const renderedBooks = props.books.map((book) => {
    return <BookShow key={book.id} book={book} onDelete={props.onDelete} onEdit={props.onEdit}/>
  })

  return (
    <div className='book-list'>
      {renderedBooks}
    </div>
  )
}

export default BookList
