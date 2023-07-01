<template>
  <nav
    class="nav relative p-3 lg:p-6 lg:container mx-2 lg:mx-auto"
    :class="{ scrolled: isScrolled }"
  >
    <div class="container">
      <div class="flex items-center justify-between">
        <div class="pt-2 flex-1">
          <RouterLink to="/"><img src="../../assets/images/logo.svg" alt="" /></RouterLink>
        </div>
        <div class="links flex-1 hidden space-x-6 lg:flex justify-end">
          <a href="#screens" class="text-white font-clashRegular">Screens</a>
          <a href="#about" class="text-white font-clashRegular">About</a>
          <RouterLink to="/terms" class="text-white font-clashRegular"
            >Terms & Conditions</RouterLink
          >
          <RouterLink to="/privacy" class="text-white font-clashRegular">Privacy Center</RouterLink>
        </div>

        <button
          id="menu-btn"
          class="block hamburger mt-2 lg:mt-0 lg:hidden focus:outline-none"
          ref="button"
          @click="toggleClass"
        >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>

      <div class="lg:hidden">
        <div
          class="menu absolute flex flex-col items-center lg:hidden opacity-0 self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          ref="menu"
        >
          <a href="#" class="hover:text-darkGrayishBlue">Screens</a>
          <a href="#" class="hover:text-darkGrayishBlue">About</a>
          <RouterLink to="/terms" class="hover:text-darkGrayishBlue">Terms&Conditions</RouterLink>
          <RouterLink to="/privacy" class="hover:text-darkGrayishBlue">Privacy Center</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/layout/_navbar.scss';
</style>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
export default {
  setup() {
    const button = ref(null)
    const menu = ref(null)
    const isScrolled = ref(false)

    function toggleClass() {
      button.value.classList.toggle('open')
      menu.value.classList.toggle('opened')
      menu.value.classList.toggle('opacity-0')
      menu.value.classList.toggle('opacity-1')
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const scrollThreshold = 50

      isScrolled.value = scrollTop >= scrollThreshold
      if (isScrolled.value) {
        document.body.style.paddingTop = '92px'
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

    return {
      button,
      menu,
      isScrolled,
      toggleClass
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/layout/_navbar.scss';
</style>
