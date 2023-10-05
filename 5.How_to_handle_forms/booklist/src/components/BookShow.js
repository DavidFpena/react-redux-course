import BookEdit from "./BookEdit";
import { useState } from "react";
import "../css/BookShow.css"
import searchImages from "../api";

function BookShow({ book, deleteBook, onEdit }) {
  const handleDeleteClick = () => {
    deleteBook(book.id);
  };

  const [editShow, SetEditShow] = useState(false);
  const [source, setSource] = useState('')

  const handleEditClick = () => {
    SetEditShow(!editShow);
  };

  const handleSubmit = (title, id) => {
    onEdit(title, id);
    SetEditShow(false);
  }


  const searchIm = async() => {
    const imageSource = await searchImages(book.title);


    setSource(imageSource[0].urls.small);
  }


  searchIm();

  let content = <h3 className="book-title">{book.title}</h3>
  if (editShow) {
    content = <BookEdit book={book} onSubmit={handleSubmit}/>
  };

  return(
    <div className="book-show-cont">
      <div className="act-buttons">
        <button onClick={handleEditClick}>
          edit
        </button>
        <button onClick={handleDeleteClick}>
          X
        </button>
      </div>
      <div className="img-cont">
        <img className="book-img" src={source}/>
      </div>
      <div className="title-cont">
        {content}
      </div>
    </div>
  )
}

export default BookShow;
