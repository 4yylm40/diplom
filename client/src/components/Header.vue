<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar-brand" to="/">Демоэкзамен</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link class="nav-item nav-link active" to="/theory">Теория</router-link>
                    <router-link class="nav-item nav-link active" to="/practic">Практика</router-link>

                    <li v-if="getToken" class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{userName}}
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <form id="profile" action="profile.php" method="post">
                                <router-link to="/profile" class="btn btn-dark">Профиль</router-link>
                            </form>
                            <form id="logout" action="logout.php" method="post">
                                <button type="submit" class="btn btn-dark">Log out</button>
                            </form>
                        </div>
                    </li>

                    <li v-else class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Вход
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            {{getErrors}}
                            <form @submit.prevent="signIn" id="sign_in">
                                <h3>Вход</h3>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input v-model="email" name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input v-model="password" name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                                </div>
                                <button type="submit" class="btn btn-primary">Sign in</button>
                                <router-link to="/registration" class="btn btn-link">Sign up</router-link>
                            </form>
                        </div>
                    </li>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {getAuthUser} from '../services/apiService'
export default {
    name: 'Header',
    computed: mapGetters(['getToken', 'getErrors']),
    data() {
        return {
            email: '',
            password: '',
            userName: ''
        }
    },
    methods: {
        ...mapActions(['loginUser']),
        signIn() {
            this.loginUser({
                email: this.email,
                password: this.password
            }),
            this.getUser()
        },

        getUser() {
            getAuthUser().then((user) => {
                this.userName = user.data.name
            }).catch((error) => {
                console.log(error.response.data.errors)
            });
        }
    }
}
</script>