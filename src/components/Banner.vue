<script>
export default {
  name: "Banner",
  props: {
    bannerTitle: String,
    bannerParagraph: String,
    bannerCTA: String,
    bannerCTAUrl: String,
  },
};
</script>

<template>
  <div class="h-100 p-5 bg-secondary bg-gradient border rounded-3 text-center">
    <h2>{{ bannerTitle }}</h2>
    <p>{{ bannerParagraph }}</p>
    <button class="btn btn-primary">
      <router-link class="nav-link" :to="{ name: bannerCTAUrl }">{{
        bannerCTA
      }}</router-link>
    </button>
  </div>
</template>

<style></style>
