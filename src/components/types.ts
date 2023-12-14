export type Book = {
  id: number
  name: string
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
  onDelete: (id: number) => void
  onEdit: (book: Book) => void
}

export type BookEditProp  = {
  book: Book
  toggleEditView: (book: Book) => void
}
