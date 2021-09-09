<template>
    <div class="hold-exhibitions" id="hold-exhibitions">
        <div class="line"></div>
        <h2 class="hightlights-title" >我要办展</h2>
        <div class="hold-exhibitions-content">
            <div class="hold-exhibitions-left">
                <h2>艺术展被赋予了多种表达形式,文化艺术品在给人以美的享受的同时，也宣扬着文化艺术的精神</h2>
                <div class="exhibitions-left-type">
                    <a href="javacript:void(0);" class="type-item">摄影展</a>
                    <a href="javacript:void(0);" class="type-item">美术展</a>
                    <a href="javacript:void(0);" class="type-item">插画展</a>
                    <a href="javacript:void(0);" class="type-item">雕塑展</a>
                    <a href="javacript:void(0);" class="type-item">成都</a>
                    <a href="javacript:void(0);" class="type-item">上海</a>
                    <a href="javacript:void(0);" class="type-item">北京</a>
                </div>
                <div class="exhibitions-left-target">
                    <a class="title" @click="$router.push('/holdexhibitions')">我要办展</a>
                    <img src="../assets/right.png" alt="">
                </div>
            </div>
            <div class="hold-exhibitions-right">
                <div class="exhibitions-right-img">
                    <img src="../assets/shizhongkongjian.jpg" alt="">
                </div>
                <p class="text1">进入这个空间时，他不是物理上给你失重的感觉。这里是通过光影艺术给你营造失重的感觉，你会被整个光影带入情境，很神奇</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HoldExhibitions"
    }
</script>

<style lang="scss" scoped>
    .hold-exhibitions {
        width: 1136px;
        height: 100%;
        margin: 0 auto;
        .line {
            height: 1px;
            width: 100%;
            background-color: #eaeaea;
        }
        .hightlights-title {
            margin-top: 42px;
            margin-bottom: 32px;
            line-height: 55px;
            font-size: 38px;
            font-weight: normal;
        }
        .hold-exhibitions-content {
            height: 400px;
            /*background-color: red;*/
            display: flex;
            justify-content: space-around;
            .hold-exhibitions-left {
                width: 40%;
                position: relative;
                h2 {
                    margin-top: 16px;
                    font-size: 26px;
                    line-height: 44px;
                    text-align: left;
                    font-weight: normal;
                }
                .exhibitions-left-type {
                    margin-top: 36px;
                    display: flex;
                    flex-wrap: wrap;
                    .type-item {
                        font-size: 14px;
                        border: 1px solid #e2e1dd;
                        background: #f8f7f5;
                        padding: 6px 20px;
                        margin: 0 10px 16px;
                        transition: all 1s;
                    }
                    .type-item:hover {
                        background-color: #b36c20;
                    }
                    a:-webkit-any-link {
                        color: #0d1215;
                    }
                }
                .exhibitions-left-target {
                    width: 215px;
                    height: 49px;
                    line-height: 49px;
                    background-color: #0064b5;
                    position: absolute;
                    bottom: 20px;
                    left: 10px;
                    .title {
                        color: #fff;
                        margin-left: -40px;
                        font-size: 18px;
                    }
                    img {
                        position: absolute;
                        width: 26px;
                        height: 26px;
                        top: 12px;
                        right: 50px;
                    }
                }
            }
            .hold-exhibitions-right {
                width: 50%;
                background-color: #f8f7f5;
                .exhibitions-right-img {
                    width: 350px;
                    margin: 0 auto;
                }
                .text1 {
                    text-align: left;
                    margin: 50px 30px 0px 20px;
                    letter-spacing: 0.03em;
                }
            }
        }
    }
</style>