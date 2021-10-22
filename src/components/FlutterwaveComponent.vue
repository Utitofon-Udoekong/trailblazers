<template>
    <div>
        <div class="flex flex-col sm:flex-row items-start sm:items-center sm:mr-8 mt-4">
            <p class="pr-4 text-md font-semibold">For Nigerians</p>
            <flutterwave-pay-button-vue
                :tx_ref="generateReference()"
                :amount="packagePrice * 501"
                currency="NGN"
                payment_options="card,ussd"
                redirect_url
                class="p-2 sm:p-4 bg-flutter-yellow text-black font-semibold rounded-md mt-2 sm:mt-6 w-full sm:w-auto"
                :meta="{ counsumer_id: counsumer_id, consumer_mac: consumer_mac }"
                :customizations="{
                    title: 'Trailblazers',
                    description: packageTitle,
                    logo: '@/assets/images/logo.png'
                }"
                :callback="makePaymentCallback"
                :onclose="closePaymentModal"
                :customer="{
                    name: 'Demo Customer  Name',
                    email: 'customer@mail.com',
                    phone_number: '0818450****'
                }"
            >Pay with Flutterwave</flutterwave-pay-button-vue>
        </div>

        <div class="flex flex-col sm:flex-row items-start sm:items-center sm:mr-8 mt-4">
            <p class="pr-4 text-md font-semibold">For Non Nigerians</p>
            <flutterwave-pay-button-vue
                :tx_ref="generateReference()"
                :amount="packagePrice"
                currency="USD"
                payment_options="card,ussd"
                redirect_url
                class="p-2 sm:p-4 bg-flutter-yellow text-black font-semibold rounded-md mt-2 sm:mt-6 w-full sm:w-auto"
                :meta="{ counsumer_id: counsumer_id, consumer_mac: consumer_mac }"
                :customizations="{
                    title: 'Trailblazers',
                    description: packageTitle,
                    logo: '@/assets/images/logo.png'
                }"
                :callback="makePaymentCallback"
                :onclose="closePaymentModal"
                :customer="{
                    name: 'Demo Customer  Name',
                    email: 'customer@mail.com',
                    phone_number: '0818450****'
                }"
            >Pay with Flutterwave</flutterwave-pay-button-vue>
        </div>
        <p class="text-md md:text-lg font-bold pt-8 flex">
            ACCESS CODE TO JOIN OUR VIP CHANNEL: {{ code }}
            <span
                class="ml-4 cursor-pointer"
                title="Copy to clipboard"
                @click="copyToClipboard(code)"
            >
                <Icon icon="clarity:copy-to-clipboard-line" color="#444" width="20" height="20" />
            </span>
        </p>
        <div v-if="code !== 'Will be gotten after payment'">
            <p>STEPS TO JOIN VIP</p>
            <p>1 COPY THE CODE SENT TO YOU</p>
            <p>2 CLICK ON THE BUTTON “LECTUM BOT”</p>
            <p>3 START THE BOT</p>
            <p>4 CLICK ON “ USE ACTIVATION CODE”</p>
            <p>5 PASTE THE CODE YOU COPIED</p>
        </div>
        <button
            v-if="code !== 'Will be gotten after payment'"
            class="block p-4 lectum-blue text-white font-semibold rounded-md mt-6 w-full sm:w-auto"
        >
            <a
                href="http://t.me/lectumbot?start=sub-4b89b8b9-5b27-4526-b952-f1d7050da7b0"
            >Chat with Lectum Bot</a>
        </button>
    </div>
</template>

<script>
import flutterwavePayButtonVue from 'flutterwave-vue-v3/src/lib-components/flutterwave-pay-button.vue'
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
import { Icon } from '@iconify/vue';
export default {
    components: { flutterwavePayButtonVue, Icon },
    setup() {
        const store = useStore()

        const generateReference = () => {
            let date = new Date()
            return date.getTime().toString();
        }
        const closePaymentModal = () => {
        }
        const makePaymentCallback = (response) => {
            console.log("callback", response)
            if (response.amount === 50) {
                store.dispatch('getOneMonthCodes');
                store.dispatch('updateOneMonthCodes')
            } else if (response.amount === 120) {
                store.dispatch('getThreeMonthsCodes');
                store.dispatch('updateThreeMonthsCodes')
            } else if (response.amount === 250) {
                store.dispatch('getSixMonthsCodes');
                store.dispatch('updateSixMonthsCodes')
            } else {
                store.dispatch('getTwelveMonthsCodes');
                store.dispatch('updateTwelveMonthsCodes')
            }
        }

        return {
            code: computed(() => store.state.code),
            generateReference,
            packageTitle: store.state.package.title,
            packagePrice: store.state.package.price,
            counsumer_id: Math.floor((Math.random() * 999) + 1000),
            consumer_mac: Math.random().toString(7).replace(/[^a-z]+/g, '').substr(0, 5),
            closePaymentModal,
            makePaymentCallback,
            copyToClipboard: (code) => navigator.clipboard.writeText(code)
        }
    }
}
</script>

<style>
.lectum-blue {
    background: #1c3547;
}
</style>