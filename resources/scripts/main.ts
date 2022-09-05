// Build something cool. <3
import { createApp } from 'vue';
Vue.component('texteditor', require('./components/TextEditor.vue').default);

createApp(App).mount("#app")
