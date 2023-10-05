import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(title, book.id);
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" onChange={handleChange} value={title}/>
        <button>
          Save
        </button>
      </form>
    </div>
  )
}


export default BookEdit;
