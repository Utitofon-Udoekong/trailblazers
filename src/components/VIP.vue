<template>
  <div class="mb-10" id="vip">
    <p class="text-center text-3xl md:text-5xl font-bold pb-20">Subscribe to our VIP Packages</p>
    <div class="flex justify-center sm:flex-row flex-col px-6 sm:px-0">
        <div class="shadow-xl text-center mx-1.5 rounded-md relative overflow-hidden sm:w-auto w-full mb-8 sm:mb-0" v-for="(pack, i) in packages" :key="i">
            <p class="bg-black text-white py-3 text-md sm:text-lg font-semibold">{{pack.title}}</p>
            <p class="py-3 text-3xl sm:text-5xl font-bold shadow-md">${{pack.price}}</p>
            <div class="p-8">
                <ul class="text-sm sm:text-base">
                    <li>Live Telegram Alerts</li>
                    <li>4-7 Signals per day</li>
                    <li>Daily Chart Analysis</li>
                    <li>Live Support Chat</li>
                    <li>Upto 100RR</li>
                    <li>Money management tips</li>
                </ul>
            </div>
            <!-- absolute left-1/2 transform -translate-x-1/2 bottom-10 -->
            <button @click="addTocart(pack)" class="p-3 w-8/12 text-white bg-black mb-4 rounded-md ">Get Started</button>
        </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import router from '../router'
const packages = [
    {
        title: "1 Month",
        price: 50,
        link: "/signals"
    },
    {
        title: "3 Months",
        price: 120,
        link: "/signals"
    },
    {
        title: "6 Months",
        price: 250,
        link: "/signals"
    },
    {
        title: "12 Months",
        price: 400,
        link: "/signals"
    },
]
export default {
setup(){
    const store = useStore()
    const addTocart = (pack) => {
        store.commit("addTocart", pack);
        router.push({path: "/signals"});
    }
    return {
        packages,
        addTocart
    }
}
}
</script>

<style scoped>
li:not(:last-child){
    border-bottom: 1.5px solid rgb(44, 44, 44);
}
li{
    padding: 10px 0;
}

</style>