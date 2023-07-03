<template>
  <Header>
    <teleport to="body">
      <div class="home-background"></div>
    </teleport>
    <div class="container header">
      <div class="flex flex-col items-center justify-center">
        <div class="intro">
          <h1 class="font-clashMedium text-xl xl:text-8xl lg:text-7xl md:text-5xl sm:text-3xl">
            Welcome to <span class="text-blueColor">EDUcash</span>, <br />
            manage your installments
          </h1>
        </div>
        <div class="phones my-10 px-2 lg:my-32 md:my-10 sm:my-10">
          <img
            src="../../assets/images/header/phones.png"
            class="w-11/12 mx-auto sm:w-full"
            alt="Phones"
          />
        </div>
      </div>
    </div>
  </Header>
  <AboutSection></AboutSection>
  <ScreensSection></ScreensSection>
  <DownloadSection></DownloadSection>
  <HowItWoksSection></HowItWoksSection>
</template>

<script>
import Header from '../../components/header/Header.vue'
import AboutSection from './sections/AboutSection.vue'
import ScreensSection from './sections/ScreensSection.vue'
import DownloadSection from './sections/DownloadSection.vue'
import HowItWoksSection from './sections/HowItWoksSection.vue'

export default {
  components: { Header, AboutSection, ScreensSection, DownloadSection, HowItWoksSection }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/pages/_home.scss';
</style>
