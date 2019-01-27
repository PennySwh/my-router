<template>
    <div>
        <div class="row mb-5">
            <div class="col-4">
                <!-- 导航 -->
                <div class="list-group mb-5">
                    <!-- 使用 router-link 组件来导航. -->
                    <!-- 通过传入 `to` 属性指定链接. -->
                    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
                    <router-link tag="li" class="nav-link" :to="{name:'historyLink'}">
                        <a class="list-group-item list-group-item-action">历史订单</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name:'contactLink'}">
                        <a class="list-group-item list-group-item-action">联系我们</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name:'orderingGuideLink'}">
                        <a class="list-group-item list-group-item-action">点餐文档</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name:'deliveryLink'}">
                        <a class="list-group-item list-group-item-action">快递信息</a>
                    </router-link>
                </div>
            </div>
            <div class="col-8">
                <!-- 路由出口 -->
                <!-- 路由匹配到的组件将渲染在这里 -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
