<template>
  <div>
    <div class="contain">
      <div class="col-1">
        <video width="" height="750" autoplay muted loop>
          <source :src="require(`~/assets/images/${media}`)" type="video/mp4" />
        </video>
      </div>
      <div class="col-2">
        <p v-if="hasCount == true" > 3  2 1 GO!</p>
        <h1>{{ title }}</h1>
        <span></span>
        <h3>{{ subtitle }}</h3>
        <p>
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  props: {
    title: String,
    sub8title: String,
    description: String,
    media: String,
    hasCount:Boolean,
  },
};
</script>