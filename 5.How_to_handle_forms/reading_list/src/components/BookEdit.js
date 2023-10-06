import { useState } from "react";

function BookEdit({ book, editBook }) {
  const [term, setTerm] = useState('')

  const handleChange = (event) => {
    setTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    editBook(term, book.id);
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={handleChange}/>
      </form>
    </div>
  );
};

export default BookEdit;
