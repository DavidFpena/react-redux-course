import { State, useState } from "react";



function SearchBar() {
  const [text, setText] =  useState('');

  const handleChange = (e) => {
    setText(e.target.text)
    console.log(text)
  };

  return (
    <div>
      <input value={text} onChange={handleChange} />
    </div>
  );
}

export default SearchBar;
