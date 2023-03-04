import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = "http://87.106.124.3:8000"

loadFonts()

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(store)
app.mount('#app')
