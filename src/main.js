import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = "https://asesoressalix.es"

loadFonts()

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(store)
app.mount('#app')
