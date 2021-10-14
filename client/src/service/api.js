import axios from 'axios';

const URL = 'http://localhost:8000';


export const getNews = async (page, size = 5) => {
    try {
        console.log(axios.get(`http://localhost:8000/news?page=${page}&size=${size}`));
        return await axios.get(`http://localhost:8000/news?page=${page}&size=${size}`);

    } catch (error) {
        console.log('error while calling getNews API');
    }
}