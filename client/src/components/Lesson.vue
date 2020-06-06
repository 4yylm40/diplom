<template>
    <div class="project project__mobiile" @click="getSlug(lesson._id)">
        <router-link class="project__href" :to="{name: 'lesson', params: {lesson_id: lesson._id}}">
        <div class="project__form">
            <h1 class="project__header">{{lesson.title}}</h1>
            <iframe class="col-lg-12" width="433" height="200" :src="lesson.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p class="project__text">{{lesson.theory.slice(0, 200) + ' ...'}}</p>
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