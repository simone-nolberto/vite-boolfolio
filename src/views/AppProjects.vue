<script>
import { state } from "../state";
import Banner from "../components/Banner.vue";

import ProjectCard from "../components/ProjectCard.vue";

export default {
  name: "AppProjects",

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
    Banner,
  },

  mounted() {
    let url = this.base_api_url + this.base_projects_url;

    this.state.getProjects(url);
  },
};
</script>

<template>
  <Banner
    bannerTitle="These are my projects"
    bannerParagraph="Lots have already been done, but I keep studying to get better and better!"
    bannerCTA="Learn more about me"
    bannerCTAUrl="about"
  ></Banner>

  <div class="container my-5">
    <div class="row">
      <ProjectCard
        v-for="project in this.state.projects.data"
        :project="project"
      ></ProjectCard>
    </div>
  </div>

  <div class="container">
    <nav aria-label="Page navigation">
      <ul class="pagination d-flex justify-content-between">
        <li class="page-item" v-if="this.state.projects.prev_page_url != null">
          <button
            class="page-link"
            href="#"
            @click="this.state.getProjects(this.state.projects.prev_page_url)"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <!-- <li class="page-item active">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li> -->
        <li class="page-item" v-show="this.state.projects.next_page_url != null">
          <button
            class="page-link"
            href="#"
            @click="this.state.getProjects(this.state.projects.next_page_url)"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style></style>
