import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/bootstrap.min.css'
import '@/assets/bootstrap.bundle.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

import VueScrollTo from 'vue-scrollto'
import router from './router'

createApp(App).use(router).use(VueScrollTo, {
    duration: 1000, // Duración de la animación en milisegundos
    easing: 'ease-out'
     // Tipo de easing (puedes ajustar según tus preferencias)
  }).mount('#app')



