<template>
    <div class="hightlights" id="highlights">
        <div class="line"></div>
        <h2 class="hightlights-title" >艺术展推荐</h2>
        <div class="hightlights-card">
            <ul class="hightlights-card-list">
                <li class="card--artwork"
                    v-for="(item,index) in highlight"
                    :key="index" @click="goToDetail(item._id)">
                    <div class="card--artwork-img">
                        <a href="">
                            <img src="" alt="">
                        </a>
                    </div>
                    <div class="card--artwork-center">
                        <div class="card--artwork-content">
                            <p class="location">{{item.lacation}}</p>
                            <h2 class="name">{{item.title}}</h2>
                            <p class="time">{{item.extension}}</p>
                        </div>
                        <div class="card--artwork-footer">
                            <div class="card_display">
                                <div class="card_display_type">{{item.exhibitionType}}</div>
                            </div>
                        </div>
                    </div>
                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {homeHighlight} from 'network/art'
    export default {
        name: "Highlights",
        data(){
            return {
                highlight: [],
                exhibitionTypeName: ['摄影展','美术展','艺术展','插画展','雕塑展']
            }
        },
        created() {
            this.getInfo()
        },
        methods: {
            goToDetail(iid) {
                this.$router.push({path: '/detail',query: {iid}})
            },
            getInfo() {
                homeHighlight().then(res => {
                    const result = res.data.data
                    result.forEach(item => {
                        item.exhibitionType = this.exhibitionTypeName[item.exhibitionType-1]
                    })
                    //按照点赞数排序
                    const result2 = result.sort((a,b)=>{
                        return b.dianzan - a.dianzan
                    })
                    console.log(result2)
                    this.highlight = result2.slice(0,6)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .hightlights {
        width: 1136px;
        height: 100%;
        margin: 60px auto 0;
        .line {
            height: 1px;
            width: 100%;
            background-color: #eaeaea;
        }
        .hightlights-title {
            padding-top: 32px;
            margin-top: 32px;
            margin-bottom: 32px;
            line-height: 55px;
            font-size: 38px;
            font-weight: normal;
        }
        .hightlights-card {
            clear: both;
            .hightlights-card-list {
                column-count: 3;
                -webkit-column-count: 3;
                -moz-column-count:3;
                -webkit-column-gap: 0;
                column-gap: 0;
                .card--artwork {
                    break-inside: avoid-column;
                    -webkit-column-break-inside: avoid;
                    float: none;
                    width: 100%;
                    box-sizing: border-box;
                    padding: 0 16px 32px 16px;
                    /*假充当图片*/
                    .card--artwork-img {
                       height: 206px;
                        background-color: #b6d0a8;
                        cursor: pointer;
                    }
                    .card--artwork-content {
                        text-align: left;
                        color: #313131;
                        padding: 16px 0 10px 0px;
                        margin-left: 16px;
                        border-bottom: 1px solid #d0d0d0;
                        .location, .time {
                            font-size: 17px;
                            line-height: 30px;
                        }
                        .name {
                            font-weight: normal;
                            font-size: 26px;
                            margin: 6px 0 ;

                        }
                    }
                    .card--artwork-footer {
                        text-align: left;
                        color: #313131;
                        padding: 12px 0 10px 0px;
                        margin-left: 16px;
                        font-size: 17px;
                        position: relative;
                        .card_display::before {
                            position: absolute;
                            content: " ";
                            width: 12px;
                            height: 12px;
                            border-radius: 16px;
                            top: 17px;
                            left: 0px;
                            overflow: hidden;
                            background: #9acd32;
                        }
                        .card_display_type {
                            text-indent: 20px;
                        }

                    }
                }
            }
        }
    }
    .card--artwork-center {
        background-color: #f8f7f5;
    }
</style>