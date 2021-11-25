<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/" exact>Accueil</router-link></li>
        <li><router-link to="/boutique">Boutique</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    
    <blocHead></blocHead>
    
    <transition name="tr" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import BlocHead from "./BlocHead.vue";

export default {
  name: "navigation",
  components: {
    BlocHead
  }
};
</script>

<style scoped>
nav {
  width: 100%;
  height: 50px;
}

nav ul {
  width: 100%;
  height: 50px;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
}

nav ul li {
  font-size: 1.1rem;
  color: white;
  cursor: pointer;
  padding: 10px;
}
nav ul li a {
  font-size: 1.1rem;
  color: rgba(180, 180, 180, 0.76);
  cursor: pointer;
  padding: 10px;
}

.router-link-active {
  color: white;
}

.tr-enter-from,
.tr-leave-to {
  opacity: 0;
}

.tr-enter-active,
.tr-leave-active {
  transition: opacity 0.5s linear;
}
</style>