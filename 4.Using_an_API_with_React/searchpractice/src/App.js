import SearchBar from "./components/SearchBar";
import searchImages from "./api";

function App() {
  const submitHandle = (term) => {
    searchImages(term);
  };


  return(
    <div>
      <SearchBar onSubmit={submitHandle} />
    </div>
  );
};

export default App;


// 1. Create Api get function
// 2. Create SearchBar component
// 3. Create onChange handler function to update term
// 4. Create onFormSubmit function in the SearchBar component
// 5. Create submitHandle function in the App.js and pass it down as prop to SearchBar
// 6. Call onSubmit funtion when onFormSubmit is called in Searchbar component
