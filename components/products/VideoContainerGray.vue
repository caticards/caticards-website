<template>
  <div>
    <main>
      <div class="container container__video container__video--gray">
      <div class="left">
        <p>{{ subtitle }}</p>
        <h1>{{ title }}</h1>
        <span></span>
        <p>{{ description }}</p>

        <NuxtLink
          v-if="hasButton == true"
          to="/commander-une-carte"
          class="btn"
        >
          Commander Maintenant</NuxtLink
        >
      </div>
      <div class="right">
        <video width="800" height="600" autoplay muted loop>
          <source src="~/assets/images/video-2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    </main>

    
  </div>
</template>

<script>
export default {
  props: {
    subtitle: String,
    title: String,
    description: String,
    hasButton: Boolean,
  },

  mounted() {
    console.log(this.hasButton);
  },
};
</script>

