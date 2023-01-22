<template>
  <main>
    <div class="container">
      <div class="left">
        <p>PERSONNALISABLE . ECO-RESPONSABLE . PRATIQUE</p>
        <h1>La carte high-tech qui vous démarque!</h1>
        <a class="btn" data-tf-popup="EDs1wTnQ" data-tf-opacity="100" data-tf-size="100"
          data-tf-iframe-props="title=Cati Card Order Form" data-tf-transitive-search-params data-tf-medium="snippet">
          Commander Maintenant</a>

      </div>
      <div class="right">
        <img src="~/assets/images/cropimg.webp" />
      </div>
    </div>





    <!-- ----------------- NOS PRODUITS------------------ -->
    <div class="presentation">
      <h1>Nos différents produits</h1>
      <span></span>
    </div>
    <ProductsList />
    <!-- ----------------FIN NOS PRODUITS ----------------- -->


    <HowItWork />



    <!-- ------------COMMANDE DE CARTE-------------- -->

    <div class="comparaison">
      <h1>Cati Cards vs Carte de visite classique</h1>
      <div class="comparative-point">
        <div>
          <img src="~/assets/images/speed-sharing_460x.jpg" alt="" />
          <h3>Un gain de temps</h3>
          <p>
            Partagez instantanément vos informations d'un simple toucher ou
            numérisez. Échangez des informations de contact, des médias sociaux,
            des sites Web et plus encore.
          </p>
        </div>
        <div>
          <img src="~/assets/images/update_460x.webp" alt="" />
          <h3>Mettre à jour à tout moment</h3>
          <p>
            Édition en temps réel. Mettez à jour vos informations depuis
            n'importe quel endroit et elles se synchroniseront automatiquement.
          </p>
        </div>
        <div>
          <img src="~/assets/images/wow-effect2_460x.png" alt="" />
          <h3>Effet Wow - inclus</h3>
          <p>
            Surprenez vos futures connexions avec le moyen le plus rapide et le
            plus cool de partager des informations.
          </p>
        </div>
        <div>
          <img src="~/assets/images/QR_460x.webp" alt="" />
          <h3>Compatibilité par défaut</h3>
          <p>
            Partagez avec n'importe qui. Compatible avec tous les smartphones
            modernes, Apple et Android.
          </p>
        </div>
        <div>
          <img src="~/assets/images/cost_460x.png" alt="" />
          <h3>Rentable</h3>
          <p>
            Remplacez des centaines de cartes de visite en papier par une qui
            utilise la technologie contemporaine.
          </p>
        </div>
        <div>
          <img src="~/assets/images/tree2_460x.png" alt="" />
          <h3>Respectueux de la nature</h3>
          <p>
            En passant à la solution numérique, moins d'arbres sont coupés
            pour nos besoins de mise en réseau.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "//embed.typeform.com/next/embed.js"
        }
      ]
    }
  }
}
</script>

