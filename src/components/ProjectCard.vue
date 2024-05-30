<script>
import { state } from "../state";

export default {
  name: "ProjectCard",
  data() {
    return {
      state,
    };
  },
  props: ["project"],
  methods: {},

  mounted() {},
};
</script>

<template>
  <div class="container d-flex">
    <div class="row">
      <div class="col">
        .
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">{{ this.project.project_title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </p>
            b5
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
