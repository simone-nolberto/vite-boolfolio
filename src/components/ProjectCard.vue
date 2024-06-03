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
  <div class="col">
    <!-- <router-link :to="{ name: 'project', id }"> </router-link> -->

    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">{{ this.project.project_title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          Created by: {{ this.project.author }}
        </h6>
        <span>
          <template v-if="this.project.cover_image.startsWith('uploads')">
            <img
              :src="this.state.base_url_api + '/storage/' + this.project.cover_image"
              alt=""
          /></template>

          <template v-else>
            <img :src="this.project.cover_image" alt="" />
          </template>
        </span>

        <span>
          <ul class="d-flex gap-1 my-3">
            <li
              class="badge badge bg-warning"
              v-for="technology in this.project.technologies"
            >
              {{ technology.name }}
            </li>
          </ul>
        </span>
      </div>
    </div>
  </div>
</template>

<style></style>
