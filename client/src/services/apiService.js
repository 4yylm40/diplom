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

//Get one lesson
const getOneLesson = (id) => {
    return axios.get('/api/lesson/' + id);
}

//Add new lesson
const addNewLesson = (title, video, theory, question) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({title, video, theory, question});

    try {
        return axios.post('api/lesson', body, config);
    } catch (error) {
        return error.response.data.errors;
    }
}

//Add new practic
const addNewPractic = (title, question) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({title, question});

    try {
        return axios.post('api/practic', body, config);
    } catch (error) {
        return error.response.data.errors;
    }
}

//Get all practics
const getAllPractics = () => {
    return axios.get('/api/practic');
}

//Get one practic
const getOnePractic = (id) => {
    return axios.get('/api/practic/' + id);
}

export {
    registerUser,
    loginUser,
    getAuthUser,
    
    getProfiles,

    getLessons,
    getOneLesson,
    addNewLesson,

    addNewPractic,
    getAllPractics,
    getOnePractic
};