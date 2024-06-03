<script>
import { state } from "../state";
import Banner from "../components/Banner.vue";

export default {
  name: "SingleProject",

  data() {
    return {
      state,
      loading: true,
    };
  },

  components: {
    Banner,
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

    <Banner
      bannerTitle="this.state.project.project_title"
      bannerParagraph="Take a look at this project by"
      bannerCTA="Back to projects"
      bannerCTAUrl="projects"
    ></Banner>

    <template v-if="this.state.success">
      <div class="container my-5">
        <div class="row">
          <div class="col">
            <div>
              <template v-if="this.state.project.cover_image.startsWith('uploads')">
                <img
                  :src="
                    this.state.base_url_api + '/storage/' + this.state.project.cover_image
                  "
                  alt=""
              /></template>

              <template v-else>
                <img :src="this.state.project.cover_image" alt="" />
              </template>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-title">
                <h3>{{ this.state.project.project_title }}</h3>
              </div>

              <div class="card-body">
                {{ this.state.project.description }}
              </div>

              <div class="card-footer">
                <h5>by {{ this.state.project.author }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <p>{{ this.state.project }}</p>
    </template>
  </div>
</template>

<style></style>
