<template>
    <div class="discuss">
        <div class="discuss-n">
            <ul class="info">
                <li class="info-discuss" v-for="(item,index) in discuss" :key="index">
                    <div class="info-discuss-top">
                        <div class="left"><div class="left-id">{{item.id}}</div></div>
                        <div class="center">
                            <div class="info-username"><i class="iconfont icon-yonghu" style="color: #9acd32"></i>{{item.username}}</div>
                            <div class="info-content">{{item.content}}</div>
                            <div class="info-img">
                                <ul class="info-img-lists">
                                    <li class="info-img-item">
                                        <img src="" alt="">
                                    </li>
                                    <li class="info-img-item">
                                        <img src="" alt="">
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="right">
                        <span class="dianzan" @click="dianzanClick(item.id,index)" :class="{dianzanStyle: item.isDianzan}">
                            <i class="iconfont icon-a-dianzan1"></i>
                            <span>{{item.dianzanNumber}}</span>
                        </span>
                            <span class="pinglun" ><i class="iconfont icon-pinglun"  @click="pinglunVisible = true"></i></span>
                            <span class="time">{{item.time}}</span>
                        </div>
                    </div>
                    <pinglun :pinglun="item.pinglun"/>
                    <pinglun-dialog :pinglunVisible="pinglunVisible" @pinglunCancel="pinglunCancel" @pinglunDefine="pinglunDefine"/>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    import Pinglun from "./Pinglun";
    import PinglunDialog from "./PinglunDialog";
    export default {
        name: "Discuss",
        props:['discuss'],
        components: {
            Pinglun,
            PinglunDialog
        },
        data() {
            return {
                pinglunVisible: false
            }
        },
        methods: {
            dianzanClick(id,index) {
                //收藏 点击颜色变化
                if(id === this.discuss[index].id) {
                    if(this.discuss[index].isDianzanNum === 0) {
                        this.discuss[index].isDianzanNum = 1
                        this.discuss[index].isDianzan = true
                        this.discuss[index].dianzanNumber += 1
                    } else if(this.discuss[index].isDianzanNum === 1) {
                        this.discuss[index].isDianzanNum = 0
                        this.discuss[index].isDianzan = false
                        this.discuss[index].dianzanNumber -= 1
                    }
                }
                },
            //发表评论
            pinglunCancel() {
                this.pinglunVisible = false
            },
            pinglunDefine() {
                this.pinglunVisible = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .discuss {
        width: 100%;
        max-height: 1600px;
        overflow: hidden;
        background-image: url("../assets/bg2.jpg");
        background-position: 0 -80px;
        background-repeat: no-repeat;
        .discuss-n {
            width: 1136px;
            margin: 10px auto;
            padding: 20px;
            .info {
                width: 100%;
                .info-discuss {
                    width: 100%;
                    font-size: 12px;
                    margin-bottom: 30px;
                    .info-discuss-top {
                        margin-bottom: 10px;
                        display: flex;
                        .left {
                            width: 10%;
                            .left-id {
                                width: 50px;
                                height: 24px;
                                line-height: 24px;
                                border-radius: 4px;
                                align-items: center;
                                background-color: #e6e6e6;
                                border: 1px solid #c5c5c5;
                            }
                        }
                        .center {
                            width: 64%;
                            /*background-color: rosybrown;*/
                            text-align: left;
                            padding-right: 10px;
                            .info-username {
                                font-size: 16px;
                                /*font-weight: bold;*/
                                color: #82867b;
                                margin-bottom: 20px;
                            }
                            .info-content {
                                text-indent: 8px;
                                margin-bottom: 6px;
                            }
                            .info-img {
                                width: 100%;
                                height: 120px;
                                .info-img-lists {
                                    display: flex;
                                    flex-wrap: wrap;
                                    .info-img-item {
                                        width: 110px;
                                        height: 120px;
                                        margin: 2px;
                                        background-color: #b6d0a8;
                                    }
                                }
                            }
                        }
                        .right {
                            /*background-color: indianred;*/
                            margin-top: 40px;
                            .dianzan, .pinglun{
                                color: #909090;
                                margin-right: 14px;
                                cursor: pointer;
                            }
                            .dianzan:hover {
                                color: red;
                            }
                            .time {
                                margin-left: 50px;
                                color: #868686;
                            }
                        }
                    }
                }
            }
        }
    }
    .dianzanStyle i{
        color: red;
        z-index: 999;
    }
</style>