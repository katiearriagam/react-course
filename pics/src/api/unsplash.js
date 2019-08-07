import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 689599bb6aed4161ee97cce05faf346ebe83a2487134401a796e32b247f7f55c'
    }
});