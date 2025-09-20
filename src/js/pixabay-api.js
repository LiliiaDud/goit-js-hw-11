import axios from 'axios';

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "52351583-282e675a2a1d7a615546b9ab7";

/* export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}*/

//try  для перехоплення помилок під час асинхронного await axios.get. Якщо axios.get провалюється catch створює новий Error і перекидає її зовнішньому коду
// await чекає результат промісу. якщо проміс reject, то буде кинута помилка, яку можна зловити catch
export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    });
    return response.data; 
  } catch (error) {
    console.error(err);
    throw new Error("Failed to fetch images");
  }
}
