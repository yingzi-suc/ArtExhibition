<template>
    <div class="listsart">
        <div class="listsart-content">
            <!-- 一个-->
            <div class="listsart-content-item" v-for="(item,index) in artlist" :key="index">
                <div class="content-item-img">
                    <img :src="item.img" alt="">
                </div>
                <div class="content-item-title">
                    <span class="type">{{item.exhibitionType}}</span>
                    <h2 class="title">{{item.title}}</h2>
                </div>
                <div class="content-item-location">
                    <span class="a">地点: </span>
                    <span>{{item.location}}</span>
                </div>
                <div class="content-item-time">
                    <span class="a">日期: </span>
                    <span>{{item.extension}}</span>
                </div>
                <div class="content-item-detail" @click="goToDetail(item._id)"><a href="">详情</a></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ListsArt",
        props: {
            artlist:[]
        },
        data() {
            return {
            }
        },
        methods: {
            //得到每一个详情的iid，实现跳转
            goToDetail(iid) {
                // console.log(iid)
                // this.$router.push({path: '/detail',query: {iid}})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .listsart {
        width: 1136px;
        margin: 30px auto 0;
        .listsart-content {
            display: flex;
            flex-wrap: wrap;
            justify-content: left;
            .listsart-content-item {
                height: 420px;
                width: 30%;
                padding: 12px;
                background-color: #f8f7f5;
                position: relative;
                margin-bottom: 20px;
                margin-right: 13px;
                .content-item-img {
                    width: 100%;
                    height: 300px;
                    overflow: hidden;
                }
                .content-item-title {
                    line-height: 40px;
                    display: flex;
                    margin-bottom: 10px;
                    .type {
                        width: 55px;
                        height: 23px;
                        line-height: 23px;
                        background-color: #e0e0e0;
                        padding: 0 6px;
                        font-size: 12px;
                        border-radius: 2px;
                        margin: auto 0;
                    }
                    .title {
                        font-size: 18px;
                        margin-left: 10px;
                        letter-spacing: 3px;
                    }
                }
                .content-item-location, .content-item-time{
                    display: flex;
                    font-size: 12px;
                    letter-spacing: 1px;
                    .a {
                        margin-right: 6px;
                        margin-bottom: 6px;
                    }
                }
                .content-item-detail {
                    width: 90px;
                    height: 30px;
                    line-height: 30px;
                    background-color: #ff9000;
                    border-radius: 30px;
                    color: #ffffff;
                    position: absolute;
                    right: 20px;
                    bottom: 20px;
                }
            }
        }
    }
    .content-item-img:hover img {
        transform: scale(1.2);
        transition: all 0.6s;
    }
</style>