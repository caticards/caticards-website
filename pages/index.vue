<template>
  <main>
    <div class="container ">
      <div class="left">
        <p> INTELLIGENT . GAIN DE TEMPS . DURABLE</p>
        <h1>Carte de Visite Réinventée</h1>
        <NuxtLink to="/commander-une-carte" class="btn"> Commander Maintenant</NuxtLink>

      </div>
      <div class="right">
        <img src="~/assets/images/cropimg.webp">
      </div>
    </div>

    <AdvantagesList />

    <div class="container container__video">
      <div class="left">
        <p>MISE À NIVEAU DU RÉSEAU</p>
        <h1>Votre Carte de Visite Numérique</h1>
        <span></span>
        <p>Partagez vos réseaux sociaux et vos coordonnées de manière intelligente, rapide et durable.</p>
        <div>
          <img src="~/assets/images/cochet.png">
          <p>Fonctionne sur iPhone et Android</p>
        </div>
        <button class="btn">Voir tous les produits</button>
      </div>
      <div class="right">
        <video width="800" height="600" autoplay muted loop>
          <source src="~/assets/images/video1.mp4" type="video/mp4">
        </video>
      </div>
    </div>


    <div>
      <h2>+20 000 particuliers et entreprises ont expérimenté le réseautage de niveau supérieur</h2>
    </div>


    <div class="companies">
      <div>
        <img src="~/assets/images/DV.jpg">
      </div>
      <div>
        <img src="~/assets/images/ErsteBank.jpg">
      </div>
      <div>
        <img src="~/assets/images/Ottakringer.jpg">
      </div>
      <div>
        <img src="~/assets/images/ErsteBank.jpg">
      </div>
      <div>
        <img src="~/assets/images/Ottakringer.jpg">
      </div>

    </div>
    <!-- -----------------PRODUITS RECHERCHES------------------ -->
    <div class="wanted">
      <h2>Les plus recherchés</h2>
    </div>
    <ProductsList />

    <!-- ----------------FIN PRODUITS RECHERCHES----------------- -->
    <div class="container container__video container__video--gray">
      <div class="left">
        <p>FAITES EN VÔTRE</p>
        <h1>Personnalisé en quelques clics.</h1>
        <span></span>
        <p>Faites en sorte que votre carte Tapni corresponde à votre style et à votre image de marque pour créer
          une expérience unique et inoubliable.</p>

        <NuxtLink to="/commander-une-carte" class="btn"> Commander Maintenant</NuxtLink>
      </div>
      <div class="right">
        <video width="800" height="600" autoplay muted loop>
          <source src="~/assets/images/video-2.mp4" type="video/mp4">
        </video>
      </div>
    </div>


    <HowItWork />

    <!-- --------------VARIETES DE CARTES----------------- -->
    <div class="varieties">
      <div class="box-1">
        <img src="~/assets/images/emoji.png" alt="emoji">
        <p>UN TAP, PAS D'APPLICATION!</p>
        <h1> Pas besoin d'une application pour recevoir vos informations.</h1>
      </div>
      <div class="collection">
        <img src="~/assets/images/card-4.webp">
        <img src="~/assets/images/card-4.webp">
        <img src="~/assets/images/card-4.webp">
        <img src="~/assets/images/card-4.webp">
        <img src="~/assets/images/card-4.webp">
        <img src="~/assets/images/card-4.webp">
        <img src="~/assets/images/card-4.webp">
        <img src="~/assets/images/card-4.webp">
        <img src="~/assets/images/card-4.webp">
        <img src="~/assets/images/card-4.webp">
        <img src="~/assets/images/card-4.webp">
        <img src="~/assets/images/card-4.webp">
        <img src="~/assets/images/card-5.webp">
        <img src="~/assets/images/card-5.webp">

      </div>
      <div class="moblie">
        <img src="~/assets/images/card-4.webp">
      </div>

    </div>

    <!-- ---------------TEMOIGNAGES-------------- -->
    <div class="vue-sur">
      <h2>Vu sur 👀</h2>
      <div>
        <div>
          <div>
            <img src="~/assets/images/temoignages-entreprise-1.png">
          </div>
          <h2>2 minutes 2 millions</h2>
          <p>Tapni participait à la 9e saison du succès du Start-Up-Show autrichien 2 Minuten 2 Millionen.
            Découvrez comment notre présentation du fondateur et PDG s'est déroulée devant les
            investisseurs, rencontrez notre équipe et voyez comment
            nous nous sommes développés à l'échelle mondiale en quelques mois seulement. <br></p>
          <a class="link" href="#">Voir ici<span><i class="uil uil-arrow-right"></i> </span></a>

        </div>
        <div>
          <div>
            <img src="~/assets/images/temoignages-entreprise-1.png">
          </div>
          <h2>Business Insider Mexique</h2>
          <p>"Tapni est née en 2021 avec pour mission de faciliter le partage d'informations pour tous. Avec
            des sièges sociaux en Autriche et au Mexique, et des franchises en Arabie saoudite, en Colombie
            et en Serbie, elle sert des milliers de
            clients avec une assistance localisée et une livraison rapide."</p>
        </div>
        <div>
          <div>
            <img src="~/assets/images/temoignages-entreprise-1.png">
          </div>
          <h2>Der Brutaksten</h2>
          <p>"L'autre personne n'a pas besoin d'une application ou d'un produit Tapni pour recevoir mes
            informations de contact. Tout ce dont elle a besoin, c'est d'un smartphone compatible NFC, ce
            que la majorité de tous les appareils finaux sont
            déjà." - PDG et co-fondateur Mihajlo Nikodijević</p>
        </div>
      </div>
    </div>

    <!-- -----------------FIN TEMOIGNAGE--------------------- -->
    <div class="container container__video">
      <div class="left">
        <p>ALLEZ AU-DELÀ DU PARTAGE DE VOTRE NUMÉRO DE TÉLÉPHONE</p>
        <h1>Échangez des contacts et collectez des données, plus facilement que jamais.</h1>
        <span></span>
        <NuxtLink to="/commander-une-carte" class="btn"> Commander Maintenant</NuxtLink>
      </div>

    </div>

  </main>
</template>




