<template>
<div>
        <navigation></navigation>
        <foot></foot>
</div>
</template>

<script>
import Navigation from './Navigation.vue'
import Foot from "./Foot.vue";

export default {
  name: "layout",
  components: {
    Foot,
    Navigation
  }
};
</script>

<style scoped>
</style>