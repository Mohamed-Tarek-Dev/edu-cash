<template>
  <nav
    class="nav relative p-3 lg:p-6 lg:container mx-2 lg:mx-auto"
    :class="{ scrolled: isScrolled }"
    :ref="setNavbarRef"
  >
    <div class="container">
      <div class="flex items-center justify-between">
        <div class="pt-2 flex-1">
          <RouterLink to="/"><img src="../../assets/images/logo.svg" alt="" /></RouterLink>
        </div>
        <div class="links flex-1 hidden space-x-6 lg:flex justify-end">
          <a @click="navigateToSection('#screens')" class="text-white font-clashRegular">Screens</a>
          <a @click="navigateToSection('#about')" class="text-white font-clashRegular">About</a>
          <RouterLink to="/terms" class="text-white font-clashRegular"
            >Terms & Conditions</RouterLink
          >
          <RouterLink to="/privacy" class="text-white font-clashRegular">Privacy Center</RouterLink>
        </div>

        <button
          id="menu-btn"
          class="block hamburger mt-2 lg:mt-0 lg:hidden focus:outline-none"
          ref="button"
          @click="toggleMenu"
        >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>

      <Teleport to="body">
        <div class="lg:hidden relative z-20">
          <div class="back" ref="backdrop"></div>
          <div
            class="menu fixed top-12 left-6 right-6 flex flex-col items-center lg:hidden opacity-0 self-end py-8 mt-12 space-y-6 font-bold bg-white sm:w-auto sm:self-center drop-shadow-md"
            ref="menu"
          >
            <a @click="navigateToSection('#screens')" class="text-white font-clashSemiBold text-xl"
              >Screens</a
            >
            <a @click="navigateToSection('#about')" class="text-white font-clashSemiBold text-xl"
              >About</a
            >
            <RouterLink to="/terms" class="text-white font-clashSemiBold text-xl"
              >Terms & Conditions</RouterLink
            >
            <RouterLink to="/privacy" class="text-white font-clashSemiBold text-xl"
              >Privacy Center</RouterLink
            >
          </div>
        </div>
      </Teleport>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useSmoothScroll } from '../plugins/useSmoothScroll'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {
    const button = ref(null)
    const menu = ref(null)
    const backdrop = ref(null)
    const isScrolled = ref(false)
    const navbar = ref('')
    const route = useRoute()
    const router = useRouter()
    const { scrollToSection } = useSmoothScroll(router)

    function toggleMenu() {
      button.value.classList.toggle('open')
      backdrop.value.classList.toggle('backdrop')
      menu.value.classList.toggle('opened')
      menu.value.classList.toggle('opacity-0')
      menu.value.classList.toggle('opacity-1')
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const scrollThreshold = 50

      isScrolled.value = scrollTop >= scrollThreshold
      if (isScrolled.value) {
        document.body.style.paddingTop = `${navbar.value.offsetHeight}px`
      } else {
        document.body.style.paddingTop = '0'
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    const setNavbarRef = (el) => {
      navbar.value = el
    }

    const navigateToSection = (sectionId) => {
      if (route.path !== '/') {
        router.push('/').then(() => {
          scrollToSection(sectionId)
        })
      } else {
        scrollToSection(sectionId)
      }
    }

    return {
      button,
      menu,
      isScrolled,
      backdrop,
      toggleMenu,
      setNavbarRef,
      scrollToSection,
      navigateToSection
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/layout/_navbar.scss';
</style>
