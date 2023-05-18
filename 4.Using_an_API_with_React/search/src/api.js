import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com//search/photos', {
    headers: {
      Authorization: 'Client-ID cO7b67c9TCE_4tXPvw8thI_Zr1vpNrs1OaweAeEm2Sw',
    },
    params: {
      query: term,
    }
  });

  return response.data.results;
}

export default searchImages;
