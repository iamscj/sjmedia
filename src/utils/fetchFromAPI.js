import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/captions',
    params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
    headers: {
      'X-RapidAPI-Key': 'fc9d329ed5msh7f3ae6366ec9f32p18f034jsn014d962d60b2',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};