<template>
  <div :class="`bg-hero-pattern-${bgNum}`" class="transition ease-linear duration-300 h-screen flex flex-col items-center text-white w-full bg-center bg-cover bg-no-repeat bg-black bg-blend-overlay bg-opacity-80">
    <Navbar />
    <swiper
      class="w-full h-full sm:h-5/6 z-20"
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true }"
      :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
      :autoplay="true"
      @slide-change="onSlideChange"
      :speed="500"
      :loop="true"
    >
      <div class="parallax-slider-navigation absolute top-1/2 z-40 inset-x-2 sm:inset-x-8 m-auto flex justify-between h-0">
        <div class="nav-indicator prevArrow">
          &blacktriangleleft;
        </div>
        <div class="nav-indicator nextArrow">
          &blacktriangleright;
        </div>
      </div>
      <swiper-slide :data-swiper-autoplay="10000" class="flex md:flex-row flex-col justify-center w-full items-center h-full">
        <div class="max-w-full h-1/2 sm:h-full sm:max-w-lg text-center sm:text-left flex flex-col items-center justify-end sm:justify-center pl-0 sm:pl-10">
          <p class="text-3xl md:text-5xl font-bold pb-3">
            WATCH, FOLLOW, COPY AND
            <span class="text-brand-red">PROFIT</span> TOGETHER
          </p>
          <p class="text-lg">Trade the market by following the signals given by our experts</p>
        </div>
        <div class="relative h-2/3 sm:h-full max-w-full sm:max-w-2xl">
          <img
            class="w-auto h-full"
            src="@/assets/images/carouselimages/person-1.png"
            alt="person-1"
          />
        </div>
      </swiper-slide>
      <swiper-slide :data-swiper-autoplay="10000" class="flex md:flex-row flex-col justify-center items-center">
        <div class="max-w-full h-2/4 sm:h-full sm:max-w-xl text-center sm:text-left flex flex-col sm:items-start items-center justify-end sm:justify-center pb-6 sm:pb-0 pl-0 sm:pl-6">
          <p
            class="text-2xl md:text-5xl font-bold pb-1"
          >TRADE THE MARKET LIKE A PRO WITH THE HELP OF EXPERTS</p>
          <p class="text-md sm:text-lg pb-2 sm:pb-6">Join our vip channel and get 3 - 4 signals a day</p>
          <button class="p-3 text-black rounded-md w-5/12 bg-white font-bold">
            <a href="/signals">JOIN NOW</a>
          </button>
        </div>
        <div class="relative h-2/4 sm:h-full sm:max-w-2xl max-w-full">
          <img
            class="w-auto h-full"
            src="@/assets/images/carouselimages/person-2.png"
            alt="person-2"
          />
        </div>
      </swiper-slide>
      <swiper-slide :data-swiper-autoplay="10000" class="flex md:flex-row flex-col justify-center items-center">
        <div class="max-w-full h-2/4 sm:h-full sm:max-w-lg text-center sm:text-left flex flex-col sm:items-start items-center justify-center sm:justify-center pl-0 sm:pl-8">
          <p class="text-3xl md:text-5xl font-bold pb-4">
            JOIN OUR
            <span class="text-brand-red">FREE</span> SIGNAL CHANNEL
          </p>
          <button class="p-3 text-black rounded-md w-5/12 font-bold bg-white">
            <a target="_blank" href="https://t.me/trailblazersinvesting">JOIN NOW</a>
          </button>
        </div>
        <div class="relative h-2/4 sm:h-full max-w-full sm:max-w-2xl">
          <img
            class="w-auto h-full"
            src="@/assets/images/carouselimages/person-3.png"
            alt="person-3"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
SwiperCore.use([Navigation, Autoplay]);
import Navbar from "./Navbar.vue";
import { ref } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';
export default {
  components: {
    Swiper,
    SwiperSlide,
    Navbar
  },
  setup() {
    const onSlideChange = () => {
      bgNum.value++
    };
    let bgNum = ref(1)
    watch(bgNum,(oldValue) => {
      if(oldValue === 1){
        onSlideChange()
      }else {
        bgNum.value = 1
      }
    })
    return {
      onSlideChange,
      bgNum
    }
  }
}
</script>

<style scoped>
.h-mid-screen {
  height: 90vh;
}
.nav-indicator {
  height: 40px;
  width: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #ff0008af;
  font-size: 30px;
  color: #ffffff;
  border-radius: 40px;
  cursor: pointer;
  position: relative;
  transform: translateY(-50%);
}
</style>