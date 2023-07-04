<template>
  <section id="screens">
    <h2 class="text-center text-4xl sm:text-7xl font-clashSemiBold">App Screens</h2>
    <Carousel v-bind="settings" :breakpoints="breakpoints" class="mt-10 lg:mt-32">
      <Slide v-for="image in images" :key="image.alt" class="slide">
        <div class="carousel__item">
          <img :src="getImageUrl(image.img)" :alt="image.alt" />
        </div>
      </Slide>

      <template #addons>
        <img src="../../../assets/images/slider/frame.png" alt="Frame" class="frame" />
      </template>
    </Carousel>
  </section>
</template>
<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import { ref, onMounted } from 'vue'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide
  },
  setup() {
    const settings = ref({
      itemsToShow: 1,
      snapAlign: 'center',
      wrapAround: true
      // autoplay: 5000
    })
    const breakpoints = ref({
      576: {
        itemsToShow: 1,
        snapAlign: 'center'
      },
      768: {
        itemsToShow: 3.5,
        snapAlign: 'center'
      },
      1024: {
        itemsToShow: 5,
        snapAlign: 'center'
      },
      1440: {
        itemsToShow: 6,
        snapAlign: 'center'
      }
    })

    const images = ref([
      { img: '1', alt: 'Slide' },
      { img: '2', alt: 'Slide' },
      { img: '3', alt: 'Slide' },
      { img: '4', alt: 'Slide' },
      { img: '5', alt: 'Slide' },
      { img: '6', alt: 'Slide' },
      { img: '7', alt: 'Slide' }
    ])

    onMounted(() => {
      const carouselViewport = document.querySelector('.carousel__viewport')
      carouselViewport.style.overflow = 'unset'
    })

    function getImageUrl(name) {
      return new URL(`../../../assets/images/slider/${name}.svg`, import.meta.url).href
    }

    return { images, settings, breakpoints, getImageUrl }
  }
})
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/sections/_screensSection.scss';
</style>
