import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_UmP7HQnyDV3Nv2BJ2MjHeC3VAEiY2MIVyGQ7PcjQ0sarMIHkr5ykB49UyPbm5Hrp';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
  return axios.get('/breeds').then(response => {
    return response.data;
  });
}

function fetchCatByBreed(breedId) {
  return axios.get(`/images/search?breed_ids=${breedId}`).then(resp => {
    return resp.data;
  });
}

module.exports = { fetchBreeds, fetchCatByBreed };