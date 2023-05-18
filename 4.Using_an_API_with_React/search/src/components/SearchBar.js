import { useState } from "react";
import './SearchBar.css';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');
  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange}/>
      </form>
    </div>
  );
};

export default SearchBar;


























// const [term, setTerm] = useState('');


// const handleFormSubmit = (event) => {
//   event.preventDefault();
//   onSubmit(term);
// };

// const handleChange = (event) => {
//   setTerm(event.target.value)
// }

// return (
//   <div>
//     <form onSubmit={handleFormSubmit} >
//       <input onChange={handleChange} value={term} />
//     </form>
//   </div>
//   );
