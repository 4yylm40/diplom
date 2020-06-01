<template>
    <div class="container">
        <ul>
            <li v-for="profile of profiles" :key="profile.id">{{profile.name}}     {{profile.score}}</li>
        </ul>
    </div>
</template>

<script>
import {getProfiles} from '../services/apiService'

export default {
    name: 'Index',
    data() {
        return {
            profiles: []
        }
    },
    mounted() {
        getProfiles().then((profiles) => {
            this.profiles = profiles.data;
        }).catch((error) => {
            console.log(error);
        });
    }
}
</script>