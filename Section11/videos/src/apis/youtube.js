import axios from 'axios';

const KEY = 'AIzaSyBadUHbxJqgd9BQKetDk-Q9v3hL53mLM0M';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxResults: 20,
      key: KEY  
    }
});