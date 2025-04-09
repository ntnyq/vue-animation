import 'animate.css/animate.css'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './style.css'
import App from '@/App.vue'
import { router } from '@/router'

const app = createApp(App)

app.use(router)
app.mount('#app')
