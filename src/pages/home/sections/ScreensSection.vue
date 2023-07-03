<template>
  <section id="screens">
    <h2 class="text-center text-4xl sm:text-7xl font-clashSemiBold">App Screens</h2>
    <Carousel v-bind="settings" :breakpoints="breakpoints" class="mt-10 lg:mt-32">
      <Slide v-for="image in images" :key="image.alt" class="slide">
        <div class="carousel__item">
          <img :src="image.img" :alt="image.alt" />
        </div>
      </Slide>
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
    })
    const breakpoints = ref({
      576: {
        itemsToShow: 2.1,
        snapAlign: 'center'
      },
      768: {
        itemsToShow: 2.5,
        snapAlign: 'center'
      },
      1024: {
        itemsToShow: 5,
        snapAlign: 'center'
      },
      1440: {
        itemsToShow: 6,
        snapAlign: 'start'
      }
    })
    // const images = ref([
    //   { img: './src/assets/images/slider/1.svg', alt: 'Slide' },
    //   { img: './src/assets/images/slider/2.svg', alt: 'Slide' },
    //   { img: './src/assets/images/slider/3.svg', alt: 'Slide' },
    //   { img: './src/assets/images/slider/4.svg', alt: 'Slide' },
    //   { img: './src/assets/images/slider/5.svg', alt: 'Slide' },
    //   { img: './src/assets/images/slider/6.svg', alt: 'Slide' },
    //   { img: './src/assets/images/slider/7.svg', alt: 'Slide' }
    // ])

    // For netlify
    const images = ref([
      { img: '/assets/1.svg', alt: 'Slide' },
      { img: '/assets/2.svg', alt: 'Slide' },
      { img: '/assets/3.svg', alt: 'Slide' },
      { img: '/assets/4.svg', alt: 'Slide' },
      { img: '/assets/5.svg', alt: 'Slide' },
      { img: '/assets/6.svg', alt: 'Slide' },
      { img: '/assets/7.svg', alt: 'Slide' }
    ])

    onMounted(() => {
      const carouselViewport = document.querySelector('.carousel__viewport')
      carouselViewport.style.overflow = 'unset'
    })

    return { images, settings, breakpoints }
  }
})
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/sections/_screensSection.scss';
</style>
