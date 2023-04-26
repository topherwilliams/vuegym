import { createApp } from 'vue';
import App from './App.vue'
import router from './router.js';
import VCalendar from 'v-calendar';
import BaseButton from './components/ui/BaseButton.vue';
import Store from './store/index.js';
import SpinnerComponent from './components/ui/SpinnerComponent.vue'

const app = createApp(App);
app.use(router);
app.use(VCalendar, {});
app.component('base-button', BaseButton);
app.component('base-spinner', SpinnerComponent);
app.use(Store);

app.mount('#app')
