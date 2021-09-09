<template>
    <div class="home-banner">
        <div class="banner-bgc">
            <div class="banner-panel">
                <div class="banner-panel_inner">
                    <div class="banner-content">
                        <h2>Discover art</h2>
                        <h4>Learn about the lives of artists and the stories behind their work</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style lang="scss" scoped>
    .home-banner {
        height: 290px;
        width: 100%;
        .banner-bgc {
            height: 100%;
            background-image: url("../assets/banner.jpg");
            padding-top: 16px;
            .banner-panel {
                width: 1136px;
                height: 242px;
                /*background-color: red;*/
                margin: 0 auto;
                padding: 16px 0;
                background-color: rgba(255,255,255,0.8);
                color: #232526;
                .banner-panel_inner {
                    h2 {
                        font-size: 58px;
                        line-height: 74px;
                        text-transform: uppercase;  //属性控制文本的大小写
                        letter-spacing: 0.11em;
                        font-weight: normal;
                        margin: 32px 0;
                    }
                    h4 {
                        width: 720px;
                        font-size: 28px;
                        line-height: 36px;
                        text-transform: none;
                        letter-spacing: 0.01em;
                        font-weight: normal;
                        margin: 32px auto;
                    }
                }
            }
        }
    }
</style>