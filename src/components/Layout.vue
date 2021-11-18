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
  data() {
    return {};
  },
  components: {
    'foot': Foot,
    'navigation': Navigation
  },
};
</script>

<style scoped>
</style>