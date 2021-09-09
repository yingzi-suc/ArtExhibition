<template>
    <div class="ZGHZ_meet-check">
        <div class="Cheng_shi">
            <span><b>城 市</b></span>
            <ul class="type">
                <el-radio-group v-model="city" @change="cityClick">
                    <el-radio-button v-for="(item,index) in chengshi" :key="index" :label="item" ></el-radio-button>
                </el-radio-group>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ClassificationQuery",
        data() {
            return {
                city:'全部',
                isShijian:'全部',
                chengshi: ['全部','成都','上海','北京','深圳','山东','浙江','江苏','福建','安徽'],
            }
        },
        mounted() {

        },
        methods: {
            cityClick(item){
                this.$emit("cityClick",item)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ZGHZ_meet-check {
        width: 1136px;
        margin: 30px auto 0;
        .Cheng_shi {
            display: flex;
            border-bottom: 1px solid #d3d3d3;
            padding: 20px 0;
        }
        span {
            padding: 10px 30px;
            color: #666666;
            width: 50px;
        }
    }
</style>
<style>
    .el-radio-button {
        margin-right: 20px;
    }
</style>