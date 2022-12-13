import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/base.css'
import App from './App.vue'
import router from './router'
import './router/permission'
import FontAwesomeIcon from './common/fontAwesome'
import { vThrottle } from './common/directive'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.directive('throttle', vThrottle)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
