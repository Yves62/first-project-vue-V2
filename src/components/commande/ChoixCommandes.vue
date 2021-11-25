<template>
  <div>

  <div class="container-commades-aromes">
   
    <div class="commandes">
      <p>Vanille</p>
      <button class="btn" @click="totalVanille++">Plus</button>
      <button class="btn" @click="totalVanille--" :disabled="checkqt(totalVanille)">Moins</button>
      <p>{{ totalVanille }}</p>
    </div>

    <div class="commandes">
      <p>Noisette</p>
      <button class="btn" @click="totalNoisette++">Plus</button>
      <button class="btn" @click="totalNoisette--" :disabled="checkqt(totalNoisette)" >Moins</button>
      <p>{{ totalNoisette }}</p>
    </div>

    <div class="commandes">
      <p>Caramel</p>
      <button class="btn" @click="totalCaramel++">Plus</button>
      <button class="btn" @click="totalCaramel--" :disabled="checkqt(totalCaramel)">Moins</button>
      <p>{{ totalCaramel }}</p>
    </div>
  </div>
  
  <p>Vous avez choisi : {{ totalEl() }} articles</p>

  </div>

  
</template>

<script>
export default {
  name: "choix-commandes",
  data() {
    return {
      totalVanille: 0,
      totalNoisette: 0,
      totalCaramel: 0,
      total : 0
    }
  },
  methods: {
    totalEl(){
      return this.total = this.totalVanille + this.totalNoisette + this.totalCaramel;
    },
    checkqt(order){
      return order === 0 ? true : false;
    }
  }
};
</script>

<style scoped>

.container-commades-aromes{
    width: 90%;
    margin:50px auto;
    height: fit-content;
    display: flex;
}

.container-commades-aromes .commandes{
    display: flex;
    gap:15px;
    flex-direction: column;
    margin: 0 15px;
    text-align:center;
    flex-basis: 30%;
}

.container-commades-aromes .commandes .btn{
  background-color: crimson;
  color: white;
  padding: 6px;
  border-radius: 50px;
  border:none;
}

.container-commades-aromes .commandes .btn:hover{
  border:1px solid crimson;
  background-color: #fff;
  color:black;
}

p{
  text-align: center;
}



</style>