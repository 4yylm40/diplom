import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000';

//User registration
const registerUser = (name, email, password) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({name, email, password});

    try {
        return axios.post('/api/users', body, config);
    } catch(error) {
        return error.response.data.errors;
    }
};

//Login user
const loginUser = (email, password) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({email, password});

    try {
        return axios.post('api/auth', body, config);
    } catch (error) {
        return error.response.data.errors;
    }
};

//Get auth user
const  getAuthUser = async (token) => {
    const config = {
        headers: {
            'x-auth-token': token
        }
    };
    return await axios.get('api/auth', {}, config);
};

//Get all profiles
const getProfiles = () => {
    return axios.get('/api/profile');
};

//Get all lessons
const getLessons = () => {
    return axios.get('/api/lesson');
}

const getOneLesson = (id) => {
    return axios.get('/api/lesson/' + id);
}

export {
    registerUser,
    loginUser,
    getAuthUser,
    
    getProfiles,

    getLessons,
    getOneLesson
};