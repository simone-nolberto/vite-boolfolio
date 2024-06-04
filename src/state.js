import { reactive } from "vue";
import axios from "axios";

export const state = reactive({

    base_api_url: "http://127.0.0.1:8000",
    base_projects_url: "/api/projects",


    projects: [],


    getProjects(url) {
        axios.get(url)
            .then(response => {
                // console.log(response.data.projects);
                this.projects = response.data.projects;
                // console.log(this.projects.data);
            })
    },

})
