import Vue from 'vue';
import App from './App.vue';
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' 

Vue.use(Vuesax)
new Vue(App).$mount('#app');
