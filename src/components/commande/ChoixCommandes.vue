<template>
  <div>

  <div class="container-commades-aromes">
    <div class="commandes">
      <p>{{ vanille }}</p>
      <button class="btn" @click="riseVan">Plus</button>
      <button class="btn" @click="descVan">Moins</button>
      <p>{{ totalVanille }}</p>
    </div>

    <div class="commandes">
      <p>{{ noisette }}</p>
      <button class="btn" @click="riseNoi">Plus</button>
      <button class="btn" @click="descNoi">Moins</button>
      <p>{{ totalNoisette }}</p>
    </div>

    <div class="commandes">
      <p>{{ caramel }}</p>
      <button class="btn" @click="riseCar">Plus</button>
      <button class="btn" @click="descCar">Moins</button>
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
      vanille: "Vanille",
      noisette: "Noisette",
      caramel: "Caramel",
      totalVanille: 0,
      totalNoisette: 0,
      totalCaramel: 0,
      total : 0
    }
  },
  methods: {
    riseVan() {
      this.totalVanille++;
    },
    descVan() {
      this.totalVanille--;
    },
    riseNoi() {
      this.totalNoisette++;
    },
    descNoi() {
      this.totalNoisette--;
    },
    riseCar() {
      this.totalCaramel++;
    },
    descCar() {
      this.totalCaramel--;
    },
    totalEl(){
      return this.total = this.totalVanille + this.totalNoisette + this.totalCaramel;
    }
  },
  watch : {
    totalCaramel(){
      if(this.totalCaramel <= 0){
        this.totalCaramel = 0;
      }
    },
    totalVanille(){
      if(this.totalVanille <= 0){
        this.totalVanille = 0;
      }
    },
    totalNoisette(){
      if(this.totalNoisette <= 0){
        this.totalNoisette = 0;
      }
    },
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