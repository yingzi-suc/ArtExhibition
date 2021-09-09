<template>
    <div class="footer">
        <div class="line"></div>
        <div class="content">
            <div class="text1">
                <a href="">全艺展首页  - </a>
                <a href="">关于我们  - </a>
                <a href="">新手指南  - </a>
                <a href="">广告服务  - </a>
                <a href="">展会合作  - </a>
                <a href="">法律声明  - </a>
                <a href="">招聘信息 </a>
            </div>
            <div class="text2">
                <a href="">全艺展</a>
                <a href="">川hhi12233333号</a>
            </div>
            <div class="text3">
                <a href="">全艺展_艺展_全艺展_展会信息，展会服务</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArtFooter"
    }
</script>

<style lang="scss" scoped>
    .footer {
        width: 1136px;
        height: 100%;
        margin: 0 auto;
        margin-top: 60px;
        margin-bottom: 30px;
       .line {
           height: 1px;
           width: 100%;
           background-color: #eaeaea;
           margin-bottom: 30px;
       }
        .content {
            font-size: 12px;
            a:-webkit-any-link {
                color: #0d1215;
            }
            .text1,.text2,.text3 {
                margin-bottom: 10px;
            }
            .text1 a,.text2 a,.text3 a {
                padding: 0 10px;
            }
        }

    }
</style>