<script>
import Banner from "../components/Banner.vue";

export default {
  name: "AppContacts",
  components: {
    Banner,
  },
};
</script>

<template>
  <Banner
    bannerTitle="Here we are...in the end!"
    bannerParagraph="If you want to get in touch with for any reason, don't esitate!"
    bannerCTA="Back home"
    bannerCTAUrl="home"
  ></Banner>

  <div class="container">
    <form action="">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          name="name"
          id="name"
          aria-describedby="helpId"
          placeholder="Your name here"
        />
        <small id="helpId" class="form-text text-muted"
          >Type your name here <i class="fa-solid fa-arrow-up"></i
        ></small>
      </div>

      <div class="mb-3">
        <label for="surname" class="form-label">Surname</label>
        <input
          type="text"
          class="form-control"
          name="surname"
          id="surname"
          aria-describedby="helpId"
          placeholder="Your surname here"
        />
        <small id="helpId" class="form-text text-muted"
          >Type your surname here <i class="fa-solid fa-arrow-up"></i
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
        />
        <small id="emailHelpId" class="form-text text-muted"
          >Insert your email here <i class="fa-solid fa-arrow-up"></i
        ></small>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">Your message</label>
        <textarea class="form-control" name="message" id="message" rows="6"></textarea>
        <small id="emailHelpId" class="form-text text-muted"
          >Write here what you want to tell me <i class="fa-solid fa-arrow-up"></i
        ></small>
      </div>
    </form>
  </div>
</template>

<style></style>
