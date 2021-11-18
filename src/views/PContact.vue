<template>
    
        <div>
            <div class="adresse">
                <h2>Adresse de la boutique</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <contact></contact>
        </div>
   
</template>

<script>
import Contact from '../components/contact/Contact.vue';

export default {
    name : 'pcontac',
    data(){
        return{

        }
    },
    components : {
        'contact': Contact

    }

}
</script>

<style scoped>

.adresse {
  width: 90%;
  text-align: center;
  margin: 0 auto;
}

.adresse h2 {
  font-size: 2rem;
  margin-top: 50px;
}

.adresse h2::first-letter {
  color: crimson;
}

.adresse p {
  margin: 50px 0px;
}



</style>