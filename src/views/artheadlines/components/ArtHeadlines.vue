<template>
    <div class="headlines">
        <div class="line"></div>
        <div class="headlines-top"><h2>文化艺术头条</h2></div>
        <div class="headlines-content">
            <ul>
                <li class="headlines-item" v-for="(item,index) in this.artHeadlines" :key="index">
                    <div class="headlines-title">{{item.headlinesTitle}}</div>
                    <div class="headlines-text">{{item.headlinesText}}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArtHeadlines",
        props:['artHeadlines'],
        data() {
            return {
                // artHeadlines: [
                //     {
                //         headlinesTitle: '成都看展|成都当代影像馆',
                //         headlinesText: '终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,'
                //     },
                //     {
                //         headlinesTitle: '成都看展|成都当代影像馆',
                //         headlinesText: '终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,'
                //     },
                //     {
                //         headlinesTitle: '成都看展|成都当代影像馆',
                //         headlinesText: '终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,'
                //     },
                //     {
                //         headlinesTitle: '成都看展|成都当代影像馆',
                //         headlinesText: '终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,'
                //     }
                // ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .headlines {
        width: 1136px;
        margin: 30px auto;
        text-align: left;
        .line {
            height: 1px;
            width: 100%;
            background-color: #eaeaea;
            margin-bottom: 30px;
        }
        .headlines-top {
            height: 38px;
            line-height: 38px;
            border: 1px solid #d0d0d0;
            padding: 6px 4px 0;
            box-sizing: border-box;
            border-bottom: 2px solid #77a75e;
            h2 {
                width: 200px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                background-color: #b6d0a8;
                font-size: 20px;
            }
        }
        .headlines-content {
            border: 1px solid #d0d0d0;
            border-top: 1px solid transparent;
            padding: 20px;
            font-size: 14px;
            .headlines-item {
                border:  1px solid #d0d0d0;
                margin-bottom: 20px;
                padding: 10px;
                .headlines-title {
                    color: #0072ce;
                    font-weight: 600;
                    margin-bottom: 20px;
                }
                .headlines-text {
                    text-indent: 2em;
                    margin-bottom: 20px;
                }
            }
        }
    }
</style>