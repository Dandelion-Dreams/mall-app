import Axios from 'axios';
import baseURL, { URLS } from './baseURL';

const appkey = 'w123_1736868207199';

const request = Axios.create({
    baseURL,
    params: {
        appkey
    }
});

const getSideList = () => request.get(URLS.getSide, { params: { appkey } });

export default {
    getSideList
}