<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "Footer",
};
</script>

<template>
  <footer class="bg-secondary bg-gradient">
    <div class="container">
      <div class="row d-flex gap-5">
        <div class="col">
          <div class="card">
            <div
              class="card-header d-flex justify-content-center align-items-center gap-4"
            >
              <img
                class="w-50"
                src="https://www.creativefabrica.com/wp-content/uploads/2023/05/20/Rocket-Racoon-In-A-Spaceship-70128027-1.png"
                alt=""
              />

              <p>Hi! I'm Simone!</p>
            </div>

            <div class="card-body">
              <p>
                A very unconfident web developer, car-lover and tech-addicted guy, but I
                also have some positive aspects.
              </p>
            </div>
          </div>
        </div>
        <div class="col text-center">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <button>
                <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
              </button>
            </li>
            <li class="nav-item">
              <button>
                <router-link class="nav-link" :to="{ name: 'projects' }"
                  >Projects</router-link
                >
              </button>
            </li>
            <li class="nav-item">
              <button>
                <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
              </button>
            </li>
            <li class="nav-item">
              <button>
                <router-link class="nav-link" :to="{ name: 'contacts' }"
                  >Contact</router-link
                >
              </button>
            </li>
          </ul>
        </div>
        <div class="col text-center">
          <ul class="socials">
            <li>
              <a href="#"><i class="fa-brands fa-youtube"></i></a>
            </li>
            <li>
              <a href="https://github.com/simone-nolberto"
                ><i class="fa-brands fa-github"></i
              ></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/simone-nolberto-908a29224/"
                ><i class="fa-brands fa-linkedin"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style></style>
