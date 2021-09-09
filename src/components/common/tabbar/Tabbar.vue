<template>
    <div class="tabbar">
        <div class="tabbar-item">
            <div class="item">
                <router-link to="/">首页</router-link>
            </div>
            <div class="item">
                <router-link to="/artheadines">艺术头条</router-link>
            </div>
            <div class="item">
                <router-link to="/findarts">艺术展</router-link>
            </div>
            <div class="item">
                <router-link to="/holdexhibitions">我要办展</router-link>
            </div>
            <div class="item">
                <router-link to="/communication">交流中心</router-link>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style lang="scss" scoped>
   .tabbar {
       width: 100%;
       height: 49px;
       line-height: 49px;

       .tabbar-item {
           width: 1000px;
           display: flex;
           margin: 0 auto;
           font-weight: bold;
           font-size: 14px;
           justify-content: space-evenly;
           .item {
               width: 80px;
           }
       }

   }
</style>