<template>
<div>
        <navigation></navigation>
        <foot></foot>
</div>
</template>

<script>
import Navigation from './components-layout/Navigation.vue'
import Foot from "./components-layout/Foot.vue";

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