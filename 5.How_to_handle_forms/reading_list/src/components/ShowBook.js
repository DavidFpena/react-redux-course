import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, deleteBook, editBook }) {
  const [editShow, SetEditShow] = useState(false)

  const handleDeleteClick = () => {
    deleteBook(book.id);
  };

  const handleEditClick = () => {
    SetEditShow(!editShow);
  };

  let content = <h3>{book.title}</h3>
  if (editShow) {
    content = <BookEdit editBook={editBook} book={book}/>
  }

  return(
    <div>
      {content}
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>X</button>
    </div>
  );
};

export default BookShow
