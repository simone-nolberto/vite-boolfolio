<script>
import { RouterLink, RouterView } from "vue-router";
import Banner from "../components/Banner.vue";

export default {
  name: "NotFound",

  components: {
    Banner,
  },
};
</script>

<template>
  <Banner
    bannerTitle="404 error"
    bannerParagraph="You seems really curious"
    bannerCTA="Why don't you read something else?"
    bannerCTAUrl="projects"
  ></Banner>

  <div class="container text-center my-5">
    <div class="row">
      <div class="col">
        <p>
          Sorry, nothing found here! It seems like you searched for something that still
          doesn't exists
        </p>
        <p>I'm actually cooking something so...let me cook and come back soon!</p>

        <div class="container d-flex justify-content-center gap-5">
          <button class="btn btn-warning">
            <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
