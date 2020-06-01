import {registerUser, loginUser, getAuthUser} from '../../services/apiService'
//import router from '../../router'

export default {
    actions: {
        userRegistration(ctx, {name, email, password}) {
            registerUser(name, email, password).then((token) => {
                ctx.commit('updateToken', token.data.token);
                //router.push('profile');
            }).catch((error) => {
                ctx.commit('getErrors', error);
            });
        },
        loginUser(ctx, {email, password}) {
            loginUser(email, password).then((token) => {
                ctx.commit('updateToken', token.data.token);
                //router.push('profile');
            }).catch((error) => {
                ctx.commit('getErrors', error);
            });
        },
        authUser(ctx, {token}) {
            getAuthUser(token).then((user) => {
                ctx.commit('getUser', user)
            }).catch((error) => {
                ctx.commit('getErrors', error)
            });
        }
    },
    mutations: {
        updateToken(state, token) {
            state.token = token;
        },
        getErrors(state, error)
        {
            state.error = error;
        },
        getUser(state, user) {
            state.user = user;
        }
    },
    state: {
        token: '',
        error: '',
        user: {}
    },
    getters: {
        getToken(state) {
            return state.token;
        },
        getErrors(state) {
            return state.error;
        },
        getUser(state) {
            return state.user;
        }
    }
}