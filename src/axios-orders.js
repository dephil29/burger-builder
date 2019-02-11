import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-94bf1.firebaseio.com/'
});

export default instance;