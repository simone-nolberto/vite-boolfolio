<script>
import Banner from "../components/Banner.vue";
import axios from "axios";

export default {
  name: "AppContacts",
  data() {
    return {
      base_api_url: "http://127.0.0.1:8000",
      name: "",
      email: "",
      message: "",
      loading: false,
    };
  },

  methods: {
    sendMessage() {
      this.loading = true;
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      const apiUrl = `${this.base_api_url}/api/contacts`;
      axios.post(apiUrl, data).then((response) => {
        console.log(response);

        if (response.data.success) {
          (this.name = ""), (this.email = ""), (this.message = "");
        }
      });

      this.loading = false;
    },
  },
  components: {
    Banner,
  },
};
</script>

<template>
  <Banner
    bannerTitle="Here we are...in the end!"
    bannerParagraph="If you want to get in touch with me for any reason, don't esitate!"
    bannerCTA="Back home"
    bannerCTAUrl="home"
  ></Banner>

  <main>
    <div class="container my-5">
      <form @submit.prevent="sendMessage()" action="">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            name="name"
            id="name"
            aria-describedby="helpId"
            placeholder="Your name here"
            v-model="name"
          />
          <small id="helpId" class="form-text text-muted"
            >Type your name here <i class="fa-solid fa-arrow-up"></i
          ></small>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelpId"
            placeholder="abc@mail.com"
            v-model="email"
          />
          <small id="emailHelpId" class="form-text text-muted"
            >Insert your email here <i class="fa-solid fa-arrow-up"></i
          ></small>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">Your message</label>
          <textarea
            class="form-control"
            name="message"
            id="message"
            rows="6"
            v-model="message"
          ></textarea>
          <small id="emailHelpId" class="form-text text-muted"
            >Write here what you want to tell me <i class="fa-solid fa-arrow-up"></i
          ></small>
        </div>

        <button type="submit" class="btn btn-primary" :disabled="loading">Send</button>
      </form>
    </div>
  </main>
</template>

<style></style>
