import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Flutterwave from  'flutterwave-vue-v3'
import './index.css'
// createApp(App).use(Flutterwave, { publicKey: 'FLWPUBK-365f64026cd523477818faf444f45c99-X', secretKey: 'FLWSECK-b27727cdcda6a5de767cfe2d13a1ff1d-X' } ).use(store).use(router).mount('#app')
createApp(App).use(Flutterwave, { publicKey: 'FLWPUBK_TEST-49d94a2906e1c29b1da536aea0bdc59c-X', secretKey: 'FLWSECK_TEST-37b1b3d4e0abc0bd65f6af6292686898-X' } ).use(store).use(router).mount('#app')