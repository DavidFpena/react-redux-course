import axios from "axios";

const searchImages = async(title) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 68g5JIwW9Ej5KYWLlS-0nXk-uyCpT9W9CfodRIHZQL4'
    },
    params: {
      query: title
    },
  });

  return response.data.results;
};

export default searchImages;
