import SearchBar from "./SearchBar";
import searchImages from "./api";

function App() {
  const submitHandle = (term) => {
    searchImages(term);
  };

  return(
    <div>
      <SearchBar onSubmit={submitHandle}/>
    </div>
  )
};

export default App;


// 1. Create API request
// 2. Create searchBar component
// 3. Pass down submitHandle as prop to searchBar component
