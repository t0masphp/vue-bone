<template>
  <div class="img-wrapper">
    <transition-group
      name="fade"
      tag="div">
      <div
        v-for="number in [currentNumber]"
        :key="number"
      >
        <b-img
          :src="currentImage"
          class="w-100"
          @mouseover="stopRotation"
          @mouseout="startRotation"
        />
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'ImageSlider',
  data: function () {
    return {
      images: [
        'http://avizo.su/sites/default/files/styles/slider/public/now2.jpg',
        'http://avizo.su/sites/default/files/styles/slider/public/avizo_about1.jpg'
      ],
      currentNumber: 0,
      timer: null
    }
  },
  computed: {
    currentImage: function () {
      return this.images[Math.abs(this.currentNumber) % this.images.length]
    }
  },
  mounted: function () {
    this.startRotation()
  },
  methods: {
    startRotation: function () {
      this.timer = setInterval(this.next, 5000)
    },
    stopRotation: function () {
      clearTimeout(this.timer)
      this.timer = null
    },
    next: function () {
      this.currentNumber++
    }
  }
}
</script>

<style scoped>

</style>
