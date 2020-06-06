import store from '../store';
import setAuthToken from './setAuthToken';
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
const  getAuthUser = () => {
    if (store.getters.getToken) {
        setAuthToken(store.getters.getToken)
    }

    try{
        return axios.get('api/auth');
    } catch(error) {
        return error.response.data.errors;
    }
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
const getOneLesson = () => {
    return axios.get('/api/lesson/' + store.getters.getCurrentPost);
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

//Add information about user's testing
const answerTest = (trying, score) => {
    if (store.getters.getToken) {
        setAuthToken(store.getters.getToken);
    }
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({trying, score});

    try {
        return axios.put('api/lesson/' + store.getters.getCurrentPost, body, config);
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
const getOnePractic = () => {
    return axios.get('/api/practic/' + store.getters.getCurrentPost);
}

//Upload document
const uploadDocument = () => {
    return axios.post('/api/practic/' + store.getters.getCurrentPost);
}

//Upload user's file upload information
const uploadDocumentInformation = (file) => {
    if (store.getters.getToken) {
        setAuthToken(store.getters.getToken)
    }
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({file});

    try {
        return axios.put('api/practic/' + store.getters.getCurrentPost, body, config);
    } catch (error) {
        return error.response.data.errors;
    }
} 

export {
    registerUser,
    loginUser,
    getAuthUser,
    
    getProfiles,

    getLessons,
    getOneLesson,
    addNewLesson,
    answerTest,

    addNewPractic,
    getAllPractics,
    getOnePractic,
    uploadDocument,
    uploadDocumentInformation
};