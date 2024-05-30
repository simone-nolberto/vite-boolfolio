import { reactive } from "vue";
import axios from "axios";

export const state = reactive({

    projects: [],

    getProjects(url) {
        axios.get(url)
            .then(response => {
                console.log(response.data.projects);
                this.projects = response.data.projects;
                // console.log(this.projects.data);
            })
    },


})
