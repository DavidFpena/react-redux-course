import BookShow from "./ShowBook";


function ListBooks({ books, deleteBook, editBook }) {
  const renderedBooks = books.map((book) => {
    return <BookShow book={book} deleteBook={deleteBook} editBook={editBook}/>
  })

  return(
    <div>
      {renderedBooks}
    </div>
  );
};

export default ListBooks;
