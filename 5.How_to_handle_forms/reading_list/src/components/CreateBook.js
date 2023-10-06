import { useState } from "react";


function CreateBook({ onSubmit }) {
  const [title, setTitle] = useState('')

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(title);
  };

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={title}/>
      </form>
    </div>
  );
};


export default CreateBook;
