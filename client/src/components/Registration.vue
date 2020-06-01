<template>
    <div class="container-bg">
        <section class="container">
            {{getErrors}}
            <form @submit.prevent="registration">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input v-model="email" name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword2">Name</label>
                    <input v-model="name" name="name" type="text" class="form-control" id="exampleInputPassword2" placeholder="Name">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input v-model="password" name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary">Sign up</button>
            </form>
        </section>
    </div>
</template>

<script>
//import {registerUser} from '../services/apiService'
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'Registration',
    computed: mapGetters(['getToken', 'getErrors']),
    data() {
        return {
            email: '',
            name: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['userRegistration']),
        registration() {           
            this.userRegistration({
                name: this.name,
                email: this.email,
                password: this.password
            })
        }
    }
}
</script>