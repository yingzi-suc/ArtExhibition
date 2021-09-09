<template>
    <div class="banner">
        <el-carousel :interval="4000" arrow="always">
            <el-carousel-item >
                <img src="../assets/banner1.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item >
                <img src="../assets/banner2.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item >
                <img src="../assets/banner.jpg" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped>
    .banner {
        width: 1136px;
        margin: 0 auto;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>