import { createApp } from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import store from './store'

createApp(App)
.use(store)
.mount('#app')
=======
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
>>>>>>> 9b9b1e872df4993cdf7ae0aaf0eb486842c23f83
