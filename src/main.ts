import { createApp } from 'vue'
import 'animate.css'
import '@/app.scss'
import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(router)
app.mount('#app')
