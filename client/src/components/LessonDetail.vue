<template>
    <div>
            <div class="container">
        <h1>{{lesson.title}}</h1>
        <video controls :src="lesson.video" class="col-lg-12" type="video/mp4"></video>

        <div class="flex-box">
            <a class="btn btn-dark" data-toggle="collapse" href="#multiCollapseExample1" role="button"
                aria-expanded="false" aria-controls="multiCollapseExample1">Показать теорию</a>
            <input  class="btn btn-dark" value="Следующий урок" type="button" onclick="location.href='2.php'" />
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
                                        <form @submit.prevent="answerTest">
                                            <p class="text-center"><b>{{lesson.question.text}}</b></p>
                                            <div class="question">
                                                <hr>
                                                <ol>
                                                    <li v-for="answer of lesson.question.answers" :key="answer.id"><input type="checkbox" name="quest1"> <label
                                                            class="form-check-label" for="a_1">{{answer.title}}</label></li>
                                                </ol>
                                            </div>
                                            <div>
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
    </div>
</template>

<script>
import {getOneLesson} from '../services/apiService'
import {mapGetters} from 'vuex'

export default {
    name: 'LessonDetail',
    data() {
        return {
            lesson: {}
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
        });
    },
    methods: {
        answerTest() {
            
        }
    }
}
</script>