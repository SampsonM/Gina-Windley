import {createApp} from 'vue'
import App from './App.vue'
import createAppRouter from './router'
import createAppStore from './store'
import VueLazyLoad from 'vue3-lazyload'
import './lib/slider.scss'

const app = createApp(App)

app.use(VueLazyLoad)
app.use(createAppStore())
app.use(createAppRouter())

app.mount('#app')
