<template>
  <div class="map">
    <img :src="image" class="map-image">
  </div>
</template>

<script>
  export default {
    name: 'main-body-map',
    data() {
      return {
        image: require(`@/assets/map/map.png`)
      }
    }
  }
</script>

<style scoped>
  .map {
    background-color: white;
  }
</style>
