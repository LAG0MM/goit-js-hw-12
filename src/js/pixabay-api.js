import axios from "axios";
    
const BASE_URL = 'https://pixabay.com/api/';

const API_KEY = "54667544-34f53a0b28c965f6e0120a2cf";

export async function getImagesByQuery(query, page = 1) {

 const params = {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page: page,
      per_page: 15,
    };

    try {
      const respoonse = await axios.get(BASE_URL, { params });
      return respoonse.data
    }catch(error) {
        console.error("Info about error", error);
        throw error;
    }

}

