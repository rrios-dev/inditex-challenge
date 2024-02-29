import config from '@/pods/config';
import axios from 'redaxios';

const publicMarvelInstanceService = axios.create({
    baseURL: config.api.public.url,
    params: {
        apikey: config.api.public.key,
    },
})

export default publicMarvelInstanceService;