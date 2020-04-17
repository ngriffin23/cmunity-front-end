import axios from 'axios';

const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['my-token'] = token;
    } else {
        delete axios.defaults.headers.common['my-token'];
    }
}

export default setAuthToken; 