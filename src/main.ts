import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { vuetify } from '../vuetify.ts'

import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)

app.use(createPinia())

app.use(vuetify)
app.use(router)

app.mount('#app')
