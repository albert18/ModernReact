import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3309e3bf897959a95859cd536ca50cb581b98d4e99be045572a862a27a2eb3cb'
    }
});