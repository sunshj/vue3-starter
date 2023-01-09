import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import './assets/base.css'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import App from './App.vue'
import router from './router'
import './router/permission'
import FontAwesomeIcon from './common/fontAwesome'
import { vThrottle } from './common/directive'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('mavon-editor', mavonEditor)
app.directive('throttle', vThrottle)
app.use(createPinia())
app.use(router)

app.mount('#app')
