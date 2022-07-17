import axios from "axios";

const APIKEY='27705684-ea6ff4282bc06d8fe5ddb5326'
axios.defaults.baseURL = `https://pixabay.com/api/`;
// axios.defaults.headers.common['Authorization'] =APIKEY;
axios.defaults.params = {
  orientation: 'horizontal',
  per_page: 12,
};


export const fetchPictures=async(page,picture)=>{
    console.log(picture,page)
    const {data}= await axios(`?q=${picture}&page=${page}&key=${APIKEY}&image_type=photo`);
 return data
}