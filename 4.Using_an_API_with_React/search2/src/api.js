import axios from "axios";

const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 68g5JIwW9Ej5KYWLlS-0nXk-uyCpT9W9CfodRIHZQL4'
    },
    params: {
      query: 'cars'
    }
    });

  console.log(response);
  return response;
};

export default searchImages;
