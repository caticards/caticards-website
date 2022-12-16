<template>
  <div class="users">
    <div class="heading">
      <div class="profile-picture">
        <img src="~/assets/images/profile-picture-1.jpg" alt="" />
      </div>
    </div>
    <div class="informations">
      <!-- <button class="user-btn">Enregistrer ce contact</button> -->
      <div class="profile">
        <div>
          <div class="naming">
            <h4>Charles DZADU</h4>
            <p class="small-txt">@charlesdzadu</p>
          </div>
          <div>
            <img class="icons" src="~/assets/images/ic-qr-code.png" alt="" />
          </div>
        </div>

        <div>
          <p class="small-txt">
            Visitez tous les réseaux sociaux mais c’est à vos risques et périls,
            peut être que vous découvrirez des choses intéressantes &
            importantes, mais peut être pas. Faite ce que vous voulez !
          </p>
        </div>
      </div>

      <div class="social">
        <div>
          <h3 class="title">PROFESSIONEL</h3>
        </div>

        <div class="call-to-action">
          <img class="icons" src="~/assets/images/mdi_web.png" alt="" />
          <div class="middle">
            <h3>Visitez mon site web</h3>
            <a href="#">www.charlesdzadu.com</a>
          </div>
          <img
            class="icons"
            src="~/assets/images/ic_baseline-open-in-new.png"
            alt=""
          />
        </div>
      </div>
      <div class="social-media">
        <img class="icons" src="~/assets/images/Instagram-Icon 1.png" alt="">
        <img class="icons" src="~/assets/images/logos_linkedin-icon.png" alt="">
        <img class="icons" src="~/assets/images/logos_youtube-icon.png" alt="">
        <img class="icons" src="~/assets/images/twiter.png" alt="">
        <img class="icons" src="~/assets/images/tiktok-app-icon-seeklogo.com 1.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "userlink",
};
</script>