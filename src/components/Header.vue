<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "Header",
};
</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container">
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'projects' }"
              >Projects</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'contacts' }">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style></style>
