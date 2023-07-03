<template>
  <Navbar></Navbar>
  <router-view v-slot="slotProps">
    <transition name="route" mod="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <Footer></Footer>
</template>

<script>
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'

export default {
  components: { Navbar, Footer }
}
</script>

<style>
.route-enter-from {
  opacity: 0;
  transform: scale(0);
}
.route-leave-to {
  opacity: 0;
  transform: scale(1);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
