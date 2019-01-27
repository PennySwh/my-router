//一级路由
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import About from './components/about/About.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。

//导出路由配置，path：路径（动态路径参数：以冒号开头；如果想匹配任意路径，我们可以使用通配符 (*)，含有通配符的路由应该放在最后；）；name：命名；component(s)：跳转到的内容页
export const routes = [
    {path:'/',name:'homeLink',components:{
        default:Home,
        'orderingGuide':OrderingGuide,
        'delivery':Delivery,
        'history':History
    }},
    {path:'/menu',name:'menuLink',component:Menu},
    {path:'/admin',name:'adminLink',component:Admin},
    {path:'/about',name:'aboutLink',redirect:'/about/contact',component:About,children:[//此处children里面就是二级子路由
        {path:'/about/contact',name:'contactLink',redirect:'/personname',component:Contact,children:[//此处children里面就是三级子路由
          {path:'/phone',name:'phoneNumber',component:Phone},
          //动态路径参数：以冒号开头；
          {path:'/:pName',name:'personName',component:PersonName},
        ]},
        {path:'/delivery',name:'deliveryLink',component:Delivery},
        {path:'/history',name:'historyLink',component:History},
        {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
    ]},
    {path:'/login',name:'loginLink',component:Login},
    {path:'/register',name:'registerLink',component:Register},
    // 重定向和别名
    // “重定向”的意思是，当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b
    // { path: '/a', redirect: '/b' }
    // “别名”的意思是，a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。
    // { path: '/a', component: A, alias: '/b' }
    // 匹配默认路径
    {path:'*',redirect:'/'}
]