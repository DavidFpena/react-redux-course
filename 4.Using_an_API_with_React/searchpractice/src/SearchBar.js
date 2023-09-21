import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const submitHandle = (event) => {
    event.preventDefault()
    onSubmit(term);
  };

  const changeHandle = (event) => {
    setTerm(event.target.value);
  };

  return(
    <div>
      <form onSubmit={submitHandle}>
        <input value={term} onChange={changeHandle}/>
      </form>
    </div>
  );
};

export default SearchBar;
