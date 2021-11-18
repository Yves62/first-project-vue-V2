<template>
 <div>
   <presentation></presentation>
   <aromes></aromes>
   <commandes></commandes>
   <contact></contact>
 </div>
</template>

<script>
import Presentation from '../components/Presentation.vue';
import Aromes from '../components/Aromes.vue';
import Commandes from '../components/commande/Commades.vue';
import Contact from '../components/contact/Contact.vue';


export default {
  name: 'accueil',
  components: {
   'presentation' : Presentation,
   'aromes' : Aromes,
   'commandes' : Commandes,
   'contact': Contact,
  }
}
</script>

<style scoped>

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}


</style>