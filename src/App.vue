<script>
import axios from "axios";
import { state } from "./state";
import ProjectCard from "./components/ProjectCard.vue";

export default {
  name: "App",

  data() {
    return {
      state,

      base_api_url: "http://127.0.0.1:8000",
      base_projects_url: "/api/projects",

      loading: true,
    };
  },

  components: {
    ProjectCard,
  },

  methods: {},

  mounted() {
    let url = this.base_api_url + this.base_projects_url;

    this.state.getProjects(url);
  },
};
</script>

<template>
  <ProjectCard v-for="project in this.state.projects" :project="project"></ProjectCard>
</template>

<style></style>
