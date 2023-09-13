import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import ImageShow from './components/ImageShow';

const key = '68g5JIwW9Ej5KYWLlS-0nXk-uyCpT9W9CfodRIHZQL4';
// Authorization: Client-ID 68g5JIwW9Ej5KYWLlS-0nXk-uyCpT9W9CfodRIHZQL4
// GET https://api.unsplash.com/search/photos?query=searchterm



function App() {

  return (
    <div>
      <SearchBar/>
    </div>
  )
}

export default App;


// 1. Create a searchBar and use State to keep track of changes in navbar
