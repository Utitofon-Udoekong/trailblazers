<template>
    <div class="my-28" id="testimonials">
        <p class="text-3xl font-bold pb-10 text-center">Our Clients Testimonials</p>
        <div class="px-6 sm:px-0 max-w-full sm:max-w-4xl mx-auto w-full">
            <swiper
                :slides-per-view="2"
                :space-between="80"
                :autoplay="true"
                :breakpoints="SwiperOptions.breakpoints"
                :loop="true"
            >
                <swiper-slide v-for="n in 5" :key="n">
                    <div class="h-100">
                        <img
                            :src="require(`@/assets/images/testimonies/T${n}.png`)"
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
        const SwiperOptions = {
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
            SwiperOptions
        }
    }
}
</script>

