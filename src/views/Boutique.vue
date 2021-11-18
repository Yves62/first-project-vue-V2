<template>
  <div>
     
      <div class="boutique">
        <h2>Bienvenue sur la boutique</h2>
        <p>Nous vous proposons une large gamme d'arômes.</p>
      </div>
      <aromes></aromes>
    
  </div>
</template>

<script>
import Aromes from '../components/Aromes.vue'

export default {
    name : 'boutique',
    data(){
        return{

        }
    },
    components : {
        'aromes' : Aromes
    }
}
</script>

<style scoped>

.boutique {
  width: 90%;
  text-align: center;
  margin: 0 auto;
}

.boutique h2 {
  font-size: 2rem;
  margin-top: 50px;
}

.boutique h2::first-letter {
  color: crimson;
}

.boutique p {
  margin: 50px 0px;
}

</style>