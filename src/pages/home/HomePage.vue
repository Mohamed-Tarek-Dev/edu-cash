<template>
  <Header></Header>
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
// @import '../assets/scss/pages/_home.scss';
</style>
