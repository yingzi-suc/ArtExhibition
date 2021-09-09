<template>
    <div class="artcollection" id="art-in-the-collection">
        <div class="line"></div>
        <h2 class="hightlights-title" >收藏中的艺术</h2>
        <div class="collection-content">
            <p class="text1">艺术是花，美丽随处可见</p>
            <h2 class="text2">Art In The Collections</h2>
            <p class="text3">ART IS A SONG, INTOXICATING</p>
            <p class="text4">ART IS A SONG, INTOXICATING</p>
            <ul class="collection-content-item">
                <li class="collection-content-img">
                    <img src="../assets/2.png" alt="">
                </li>
                <li class="collection-content-img">
                    <img src="../assets/3.png" alt="">
                </li>
                <li class="collection-content-img">
                    <img src="../assets/4.png" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArtCollection"
    }
</script>

<style lang="scss" scoped>
    .artcollection {
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
        .collection-content {
            height: 600px;
            position: relative;
            background-image: url("../assets/collection-bg.jpg");
            .text1, .text2,.text3,.text4 {
                position: absolute;
            }
            .text1 {
                top: 24px;
                left: 58px;
            }
            .text2 {
                top: 100px;
                left: 104px;
                font-size: 38px;
                font-weight: 500;
            }
            .text3 {
                bottom: 70px;
                left: 58px;
                font-size: 15px;
            }
            .text4 {
                bottom: 70px;
                right: 0;
                font-size: 15px;
            }
            .collection-content-item {
                width: 938px;
                height: 260px;
                position: absolute;
                top: 184px;
                left: 100px;
                display: flex;
                justify-content: space-between;
                .collection-content-img {
                    width: 200px;
                    height: 260px;
                    background-color: #017eff;
                    img {
                        height: 260px;
                    }
                }
            }

        }
    }
</style>