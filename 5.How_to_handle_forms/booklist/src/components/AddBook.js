import { useState } from "react";
import '../css/AddBook.css'

function AddBook({ createBook }) {
  const [term, setTerm] = useState('');

  const handleChange = (event) => {
    setTerm(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(term);
    setTerm('')
  };

  return(
    <div className="cont">
      <div className="cont2">
        <h1 className="enter-title">Enter new title</h1>
        <form className="add-form" onSubmit={handleSubmit}>
          <input className="add-input" type="text" onChange={handleChange} value={term}/>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
