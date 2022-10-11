import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import main from './assets/css/main.css'

createApp(App).use(store).use(router).use(main).mount('#app')
