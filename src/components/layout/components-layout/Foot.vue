<template>
  <footer>
      <div class="element">
          <p>coffee-shop</p>
      </div>
      <div class="element">
          <h3>Horaire</h3>
          <ul>
              <li v-for="(horaire,index) in horaires" :key="index">{{ index }} : {{ horaire }}</li>
          </ul>
      </div>
      <div class="element">
          <h3>Réseaux sociaux</h3>
          <ul>
              <li v-for="reseau in reseaux" :key="reseau">{{ reseau }}</li>
          </ul>
      </div>
  </footer>
</template>

<script>
export default {
    name : 'foot',
    data(){
        return{
            horaires : {
                lundi : '9-18h',
                mardi : '9-18h',
                mercredi : '9-18h',
                jeudi : '9-18h',
                vendredi : '9-18h',
                samedi: '9-18h',
                dimanche: 'fermé'
            },
            reseaux : ['facebook','twitter','instagram']
        }
    }
}
</script>

<style scoped>

footer{
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width:100%;;
    height: fit-content;
    padding: 10px Opx;
    background-color: #333;
    color:white;
    padding: 30px;
}

element{
    flex-basis:30%;
    height: 150px;
}

</style>