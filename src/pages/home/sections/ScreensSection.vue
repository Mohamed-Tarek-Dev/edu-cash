<template>
  <section id="screens">
    <div class="container">
      <h2 class="text-center text-4xl sm:text-7xl font-clashSemiBold">App Screens</h2>
      <swiper
        :slidesPerView="1"
        :centeredSlidesBounds="true"
        :spaceBetween="30"
        :initialSlide="0"
        :breakpoints="{
          '300': {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesOffsetAfter: -500
          },
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesOffsetAfter: 50
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesOffsetAfter: 400
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 30,
            initialSlide: 1,
            slidesOffsetAfter: 350
          },
          '1440': {
            slidesPerView: 5,
            spaceBetween: 30,
            initialSlide: 1,
            slidesOffsetAfter: 170
          }
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide><img src="../../../assets/images/slider/1.svg" alt="Slider" /></swiper-slide>
        <swiper-slide><img src="../../../assets/images/slider/2.svg" alt="Slider" /></swiper-slide>
        <swiper-slide><img src="../../../assets/images/slider/3.svg" alt="Slider" /></swiper-slide>
        <swiper-slide><img src="../../../assets/images/slider/4.svg" alt="Slider" /></swiper-slide>
        <swiper-slide><img src="../../../assets/images/slider/5.svg" alt="Slider" /></swiper-slide>
        <swiper-slide><img src="../../../assets/images/slider/6.svg" alt="Slider" /></swiper-slide>
        <swiper-slide><img src="../../../assets/images/slider/7.svg" alt="Slider" /></swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/sections/_screensSection.scss';
</style>
