import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://console.firebase.google.com/project/react-burger-94bf1/database/firestore/data/'
});

export default instance;