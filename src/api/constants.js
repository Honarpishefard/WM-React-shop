import axios from 'axios';

const baseURL = 'http://localhost:5000/api';
export const mediaURL = 'http://localhost:5000/statics/media/';
export const uploadsURL = 'http://localhost:5000/statics/uploads/';

export const mainInstance = axios.create({
    baseURL,
    timeout: 25000
});