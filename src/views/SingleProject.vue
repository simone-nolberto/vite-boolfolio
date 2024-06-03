<script>
import { state } from "../state";

export default {
  name: "SingleProject",

  data() {
    return {
      state,
      loading: true,
    };
  },

  mounted() {
    let url =
      this.state.base_api_url +
      this.state.base_projects_url +
      "/" +
      this.$route.params.id;

    this.state.getProject(url);
  },
};
</script>

<template>
  <div>
    <!-- Project {{ $route.params.id }} -->

    <div class="container">
      <div class="row">
        <div class="col">
          <h1>{{ this.state.project.project_title }}</h1>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<style></style>
