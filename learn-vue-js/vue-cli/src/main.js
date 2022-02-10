import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios';
// import AxiosPlugin from 'vue-axios-cors';

// Vue.use(axios);
// Vue.use(AxiosPlugin);

// axios.defaults.headers.common['Context-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el: '#app',
//   render: h => h(App),
// });