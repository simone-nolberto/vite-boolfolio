import { reactive } from "vue";
import axios from "axios";

export const state = reactive({

    base_api_url: "http://127.0.0.1:8000",
    base_projects_url: "/api/projects",


    projects: [],
    project: '',
    success: '',

    getProjects(url) {
        axios.get(url)
            .then(response => {
                console.log(response.data.projects);
                this.projects = response.data.projects;
                // console.log(this.projects.data);
            })
    },


    getProject(url) {
        axios.get(url)
            .then(response => {
                console.log(response.data);
                this.project = response.data.response;
                this.success = response.data.success;
                console.log(this.project, this.success);
            })
    }




})
