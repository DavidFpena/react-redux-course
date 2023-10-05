import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import { useState } from "react";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const submitHandle = async(term) => {
    const result = await searchImages(term);

    setImages(result);
  };


  return(
    <div>
      <SearchBar onSubmit={submitHandle} />
      <ImageList images={images}/>
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
// 7. Create a images const using useState and modify its value when submitHandle is called
// 8. Create the Image List component and pass it down the images props
// 9. Receive images in ImageList component and iterate through the array to create an ImageShow component for each
// 10. Pass down as prop the image source url and use it as source in the ImageShow component
