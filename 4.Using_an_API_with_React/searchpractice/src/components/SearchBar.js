import { useState } from "react";
import '../stylesheet/SearchBar.css'

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
    <div className="search-cont">
      <form onSubmit={submitFormHandle} >
        <input value={term} type="text" onChange={changeHandle} className="searchform"/>
      </form>
    </div>
  )
}

export default SearchBar;
