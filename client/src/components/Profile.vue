<template>
    <div class="container">
    {{user.name}}
    {{user.email}}
    {{user.score}}
        <h2 v-if="admin">Теория</h2>
            <form v-if="admin" @submit.prevent="addLesson">
                <div class="form-group">
                    <label for="title">Название</label>
                    <input v-model="title" type="text" class="form-control" id="title" placeholder="Название"/>
                </div>
                <div class="form-group">
                    <label for="video">Видео</label>
                    <input v-model="video" type="text" class="form-control" id="video" placeholder="Видео"/>
                </div>
                <div class="form-group">
                    <label for="theory">Теория</label>
                    <textarea v-model="theory" class="form-control" id="theory" rows="10" placeholder="Теория"></textarea>
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
                    <li v-for="answer of answers" :key="answer.key">{{answer.title}}</li>
                </ul>
                <button type="submit" class="btn btn-primary">Добавить урок</button>
            </form>
        <h2 v-if="admin">Практика</h2>
        <form v-if="admin" @submit.prevent="addPractic">
            <label for="practicTitle">Название</label>
            <input v-model="practicTitle" class="form-control" id="practicTitle"/>
            <label for="practicQuestion">Задание</label>
            <input v-model="practicQuestion" class="form-control" id="practicQuestion"/>
            <button type="submit" class="btn btn-primary">Добавить задание</button>
        </form>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {addNewLesson, addNewPractic, getAuthUser} from '../services/apiService'

export default {
    name: 'Profile',
    data() {
        return {
            user: {},
            msg: '',
            admin: false,

            title: '',
            video: '',
            theory: '',

            question_title: '',
            answer_title: '',
            answer_right: '',

            answers: [],

            practicTitle: '',
            practicQuestion: '',

            lessons: []
        }
    },
    computed: {
        ...mapGetters(['getErrors'])
    },
    mounted() {
        this.getUser()

        /*getLessons().then((lessons) => {
            lessons.data.map((lesson) => {
                //console.log(this.user._id);
                console.log(lesson.testing).find({user: this.user._id})
            })
        }).catch((error) => {
            this.msg = error
        });*/
    },
    methods: {
        getUser() {
           getAuthUser().then((user) => {
               this.user = user.data
               if(user.data.role == "admin") {
                   this.admin = true
               }
           }).catch((error) => {
               console.log(error.response.data.errors)
           });
        },

        addLesson() {
            const question = {
                text: this.question_title,
                answers: this.answers
            }
            console.log(this.question_title);
            console.log(this.answers);
            addNewLesson(this.title, this.video, this.theory, question).then((lesson) => {
                console.log(lesson.data);
            }).catch((error) => {
                console.log(error.response.data.errors);
            })
        },
        addQuestion() {
            const answer = {
                title: this.answer_title,
                right: this.answer_right
            }
            this.answers.push(answer);
            //console.log(this.answers);
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