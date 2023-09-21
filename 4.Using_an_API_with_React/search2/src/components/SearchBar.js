import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const changeHandle = (event) => {
    setTerm(event.target.value)
  };

  const submitHandle = (event) => {
    event.preventDefault();

    onSubmit(term);
  }

  return(
    <div>
      <form onSubmit={submitHandle}>
        <input type="text" value={term} onChange={changeHandle} />
      </form>
    </div>
  )
};

export default SearchBar;
