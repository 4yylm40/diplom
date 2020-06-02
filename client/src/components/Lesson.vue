<template>
    <div class="project project__mobiile">
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
export default {
    name: 'Lesson',
    props: ['lesson']
}
</script>