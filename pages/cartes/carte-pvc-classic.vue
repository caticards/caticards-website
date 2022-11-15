<template>
  <div>
    <div class="details-produits">
      <div class="col-1">
        <Variantes />
      </div>

      <div class="col-2">
        <Variantes />
      </div>

      <div class="col-3">
        <p>Collection classique</p>
        <h2>Carte Classique Tapni</h2>
        <div class="boutons-paiement">
          <button class="transparent"><span>-</span> 1 <span> +</span></button>
          <button class="btn">Ajouter au panier</button>
        </div>
        <p><span>Color:</span> Black</p>
        <div class="col-1 col-1__round">
          <Variantes />
        </div>

        <div class="qualites">
          <div>
            <i class="uil uil-truck"></i>
            <p>Expédition rapide</p>
          </div>
          <div>
            <i class="uil uil-flower"></i>
            <p>Respectueux de la nature</p>
          </div>
          <div>
            <i class="uil uil-flower"></i>
            <p>100% Garantie</p>
          </div>
          <div>
            <i class="uil uil-qrcode-scan"></i>
            <p>Entièrement capable</p>
          </div>
        </div>

        <div class="livraison">
          <i class="uil uil-truck">Livraison</i>
          <div>
            <h3>L'Europe:</h3>
            <p>- Livraison standard (GLS) : 3-7 jours ouvrables</p>
            <p>-DHL Express : 1-3 jours ouvrables</p>
          </div>
          <div>
            <h3>À l'échelle mondiale :</h3>
            <p>- Livraison standard : 7-14 jours ouvrables</p>
            <p>
              🚀 Livraison DHL Express gratuite disponible pour les commandes de
              plus de 100 € en Europe.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="particularite">
      <div>
        <span> <i class="uil uil-favorite"> </i></span>
        <h3>Votre nouvelle expérience de connexion</h3>
        <p>
          Tapni Card est un outil de mise en réseau innovant, digital, gain de
          temps et éco-responsable à la fois.
        </p>
      </div>
      <div>
        <span> <i class="uil uil-favorite"> </i></span>
        <h3>
          D'un simple toucher ou d'un scan, vous pouvez partager
          instantanément :
        </h3>
        <p>
          Coordonnées, profils de médias sociaux, informations de paiement,
          photos et vidéos, site Web ou détails d'un événement à venir. Les
          possibilités sont infinies!
        </p>
      </div>
      <div>
        <span> <i class="uil uil-times"></i></span>
        <h3>Aucune application nécessaire !</h3>
        <p>
          L'autre personne n'a pas besoin d'une application ou d'un Tapni pour
          recevoir vos informations.
        </p>
      </div>
      <div>
        <span><i class="uil uil-mobile-android"></i> </span>
        <h3>Compatible avec les appareils iPhone et Android</h3>
        <p>
          Tapni est compatible avec presque tous les appareils. Pour plus
          d'informations sur les appareils pris en charge, consultez
          <a href="#">tapni.co/compatible-devices</a>.
        </p>
      </div>
    </div>

    <VideoContainBlack
      title="Partagez qui vous êtes. Avec quelqu'un."
      subtitle="Votre carte de visite est votre identité."
      description="Impressionnez tous ceux que vous rencontrez avec le moyen le plus rapide et le plus efficace de partager des informations !"
      media="video-details-produits.mp4"
    />

    <VideoContainer
      subtitle=""
      title="La seule carte de visite vous aurez jamais besoin."
      hasStar="1"
      description="Tapni est une carte de visite numérique qui facilite plus que jamais
          le partage et l'échange d'informations."
      media="video-3.mp4"
    />

    <div class="galery">
      <div class="title">
        <h2>Mettre le "business" dans les cartes de visite.</h2>
      </div>
      <div class="collection">
        <img src="~/assets/images/tapni-card17_180x.jpg" alt="" />
        <img src="~/assets/images/tapni-card17_180x.jpg" alt="" />
        <img src="~/assets/images/tapni-card17_180x.jpg" alt="" />
        <img src="~/assets/images/tapni-card17_180x.jpg" alt="" />
        <img src="~/assets/images/tapni-card17_180x.jpg" alt="" />
        <img src="~/assets/images/tapni-card17_180x.jpg" alt="" />

        <img src="~/assets/images/card-5.webp" alt="" />
      </div>
    </div>

    <div class="comparaison">
      <h2>Tapni vs Carte de visite classique</h2>
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
          <h3>Respectueux des arbres</h3>
          <p>
            En passant à la solution numérique, moins d'arbres 🌳 sont coupés
            pour nos besoins de mise en réseau.
          </p>
        </div>
      </div>
    </div>
    <VideoContainerGray
      hasButton="False"
      subtitle="FAITES EN VÔTRE"
      title="Personnalisé en quelques clics."
      description="Faites en sorte que votre carte Tapni corresponde à votre style et à votre image de marque pour créer
          une expérience unique et inoubliable."
    />

    <div class="demo">
      <video id="background-video" autoplay loop muted>
        <source src="~/assets/images/video-demo.mp4" type="video/mp4" />
      </video>
      <!-- <video autoplay muted loop>
        <source src="" type="video/mp4" />
      </video> -->
      <div class="stars">
        <div>
          <img src="~/assets/images/wow-effect2_460x.png" alt="" />
          <h2>Changeur de jeu</h2>
          <p>
            "Tapni a révolutionné notre façon de faire des affaires. Les ventes
            ont immédiatement augmenté et nos clients nous demandent toujours où
            nous avons obtenu nos cartes de visite."
          </p>
        </div>
        <div>
          <img src="~/assets/images/wow-effect2_460x.png" alt="" />
          <h2>Incroyablement puissant</h2>
          <p>
            "Toute ma société a fait le changement et nous ne pourrions pas être
            plus heureux. Le design personnalisé a donné à nos cartes un look
            frais et moderne dont nous avions tant besoin."
          </p>
        </div>
        <div>
          <img src="~/assets/images/wow-effect2_460x.png" alt="" />
          <h2>Post-pandémie Doit avoir</h2>
          <p>
            "À une époque où les poignées de main ont été remplacées par des
            coups de poing, ces cartes de visite permettent de partager
            facilement et en toute sécurité toutes vos informations de contact."
          </p>
        </div>
      </div>
    </div>

    <VideoContainBlack
      title="Partagez qui vous êtes. Avec quelqu'un."
      subtitle="Votre carte de visite est votre identité."
      hasCount="1"
      description="Impressionnez tous ceux que vous rencontrez avec le moyen le plus rapide et le plus efficace de partager des informations !"
      media="video-details-produits.mp4"
    />

    <div class="green-band">
      <div class="left">
        <img src="~/assets/images/logo-vert.webp" alt="" />
        <h5>Toutes les livraisons sont neutres en carbone</h5>
      </div>
      <div class="right">
        <h6>Propulsé par Shopify Planète</h6>
      </div>
    </div>
  </div>
</template>
