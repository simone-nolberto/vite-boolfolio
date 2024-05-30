<script>
import axios from "axios";

export default {
  name: "App",

  data() {
    return {
      base_api_url: "http://127.0.0.1:8000",
      base_projects_url: "/api/projects",

      projects: [],
      loading: true,
    };
  },

  methods: {
    callAPI(url) {
      axios
        .get(url)
        .then((response) => {
          // console.log(response);
          this.projects = response.data.projects;
          this.loading = false;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },

  mounted() {
    let url = this.base_api_url + this.base_projects_url;

    this.callAPI(url);
  },
};
</script>

<template></template>

<style></style>
