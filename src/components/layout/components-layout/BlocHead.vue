<template>
  <div class="container-blocHead">
        <img :src="IMG" alt="image de présentation de la boutique">
  </div>
</template>

<script>
export default {
    name : 'blocHead',
    data(){
        return {
            IMG : 'https://images.pexels.com/photos/10008932/pexels-photo-10008932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        }
    }
}
</script>

<style scoped>

.container-blocHead{
    width: 100%;
    height: 270px;
}

.container-blocHead img{
    width: 100%;
    height: 100%;
}





</style>