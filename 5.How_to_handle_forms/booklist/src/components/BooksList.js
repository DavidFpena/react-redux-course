import BookShow from "./BookShow"
import "../css/BooksList.css"


function BooksList({ books, deleteBook, onEdit }) {


  const renderedBooks = books.map((book) => {
    return <BookShow book={book} key={book.id} deleteBook={deleteBook} onEdit={onEdit}/>
  })

  return(
    <div className="books-list">
      {renderedBooks}
    </div>
  )
}

export default BooksList
