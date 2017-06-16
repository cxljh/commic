// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Header ,Button ,Swipe, SwipeItem ,Tabbar, Field ,TabItem,TabContainer,TabContainerItem,Cell ,Switch , Navbar,Lazyload } from 'mint-ui'
import 'mint-ui/lib/style.css'
import Jccomic from './jccomic'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import  '../static/iconfont/iconfont.css'


Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);
Vue.component(Switch.name, Switch);
Vue.component(Field.name, Field);
Vue.use(VueAxios, axios);
Vue.component(Navbar.name, Navbar);
Vue.use(Lazyload);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Jccomic/>',
  components: { Jccomic , Header ,Button ,Swipe, Field,SwipeItem ,Tabbar,TabItem,TabContainer, TabContainerItem,Cell,Switch, Navbar,Lazyload }
})
