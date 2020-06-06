<template>
    <div>
            <div class="container">
        <h1>{{lesson.title}}</h1>
        <iframe class="col-lg-12" width="560" height="560" :src="lesson.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <div class="flex-box">
            <a class="btn btn-dark" data-toggle="collapse" href="#multiCollapseExample1" role="button"
                aria-expanded="false" aria-controls="multiCollapseExample1">Показать теорию</a>
            <!--<input  class="btn btn-dark" value="Следующий урок" type="button" onclick="location.href='2.php'" />-->
        </div>

    </div>
    <div class="container">
        <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample1">
                <div class="card card-body">
                    <p class="text txt"> {{lesson.theory}}


                        <br><button v-if="getToken" type="button" class="btn btn-dark d-block mx-auto" data-toggle="modal"
                            data-target="#exampleModal">
                            Пройти тест
                        </button>

                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Вопрос</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form @submit.prevent="answerTest(lesson.question.answers)">
                                            <p class="text-center"><b>{{lesson.question.text}}</b></p>
                                            <div class="question">
                                                <hr>
                                                <ol>
                                                    <li v-for="answer of lesson.question.answers" :key="answer.id"><input @change="chooseAnswer(answer)" type="checkbox" name="quest1"> <label
                                                            class="form-check-label" for="a_1">{{answer.title}}</label></li>
                                                </ol>
                                            </div>
                                            <div>
                                                {{msg}}
                                                <button class="btn-dark btn-lg btn-block" id="apply">Получить
                                                    результат</button>
                                            </div>
                                        </form>
                                        <pre id="log">
                                                  </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="admin">
        <h2>Прошедшие тест</h2>
        <table class="table table-sm table-dark table-hover">
            <thead>
            <tr>
                <th scope="col">Имя</th>
                <ht scope="col">Количество попыток</ht>
                <th scope="col">Счет</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user of lesson.testing" :key="user._id">
                <td>{{user.user.name}}</td>
                <td>{{user.trying}}</td>
                <td>{{user.score}}</td>
            </tr>
            </tbody>
        </table>
    </div>

    </div>
</template>

<script>
import {getAuthUser, getOneLesson, answerTest} from '../services/apiService'
import {mapGetters} from 'vuex'

export default {
    name: 'LessonDetail',
    data() {
        return {
            lesson: {},
            msg: '',
            admin: false
        }
    },
    computed: {
        ...mapGetters(['getToken'])
    },
    mounted() {
        getOneLesson().then((lesson) => {
            this.lesson = lesson.data
        }).catch((error) => {
            console.log(error.response.data.errors)
        }),

        this.getUser();
    },
    methods: {
        answerTest(answers) {
            let mistakes = 0;
            answers.map((answer) => {
                if(answer.right != answer.user_answer) {
                    mistakes++;
                }
            });
            if(mistakes == 0) {
                //GET user's try
                //Calculate score
                //PUT information to lesson +try +score
                answerTest(1, 1).then(() => {
                    getOneLesson().then((lesson) => {
                        this.lesson = lesson.data
                    }).catch((error) => {
                        console.log(error.response.data.errors)
                    });
                    this.msg = 'Ответ верный'
                }).catch((err) => {
                    console.log(err);
                });
            } else {
                answerTest(1, 0).then(() => {
                    getOneLesson().then((lesson) => {
                        this.lesson = lesson.data
                    }).catch((error) => {
                        console.log(error.response.data.errors)
                    });
                    this.msg = 'Ответ неверный'
                }).catch((err) => {
                    console.log(err)
                });
            }
        },

        chooseAnswer(answer) {
            answer.user_answer = !answer.user_answer;
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