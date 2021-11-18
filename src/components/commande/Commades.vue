<template>
  <div class="commandes">
    <div class="commandes-top">
      <h2>Vous souhaitez passer commande ?</h2>

      <p>Choisissez la quantité que vous désirez et votre parfum</p>
    </div>

    <choix-commandes></choix-commandes>
    
  </div>
</template>

<script>
import ChoixCommandes from "./ChoixCommandes.vue";

export default {
  name: "commandes",
  data() {
    return {
      
    };
  },
  components: {
    "choix-commandes": ChoixCommandes,
  },
};
</script>

<style scoped>
.commandes {
  width: 100%;
  height: fit-content;
  margin: 75px 0;
  border-top: 1px dashed black;
}

.commandes .commandes-top {
  width: 90%;
  margin: 50px auto;
  text-align: center;
}

.commandes .commandes-top h2 {
  font-size: 2rem;
  margin-bottom: 50px;
}

.commandes .commandes-top h2::first-letter {
  color: crimson;
}
</style>