import axios from 'axios';

const dbUrl = 'https://api.lyrics.ovh/v1';
const getSong = (song, artist) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/${artist}/${song}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getSong;
