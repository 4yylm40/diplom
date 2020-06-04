<template>
    <div class="project project__mobiile" @click="getSlug(lesson._id)">
        <router-link class="project__href" :to="{name: 'lesson', params: {lesson_id: lesson._id}}">
        <div class="project__form">
            <h1 class="project__header">{{lesson.title}}</h1>
            <video controls :src="lesson.video" class="col-lg-12" type="video/mp4"></video>
            <p class="project__text">{{lesson.theory}}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'Lesson',
    props: ['lesson'],
    methods: {
        ...mapActions(['getCurrentPost']),
        getSlug(slug) {
            this.getCurrentPost({
                slug: slug
            })
        }
    }
}
</script>