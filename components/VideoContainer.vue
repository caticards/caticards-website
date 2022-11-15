<template>
  <div>
    <main>
      <div class="container container__video  ">
      <div class="left">
        <p> {{ subtitle }} </p>
        <h1> {{ title }} </h1>
        <span></span>
        <p>
          {{ description }}
        </p>
       
        <div v-if="hasDivPlus == true" >
          <img src="~/assets/images/cochet.png" />
          <p>Fonctionne sur iPhone et Android</p>
        </div>
        <button v-if="hasButton == true"  class="btn">Voir tous les produits</button>
        <p v-if="hasStar == true">Un clic- c'est tout ce qu'il faut! ✨</p>
      </div>
      <div class="right">
        <video width="800" height="600" autoplay muted loop>
          <source :src="require(`~/assets/images/${media}`)" type="video/mp4" />
        </video>
      </div>
    </div>
    </main>
  </div>
</template>

<script>
  export default{
    props:{
      title:String,
      subtitle: String,
     hasButton:Boolean,
      description: String,
      media:String,
      hasDivPlus:Boolean,
      hasStar:Boolean,

    }
  }
</script>