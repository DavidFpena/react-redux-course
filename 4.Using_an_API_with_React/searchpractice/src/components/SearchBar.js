import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const changeHandle = (event) => {
    setTerm(event.target.value)
  };

  const submitFormHandle = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return(
    <div>
      <form onSubmit={submitFormHandle}>
        <input value={term} type="text" onChange={changeHandle}/>
      </form>
    </div>
  )
}

export default SearchBar;
