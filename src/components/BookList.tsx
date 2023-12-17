import BookShow from "./BookShow";
import useBooksContext from '../hooks/useBooksContext'

function BookList() {

  const booksContext = useBooksContext()
  const renderedBooks = booksContext?.books.map((book) => {
    return <BookShow key={book.id} book={book}/>
  })

  return (
    <div className='book-list'>
      {renderedBooks}
    </div>
  )
}

export default BookList
