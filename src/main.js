// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//路由使用的基本步骤
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import {routes} from './routes'

Vue.config.productionTip = false

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来，在这里我们就是从routes.js引用过来的

// 2.定义路由:看routes.js

// 3. 创建 router 实例，然后传 `routes` 配置，别的配置参数。
const router = new VueRouter({
  routes,// (缩写) 相当于 routes: routes
  mode:'history',//不配置mode会加“#”
  // 3.1 scrollBehavio：滚动行为
  // 使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。
  // vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。
  // 注意: 这个功能只在支持 history.pushState 的浏览器中可用。
  // 当创建一个 Router 实例，你可以提供一个 scrollBehavior 方法：
  scrollBehavior(to,from,savePosition){
    // scrollBehavior 方法接收 to 和 from 路由对象。
    // 第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
    // 对于所有路由导航，简单地让页面滚动到顶部。
    // 返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样：
    if(savePosition){
      return savePosition
    }else{
      return {x:0,y:0}
    }
  }
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
  el:'#app',
  router,
  render:h => h(App)
})
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
