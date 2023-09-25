import SearchBar from "./components/SearchBar";
import SearchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  const submitHandle = async(term) => {
    const results = await SearchImages(term);
    setImages(results);
  };

  return(
    <div>
      <SearchBar onSubmit={submitHandle} />
      <ImageList images={images} />
    </div>
  );
};

export default App;


// We need to create an App that lets users search images using unsplashAPi
// 1. Create SearchBar component that has a input element inside form element
// 2. We need to communicate the input that the user writes to the parent component
// 3. We need to create an SearchImages function that sends a get request to the API
// 4. We need to communicate that input to the SearchImages function and save the API response
// 5. We need to create an ImageList component and pass down from App the array of results that we got from API
// 6. We need to create an ImageShow component
// 7. We need to iterate through the results array and for each element create a ImageShow
// 8. We need to pass down the image url to the ImageShow component
// 9. In the ImageShow component we need to receive the image url and use it as src in an img tag
