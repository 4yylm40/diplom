<template>
    <div>
        <h1>{{practic.title}}</h1>
        <div class="container">
                {{practic.question}}
                <h2>Прикрепить задание</h2>
                <form v-if="getToken" enctype="multipart/form-data" @submit.prevent="sendAnswer">
                    <p><input @change="onSelectFile" type="file" ref='file'>
                    <button type="submit">Отправить</button></p>
                </form> 
                <div v-else>Авторизуйтесь для отправки задания!</div>
        </div>
        <h2 v-if="admin">Сдали</h2>
        <ul v-if="admin">
            <li v-for="answer of practic.answers" :key="answer.id">{{answer.user.name}} - <a>{{answer.file}}</a></li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {getAuthUser, getOnePractic, uploadDocumentInformation} from '../services/apiService'

import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000';

export default {
    name: 'PracticDetail',
    data() {
        return {
            practic: {},
            file: '',
            admin: false
        }
    },
    computed: {
        ...mapGetters(['getToken', 'getCurrentPage'])
    },
    mounted() {
        getOnePractic().then((practic) => {
            this.practic = practic.data
        }).catch((error) => {
            console.log(error.response.data.errors);
        });
    },
    methods: {
        onSelectFile() {
            const file = this.$refs.file.files[0];
            this.file = file;
        },

        async sendAnswer() {
            const formData = new FormData();
            formData.append('file', this.file);
            console.log(Date.now() + '-' + this.file.name)
            try {
                axios.post('/api/practic/' + this.getCurrentPost, formData)
                uploadDocumentInformation(Date.now() + '-' + this.file.name).then((answer) => {
                    console.log(answer)
                }).catch((err) => {
                    console.log(err)
                });
                console.log('success');
            } catch(error) {
                console.log(error)
            }
        },

        getUser() {
           getAuthUser().then((user) => {
               if(user.data.role == "admin") {
                   this.admin = true
               }
           }).catch((error) => {
               console.log(error.response.data.errors)
           });
        }
    }
}
</script>