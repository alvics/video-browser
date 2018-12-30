import axios from 'axios';

const KEY = 'AIzaSyBmqOZzj40i9HSC-NdoZNiPjNI8tdWcG7o';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
