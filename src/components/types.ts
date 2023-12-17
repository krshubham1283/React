export type Book = {
  id: number
  title: string
}

export type BookCreateProp = {
  onCreate: (title: string) => void
}

export type BookListProp = {
  books: Book[]
  onDelete: (id: number) => void
  onEdit: (book: Book) => void
}

export type BookShowProp = {
  book: Book
}

export type BookEditProp  = {
  book: Book
  toggleEditView: (book: Book) => void
}

export type BooksContextType = {
  books: Book[]
  fetchBooks: () => void
  createBook: (title: string) => void
  deleteBookById: (id: number) => void,
  editBookById: (book: Book) => void
}
