import searchImages from "./api";
import SearchBar from './components/SearchBar'
import ImagesList from "./components/ImagesList";

function App() {
  const submitHandle = (term) => {
    searchImages(term);
  };


  return (
    <div>
      <SearchBar onSubmit={submitHandle}/>
      <ImagesList />
    </div>
  );
};

export default App;


// We need to create an app that uses user's input to search images
// 1. We need to create a SearchBar component that communicates to it's parent component and sends it
//    the value of user's input.
//      -Create SearchBar component
//      -Create a submitHandle function in the App.js file receives the input value and runs searchImages func
//      -Pass down the submitHandle func as a prop to the children SearchBar component
//      -In SearchBar comp receive prop and use it when the clickHandle function is called
//      -Create an changeHandle function to keep track of onChange from input
//
//
//
