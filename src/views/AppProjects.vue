<script>
import { state } from "../state";
import Banner from "../components/Banner.vue";

import ProjectCard from "../components/ProjectCard.vue";

export default {
  name: "AppProjects",

  data() {
    return {
      state,

      loading: true,
    };
  },

  components: {
    ProjectCard,
    Banner,
  },

  mounted() {
    let url = this.state.base_api_url + this.state.base_projects_url;

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

  <main>
    <div class="container">
      <nav aria-label="Page navigation">
        <div class="pagination d-flex align-items-center gap-0">
          <span class="page-item" v-if="this.state.projects.prev_page_url != null">
            <button
              class="page-link"
              href="#"
              @click="this.state.getProjects(this.state.projects.prev_page_url)"
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </span>
          <div class="container my-5">
            <div class="row">
              <ProjectCard
                v-for="project in this.state.projects.data"
                :project="project"
              ></ProjectCard>
            </div>
          </div>
          <span class="page-item" v-show="this.state.projects.next_page_url != null">
            <button
              class="page-link"
              href="#"
              @click="this.state.getProjects(this.state.projects.next_page_url)"
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </span>
        </div>
      </nav>
    </div>
  </main>
</template>

<style></style>
