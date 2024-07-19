import { createApp } from 'vue'
import './index.css'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import router from "./router";
createApp(App)
    .use(PrimeVue, {
        theme: {
            preset: Aura,
            options: {
                cssLayer: false
            }
        }
    })
    .use(router)
    .mount('#app');