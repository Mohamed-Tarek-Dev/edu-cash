<template>
  <section id="about" class="mt-20">
    <div class="container">
      <div class="about text-center mx-auto mb-10 lg:text-left lg:px-5 xl:px-0 lg:mb-20">
        <h2 class="text-4xl font-clashSemiBold sm:text-6xl md:text-7xl">About EDUcash</h2>
        <p
          class="text-base font-clashExtraLight px-2 text-paraColor mt-5 w-full lg:text-xl lg:w-1/2"
        >
          We are pleased to offer you our installment payment plan, which allows you to make
          affordable payments for your institutional fees over a period of time that suits your
          financial needs.
        </p>
      </div>
      <div class="flex flex-col lg:flex-row lg:justify-between">
        <div class="flex flex-col-reverse items-center w-full lg:flex-col lg:items-start lg:w-1/2">
          <div class="img mt-10 px-2">
            <img src="../../../assets/images/about/pay-2.svg" alt="Pay" />
          </div>
          <div class="info text-center w-full lg:text-left lg:px-5 xl:px-0">
            <h3 class="text-4xl font-clashSemiBold text-blueColor sm:text-5xl lg:mt-24">
              Late Payment
            </h3>
            <div class="para px-2 mt-4">
              <p class="text-base font-clashExtraLight text-paraColor lg:text-xl">
                Paying bills on time is important to avoid late fees and additional charges. This is
                especially true for installment payments. When a payment is late,
              </p>
              <p class="text-base font-clashExtraLight text-paraColor mt-6 lg:text-xl">
                It can mean significant additional costs that make the overall expense much more
                than it was originally intended to be.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full items-center lg:items-end lg:w-1/2">
          <div class="info text-center mt-10 lg:text-left lg:mt-24 lg:w-11/12">
            <h3 class="text-4xl font-clashSemiBold sm:text-5xl text-blueColor">Late Payment</h3>
            <div class="para px-2 mt-4">
              <p class="text-base font-clashExtraLight text-paraColor lg:text-xl">
                Our application process is simple and easy to follow.
                <span class="text-blueColor font-clashRegular">First</span>, you need to complete
                our application by providing your personal and financial information.
              </p>
              <p class="text-base font-clashExtraLight text-paraColor mt-6 lg:text-xl">
                <span class="text-blueColor font-clashRegular">Once</span> we receive application,
                review it and get back to you within a soonest possible time with a decision.
              </p>
            </div>
          </div>
          <div class="img mt-10 px-2 lg:mt-24">
            <img src="../../../assets/images/about/pay-3.svg" alt="Pay" />
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
@import '../../../assets/scss/sections/_aboutSection.scss';
</style>
