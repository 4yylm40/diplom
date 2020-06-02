<template>
    <div>
        <div class="tabl">
            <h2>Таблица лидеров</h2>
            <table class="table table-sm table-dark table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Score</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="profile of profiles" :key="profile.id">
                    <th scope="row">1</th>
                    <td>{{profile.name}}</td>
                    <td>{{profile.score}}</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div class="container less">
            <h2>Практические задания</h2>
            <div class="row">
                <div class="col-xl-6">
                    <div class="project project__mobiile" v-for="practic of practics" :key="practic.key">
                        <router-link class="project__href" :to="{name: 'practic', params: {practic_id: practic._id}}">
                            <div class="project__form">
                                <h1 class="project__header">{{practic.title}}</h1>
                                <p class="project__text">{{practic.question}}</p>
                            </div>
                        </router-link>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { getProfiles, getAllPractics } from "../services/apiService";
export default {
    name: 'Practic',
    data() {
        return {
            profiles: [],
            practics: []
        };
    },
    mounted() {
        getProfiles().then(profiles => {
            this.profiles = profiles.data;
        }).catch(error => {
            console.log(error);
        }),

        getAllPractics().then((practics) => {
            this.practics = practics.data
        }).catch((error) => {
            console.log(error);
        });
    }
}
</script>