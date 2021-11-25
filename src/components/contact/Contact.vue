<template>
  <div class="contact">
    <h2>Contactez-nous</h2>
    <p>N'hésitez pas à nous contacter pour plus de renseignements</p>
    <contact-form></contact-form>
  </div>
</template>

<script>
import ContactForm from "./ContactForm.vue";

export default {
  name: "contact",
  components: {
    ContactForm
  },
};
</script>

<style scoped>
.contact {
  width: 100%;
  height: fit-content;
  margin: 75px 0;
  border-top: 1px dashed black;
  text-align: center;
}

.contact h2 {
  font-size: 2rem;
  margin-top: 50px;
}

.contact h2::first-letter {
  color: crimson;
}

.contact p {
  margin: 50px 0px;
}
</style>