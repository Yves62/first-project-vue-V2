<template>
  <div>
      <form>
     
            <input type="text" name="name" id="name" autofocus placeholder="Entrez votre nom" required>
        
            <input type="email" name="email" id="email" placeholder="Entrez votre mail" required>

            <textarea name="text" id="text" placeholder="Entrez votre message" required></textarea>
       
            <input type="submit" value="Envoyer">

      </form>
  </div>
</template>

<script>
export default {
    name : 'contact-form'
}
</script>

<style>

form{
    width: 70%;
    height: fit-content;
    padding: 20px 0px;
    box-shadow: 1px 2px 10px 1px #00000077;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap : 15px;
    border:none;
}

input{
    width: 90%;
    padding-left:10px;
    height: 30px;
    margin: 0 auto;
    border-radius:4px;
    border: none;
    background-color: rgba(211, 211, 211, 0.315);
}

textarea{
    width: 90%;
    height: 50px;
    resize: none;
    border: none;
    padding-left:10px;
    margin:0 auto;
    border-radius:4px;
    background-color: rgba(211, 211, 211, 0.315);
}

</style>