<template>
  <div class="presentation">
    <h1>Votre nouveau coffee-shop</h1>

    <p :id="idP1">Lorem ipsum dolor sit amet. Aut consectetur nostrum est assumenda veritatis aut sapiente omnis sed odit ullam qui suscipit error est autem fugit qui inventore tempore. Et facilis delectus ab unde sunt cum molestiae quis</p>
    <button class="btn" @click="presSup = !presSup" v-if="!presSup">
      Cliquez ici pour en savoir encore plus
    </button>
    <transition name="apparition" mode="out-in">
      <p :id="idP2" v-if="presSup">Lorem ipsum dolor sit amet. Aut consectetur nostrum est assumenda veritatis aut sapiente omnis sed odit ullam qui suscipit error est autem fugit qui inventore tempore. Et facilis delectus ab unde sunt cum molestiae quis. Lorem ipsum dolor sit amet. Aut consectetur nostrum est assumenda veritatis aut sapiente omnis sed odit ullam qui suscipit error est autem fugit qui inventore tempore. Et facilis delectus ab unde sunt cum molestiae quis</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "presentation",
  data() {
    return {
      presSup: false,
      idP1: "p1",
      idP2: "p2",
      enTete: true
    };
  }
};
</script>

<style scoped>
.presentation {
  width: 90%;
  text-align: center;
  margin: 0 auto;
}

.presentation h1 {
  font-size: 2rem;
  margin-top: 50px;
}

.presentation h1::first-letter {
  color: crimson;
}

.presentation #p1,
.presentation #p2 {
  margin: 50px 0px;
}

.presentation .btn {
  display: inline-block;
  padding: 10px 15px;
  background-color: #333;
  color: white;
}

.apparition-enter-from,
.apparition-leave-to {
  opacity: 0;
}

.apparition-enter-active,
.apparition-leave-active {
  transition: opacity 1s linear;
}
</style>