<template>
  <footer id="footer" class="mt-20 p-10 lg:mt-32">
    <div class="container">
      <div class="flex flex-col gap-5 justify-between items-center lg:flex-row">
        <div class="copyright">&copy; 2023 All Rights Reserved</div>
        <div class="links flex gap-7">
          <a href="#download">Download</a>
          <a @click="navigateToSection('#screens')">Screens</a>
          <a @click="navigateToSection('#screens')">About</a>
          <router-link to="/terms">Terms & Conditions</router-link>
          <router-link to="/privacy">Privacy Policy</router-link>
        </div>
        <ul class="flex gap-3">
          <li>
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import { useSmoothScroll } from '../plugins/useSmoothScroll'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { scrollToSection } = useSmoothScroll()

    const navigateToSection = (sectionId) => {
      if (route.path !== '/') {
        router.push('/').then(() => {
          scrollToSection(sectionId)
          router.afterEach(() => {
            scrollToSection(sectionId)
          })
        })
      } else {
        scrollToSection(sectionId)
      }
    }

    return { navigateToSection }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/layout/_footer.scss';
</style>
