<script>
import { state } from "./state";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import { RouterLink, RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      state,
    };
  },
};
</script>

<template>
  <Header></Header>

  <RouterView></RouterView>

  <Footer></Footer>
</template>

<style></style>
