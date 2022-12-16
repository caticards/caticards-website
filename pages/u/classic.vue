<template>
  <div>
    
    <Background media="verdure.jpeg" />

    <div class="userprofile">
      <Profile
        name="Charles DZADU"
        title="Ingenieur informatique à BRYDG"
        description="Visitez tous les réseaux sociaux mais c’est à vos risques et périls,
          peut être que vous découvrirez des choses intéressantes & importantes,
          mais peut être pas. Faite ce que vous voulez !"
        media="beau-jeune-homme-africain-costume_219728-1359.webp"
      />

      <Contact
        title="Le nouveau son est disponible"
        hasDescription="1"
        description="Milagan Maa"
        media="mdi_spotify.png"
      />
      <Contact title="Visitez mon portfolio" media="iconoir_design-nib.png" />
      <Contact title="Envoyez moi un e-mail" media="ic_baseline-email.png" />

      <div class="social-media">
        <img src="~/assets/images/ion_social-github.png" alt="" />
        <img src="~/assets/images/ion_social-linkedin.png" alt="" />
        <img src="~/assets/images/ion_social-twitch-outline.png" alt="" />
        <img src="~/assets/images/ion_social-whatsapp.png" alt="" />
        <img src="~/assets/images/ion_social-twitter.png" alt="" />
        <img src="~/assets/images/ion_social-youtube.png" alt="" />
        <img src="~/assets/images/typcn_social-facebook-circular.png" alt="" />
        <img src="~/assets/images/typcn_social-instagram.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Background from "./Background.vue";

export default {
  layout: "userlink",
  components: { Background },
};
</script>