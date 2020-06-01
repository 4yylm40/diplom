<template>
    <div>
            <div class="container">
        <h1>Урок 1</h1>
        <video controls src="source/видео1.mp4" class="col-lg-12" type="video/mp4"></video>

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
                    <p class="text txt">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere nisi ligula, in rutrum
                        velit egestas et. Mauris consectetur, ligula non interdum vehicula,
                        elit dolor pulvinar ex, ac rhoncus urna mi a ex. Class aptent taciti sociosqu ad litora torquent
                        per conubia nostra, per inceptos himenaeos. Ut mauris felis, porttitor
                        non placerat pretium, finibus vitae erat. Aenean efficitur suscipit nulla, sed dictum dolor. Sed
                        molestie, nibh et malesuada facilisis, erat felis condimentum tortor,
                        quis porta lorem erat in arcu. In a mattis purus. Cras tempor velit augue, non semper urna
                        elementum eu. Nunc dignissim lectus id magna convallis interdum. Maecenas ac
                        posuere diam. Quisque faucibus nulla id eros aliquam lobortis. Mauris quis pellentesque nulla.
                        Quisque at sollicitudin sem. Integer efficitur, ipsum in molestie elementum,
                        ligula nisi eleifend velit, sed pretium urna massa laoreet ligula.


                        <br><button type="button" class="btn btn-dark d-block mx-auto" data-toggle="modal"
                            data-target="#exampleModal">
                            Пройти тест
                        </button>

                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Вопрос №1</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <p class="text-center"><b>ВОПРОС №2: &laquo;.....&raquo;</b></p>
                                            <div class="question">
                                                <hr>
                                                <ol>
                                                    <li><input type="radio" name="quest1" id="a_1"> <label
                                                            class="form-check-label" for="a_1">В 1926 году</label></li>
                                                    <li><input type="radio" name="quest1" id="a_2"> <label
                                                            class="form-check-label" for="a_2">В 1936 году</label></li>
                                                    <li><input type="radio" name="quest1" id="a_3"> <label
                                                            class="form-check-label" for="a_3">В 1956 году</label></li>
                                                    <li><input type="radio" name="quest1" id="a_4"> <label
                                                            class="form-check-label" for="a_4">В 1986 году</label></li>
                                                </ol>
                                            </div>
                                            <div>
                                                <button class="btn-dark btn-lg btn-block" id="apply"
                                                    onclick="summary();">Получить
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
    <h4>Комментарии</h4>
    <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">'.$row->user.'</h5>
        <small>'.$row->email.'</small>
        </div>
        <p class="mb-1">'.$row->msg.'</p>
        </a>'
        </div>
    </div>
</template>

<script>
import {getOneLesson} from '../services/apiService'

export default {
    name: 'LessonDetail',
    data() {
        return {
            str: '',
            lessons: []
        }
    },
    async mounted() {
        this.getId().then((value) => console.log(value))
    },
    methods: {
        async getId() {
            return await getOneLesson(this.str).then((lessons) => 
                lessons).catch((err) => {
                console.log(err)
            });
        }
    }
}
</script>