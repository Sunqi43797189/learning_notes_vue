import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Antd);
Vue.use(VueAxios, axios);
Vue.prototype.$server = "http://111.229.3.18:8080";

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
