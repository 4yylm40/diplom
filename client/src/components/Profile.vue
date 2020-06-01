<template>
    <div class="container">
        {{getToken}}
        <h2>Теория</h2>
        {{msg}}
        <h2>Практика</h2>
    </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000';
import {mapGetters, mapActions} from 'vuex'
//import {getAuthUser} from '../services/apiService'

export default {
    name: 'Profile',
    data() {
        return {
            token: '',
            user: {},
            t: 5,
            msg: ''
        }
    },
    computed: {
        ...mapGetters(['getToken', 'getErrors'])
    },
    mounted: function() {
        const config = {
            headers: {
                'x-auth-token': this.getToken
            }
        };
        console.log(config)
        axios.get('api/auth', {}, config).then((response) => {
            console.log(response)
            this.user = response.data
        }).catch((err) => {
            this.msg = err.massage
        });
    },
    created() {
        //console.log(this.getToken)
    },
    methods: {
        ...mapActions(['authUser']),
        async getUser() {
            return await this.authUser({
                token: this.token
            })
            /*console.log(this.getToken.data.token);
            await this.getAuthUser({
                token: this.getToken.data.token
            })*/
        }
    }
}
</script>