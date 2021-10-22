<template>
  <div class="my-28" id="tradeanalysis">
    <p
      class="text-3xl font-bold pb-10 text-center"
    >Check out our trade analysis and how they played out</p>
    <div class="px-6 sm:px-0 max-w-full sm:max-w-5xl mx-auto w-full">
      <swiper
        :slides-per-view="2"
        :space-between="30"
        :autoplay="true"
        :breakpoints="swiperOptions.breakpoints"
      >
        <swiper-slide v-for="n in 9" :key="n">
          <div class="h-96">
            <img
              :src="require(`@/assets/images/BandA/TRADE ${n}.jpg`)"
              class="w-full h-full"
              :alt="n"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/swiper.scss"
SwiperCore.use([Autoplay]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperOptions = {
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
      }
    }
    return {
      swiperOptions
    }
  }
}
</script>

<style>
</style>