import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value)
  };

  const handleBookEditSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };

  return (
    <form className="book-edit" onSubmit={handleBookEditSubmit}>
      <label>
        Title
      </label>
      <input className="input" onChange={handleChange} value={title}/>
      <button className="button is-primary">
        Save
      </button>
    </form>
  );
};

export default BookEdit;
