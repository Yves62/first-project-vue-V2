<template>
  <div class="aromes">
    <div class="aromes-presentation">
      <h2>Voici un échantillon des arômes disponibles en commande</h2>

      <button class="btn" @click="vueAromes = !vueAromes">
        Cliquez ici pour voir les arômes
      </button>
    </div>

    <transition name="show">
      <template v-if="vueAromes">
        <div class="aromes-container" >
          <li v-for="img in arrayImg" :key="img">
             <div class="aromes-content">
            <img :src="img" alt="image présentant les arômes" />
          </div>
          </li>
        </div>
      </template>
    </transition>
  </div>
</template>

<script>
export default {
  name: "aromes",
  data() {
    return {
      arrayImg: ["https://images.pexels.com/photos/128399/pexels-photo-128399.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1071015/pexels-photo-1071015.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/9811623/pexels-photo-9811623.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"],
      vueAromes: false,
    };
  },
};
</script>

<style scoped>
.aromes {
  width: 100%;
  height: fit-content;
  margin: 75px 0;
  border-top: 1px dashed black;
}

.aromes .aromes-presentation {
  width: 90%;
  margin: 50px auto;
  text-align: center;
}

.aromes .aromes-presentation h2 {
  font-size: 2rem;
  margin-bottom: 50px;
}

.aromes .aromes-presentation h2::first-letter {
  color: crimson;
}

.aromes .aromes-presentation .btn {
  margin: 15px 0;
  display: inline-block;
  padding: 10px 15px;
  background-color: #333;
  color: white;
}

.aromes .aromes-container {
  width: 80%;
  margin: 0 auto;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.aromes .aromes-container .aromes-content {
  width: 120px;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
}

.aromes .aromes-container .aromes-content img {
  width: 100%;
  height: 100%;
}

.show-enter-from,
.show-leave-to {
  opacity: 0;
}

.show-enter-active,
.show-leave-active {
  transition: opacity 1s linear;
}
</style>