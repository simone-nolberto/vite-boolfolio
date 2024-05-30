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
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">{{ this.project.project_title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Created by: {{ this.project.author }}
            </h6>
            <p class="card-text">
              {{ this.project.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
