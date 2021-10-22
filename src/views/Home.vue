<template>
  <div class="home">
    <HeadSection/>
    <AboutSection/>
    <VIP/>
    <TradeAnalysis/>
    <RecommendedBroker/>
    <Testimonials/>
    <FAQ/>
    <Footer/>
  </div>
</template>

<script>
import HeadSection from '../components/HeadSection.vue';
import AboutSection from '../components/AboutSection.vue';
import VIP from '../components/VIP.vue';
import TradeAnalysis from '../components/TradeAnalysis.vue';
import RecommendedBroker from '../components/RecommendedBroker.vue';
import Testimonials from '../components/Testimonials.vue';
import FAQ from '../components/FAQ.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    HeadSection,
    AboutSection,
    VIP,
    TradeAnalysis,
    RecommendedBroker,
    Testimonials,
    FAQ,
    Footer
  },
  setup(){
   
  }
}
</script>
<style>
.h-100{
    height: 32rem;
}
@media screen and (max-width: 450px) {
  .h-100{
    height: 28rem;
  }
  
}
</style>