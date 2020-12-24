import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID GjyoNr-vS0JU6IlT3DJVIHtBpUrNnTyG3W9UgJht0Tk'
    }
});