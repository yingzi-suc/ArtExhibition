<template>
        <div class="info-discuss-pinglun">
            <ul>
                <li v-for="(item,index) in pinglun" :key="index">
                    <div>
<!--                        <i class="iconfont icon-yonghu"></i>-->
                        <span class="username">用户{{item.username}}： </span>
                        <span class="pinglun">{{item.content}}</span>
                        <span class="time">{{item.time}}</span>
                    </div>
                </li>
            </ul>
        </div>
</template>

<script>
    export default {
        name: "Pinglun",
        props: {
            pinglun: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        // mounted: {
        //    ddd() {
        //        console.log(pinglun)
        //    }
        // }
    }
</script>

<style lang="scss" scoped>
    .info-discuss-pinglun {
        width: 50%;
        margin-left: 116px;
        text-align: left;
        color: #737373;
        .username  {
            color: #0d1215;
        }
        .time {
            margin-left: 40px;
        }
    }
</style>