import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './routers/index.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"


const app = createApp(App)
    app.use(createPinia())
    app.use(router)
    app.mount('#app')
    AOS.init()
