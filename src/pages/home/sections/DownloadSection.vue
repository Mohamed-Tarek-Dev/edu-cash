<template>
  <section id="download" class="mt-32 lg:pt-32">
    <div class="container">
      <div class="flex flex-col-reverse lg:flex-row lg:gap-10 xl:gap-0">
        <div class="phone-img flex px-5 mx-auto lg:w-1/2">
          <img src="../../../assets/images/download/iPhone-14-Pro.png" alt="Phone" />
        </div>
        <div class="app-info text-center lg:w-1/2 lg:flex lg:flex-col lg:gap-5 lg:justify-center">
          <h2 class="text-4xl font-clashSemiBold sm:text-7xl lg:text-left">
            Download The Application
          </h2>
          <p
            class="text-base text-paraColor font-clashExtraLight my-5 px-3 lg:text-left lg:my-0 lg:px-0 lg:text-xl"
          >
            simply click the download button and wait for the application to download and install on
            your device. Before downloading the application, take a few moments to read the app
            description, reviews, and ratings. This can give you an idea of what to expect from the
            application.
          </p>
          <div
            class="stores flex flex-col items-center gap-3 justify-start px-2 mb-7 lg:flex-row lg:gap-5 lg:mb-0 lg:mt-5 lg:px-0"
          >
            <a href="#"
              ><img src="../../../assets/images/download/logo-appstore.svg" alt="AppStore"
            /></a>
            <a href="#"
              ><img src="../../../assets/images/download/logo-playstore.svg" alt="PlayStore"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/sections/_downloadSection.scss';
</style>
