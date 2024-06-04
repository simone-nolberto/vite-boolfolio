<script>
import axios from "axios";
import { state } from "../state";
import Banner from "../components/Banner.vue";

export default {
  name: "SingleProject",

  data() {
    return {
      state,
      project: "",
      success: "",
      loading: true,
    };
  },

  components: {
    Banner,
  },

  methods: {
    getProject(url) {
      axios.get(url).then((response) => {
        console.log(response.data);

        this.project = response.data.response;
        // console.log(this.project);

        if (response.data.success) {
          this.success = response.data.success;
          this.project = response.data.response;
        } else {
          console.log(this.project, this.success);
          this.$router.push({ name: "notFound" });
        }
      });
    },
  },

  mounted() {
    let url =
      this.state.base_api_url +
      this.state.base_projects_url +
      "/" +
      this.$route.params.id;

    this.getProject(url);
  },
};
</script>

<template>
  <div>
    <!-- Project {{ $route.params.id }} -->

    <Banner
      :bannerTitle="project.project_title"
      bannerParagraph="Take a look at this project by"
      bannerCTA="Back to projects"
      bannerCTAUrl="projects"
    ></Banner>

    <template v-if="this.success">
      <div class="container my-5">
        <div class="row">
          <div class="col">
            <div>
              <template v-if="this.project.cover_image.startsWith('uploads')">
                <img
                  :src="this.state.base_url_api + '/storage/' + this.project.cover_image"
                  alt=""
              /></template>

              <template v-else>
                <img :src="this.project.cover_image" alt="" />
              </template>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-title">
                <h3>{{ this.project.project_title }}</h3>
              </div>

              <div class="card-body">
                {{ this.project.description }}
              </div>

              <div class="card-footer">
                <h5>by {{ this.project.author }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <p>Burodogah</p>
    </template>
  </div>
</template>

<style></style>
