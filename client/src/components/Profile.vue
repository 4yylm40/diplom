<template>
    <div class="container">
        <h2>Теория</h2>
            <form @submit.prevent="addLesson">
                <div class="form-group">
                    <label for="title">Название</label>
                    <input v-model="title" type="text" class="form-control" id="title" placeholder="Название"/>
                </div>
                <div class="form-group">
                    <label for="video">Видео</label>
                    <input v-model="video" type="text" class="form-control" id="video" placeholder="Видео"/>
                </div>
                <div class="form-group">
                    <label for="theory">Password</label>
                    <input v-model="theory" type="textarea" class="form-control" id="theory" placeholder="Теория"/>
                </div>
                <hr>
                <h3>Вопрос</h3>
                <div class="form-group">
                    <label for="question_tilte">Текст</label>
                    <input v-model="question_title" type="text" class="form-control" id="question_title" placeholder="Вопрос"/>
                </div>
                <div class="form-group">
                    <label for="answer_tilte">Ответ</label>
                    <input v-model="answer_title" type="text" class="form-control" id="answer_title" placeholder="Ответ"/>
                    <input v-model="answer_right" type="checkbox" class="form-control">
                    <button @click.prevent="addQuestion" class="btn btn-primary">Добавить ответ</button>
                </div>
                <ul>
                    <li v-for="answer of answers" :key="answer.key">{{answer.answer_tilte}}</li>
                </ul>
                <button type="submit" class="btn btn-primary">Добавить урок</button>
            </form>
        <h2>Практика</h2>
        <form @submit.prevent="addPractic">
            <label for="practicTitle">Название</label>
            <input v-model="practicTitle" class="form-control" id="practicTitle"/>
            <label for="practicQuestion">Задание</label>
            <input v-model="practicQuestion" class="form-control" id="practicQuestion"/>
            <button type="submit" class="btn btn-primary">Добавить задание</button>
        </form>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {addNewLesson, addNewPractic} from '../services/apiService'

export default {
    name: 'Profile',
    props: ['ds'],
    data() {
        return {
            user: {},
            msg: '',

            title: '',
            video: '',
            theory: '',

            question_title: '',
            answer_title: '',
            answer_right: '',

            answers: [],

            practicTitle: '',
            practicQuestion: ''
        }
    },
    computed: {
        ...mapGetters(['getToken', 'getErrors'])
    },
    mounted() {

    },
    methods: {
        ...mapActions(['authUser']),
        async getUser() {
            return await this.authUser({
                token:this.getToken
            })
        },

        addLesson() {
            const question = {
                question: this.question_title,
                answers: this.answers
            }
            addNewLesson(this.title, this.video, this.theory, question).then((lesson) => {
                console.log(lesson.data);
            }).catch((error) => {
                console.log(error);
            })
        },
        addQuestion() {
            const answer = {
                answer_tilte: this.answer_title,
                answer_right: this.answer_right
            }
            this.answers.push(answer);
            console.log(answer);
        },
        addPractic() {
            addNewPractic(this.practicTitle, this.practicQuestion).then((practic) => {
                console.log(practic);
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>