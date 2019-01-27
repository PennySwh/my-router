<template>
    <div class="card text-dark bg-light mb-3">
        <div class="card-header">联系我们</div>
        <div class="card-body">
            <h4 class="card-title">联系我们</h4>
            <h4 class="card-text">273472805@qq.com</h4>
            <!-- 使用 router-link 组件来导航. -->
            <!-- 通过传入 `to` 属性指定链接. -->
            <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
            <router-link :to="{name:'phoneNumber'}">电话</router-link>
            <router-link :to="{name:'personName',params:{pName:'personName'}}">联系人</router-link>
            <!-- 除了使用 <router-link> 创建 a 标签来定义导航链接，我们还可以借助 router 的实例方法，通过编写代码来实现。 -->
            <!-- 
                const userId = '123'
                router.push({ name: 'user', params: { userId }}) // -> /user/123
                router.push({ path: `/user/${userId}` }) // -> /user/123
                // 如果提供了 path，params 会被忽略，这里的 params 不生效
                router.push({ path: '/user', params: { userId }}) // -> /user
             -->

            <!-- 路由出口 -->
            <!-- 路由匹配到的组件将渲染在这里 -->
            <transition :name="slide-left">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>
