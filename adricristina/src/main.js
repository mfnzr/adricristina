import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Line from './components/Line.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.component('Line', Line)