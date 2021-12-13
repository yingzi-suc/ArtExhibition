<template>
    <div class="communication">
<!--        搜索和发表区-->
        <div class="topsearch">
            <el-form :inline="true" :model="topSearch" class="demo-form-inline" label-width="400px">
                <el-form-item >
                    <el-input v-model="topSearch.content" placeholder="请输入查询内容" style="width: 500px"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="searchClick">搜索</el-button>
                    <el-button type="primary" @click="myPublic">我要发表</el-button>
                </el-form-item>
            </el-form>
<!--            发表-->
            <public-dialog :dialogPublicVisible = 'dialogPublicVisible' @publicClick="publicClick" @cancelPublic="cancelPublic"/>
        </div>
<!--        讨论区-->
        <div class="discuss">
            <div class="discuss-n">
                <ul class="info">
                    <li class="info-discuss" v-for="(item,index) in discuss" :key="index">
                        <div class="info-discuss-top">
<!--                            <div class="left"><div class="left-id">{{item.id}}</div></div>-->
                            <div class="center">
                                <div class="info-username"><i class="iconfont icon-yonghu" style="color: #9acd32"></i>{{item.username}}</div>
                                <div class="info-content">{{item.content}}</div>
                                <div class="info-img">
                                    <ul class="info-img-lists">
                                        <li class="info-img-item"  v-for="(img,index) in item.img" :key="index">
                                            <img :src="img" alt="">
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="right">
                                <span class="dianzan" @click="dianzanClick(item.id,index)" :class="{dianzanStyle: item.isDianzan}">
                                    <i class="iconfont icon-a-dianzan1"></i>
                                    <span>{{item.dianzanNumber}}</span>
                                </span>
                                <span class="pinglun" ><i class="iconfont icon-pinglun"  @click="pinglunClick(index,item._id)"></i></span>
                                <span class="time">{{item.time}}</span>
                            </div>
                        </div>
                        <pinglun :pinglun="item.pinglun"/>
                        <pinglun-dialog :pinglunVisible="pinglunVisible" :pinglun="pinglun" @pinglunCancel="pinglunCancel" @pinglunDefine="pinglunDefine"/>
                    </li>
                </ul>
            </div>
        </div>
        <el-pagination
                layout="total,prev, pager, next"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="5"
                :total="total">
        </el-pagination>
    </div>
</template>

<script>
    import {communication,publicDialogg,publicDialogPinglun,publicDialogSearch,publicDialogDianzan} from 'network/art'
    import Pinglun from "./components/Pinglun";
    import PinglunDialog from "./components/PinglunDialog";
    import publicDialog from "./components/publicDialog";
    export default {
        name: "index",
        components: {
            Pinglun,
            PinglunDialog,
            publicDialog,
        },
        data() {
            return {
                discuss:[],
                pinglunVisible: false,
                topSearch: {
                    content: ''
                },
                dialogPublicVisible: false,
                filterData: [], //总的列表数据
                total: 0,  //页码总数
                currentPage:1, //显示当前页
                pinglun: {
                    content: '',
                    username:sessionStorage.getItem('user')
                },
                iid:0,
                pinglunIndex:0,
            };
        },
        created() {
            this.init()
        },
        methods: {
            init(){
                communication().then(res => {
                    this.filterData = res.data.data
                    this.total = this.filterData.length
                    this.discuss = this.filterData.slice(0,5)
                    this.discuss.forEach(item => {
                        //处理时间格式
                        item.time = this.dayjs(item.time).format("YYYY-MM-DD")
                        item.pinglun.forEach(res => {
                            res.time = this.dayjs(res.time).format("YYYY-MM-DD")
                        })
                    })
                    console.log(this.discuss,'discuss')
                })
            },
            //搜索讨论
            searchClick(){
                publicDialogSearch({content:this.topSearch.content}).then(res => {
                    this.topSearch.content = ''
                    this.filterData = res.data.data
                    this.total = this.filterData.length
                    this.discuss = this.filterData.slice(0,5)
                    this.discuss.forEach(item => {
                        //处理时间格式
                        item.time = this.dayjs(item.time).format("YYYY-MM-DD")
                        item.pinglun.forEach(res => {
                            res.time = this.dayjs(res.time).format("YYYY-MM-DD")
                        })
                    })
                })
            },

            //收藏 点击颜色变化
            dianzanClick(id,index) {
                if(id === this.discuss[index].id) {
                    if(!this.discuss[index].isDianzan) {
                        this.discuss[index].isDianzan = true
                        this.discuss[index].dianzanNumber ++
                    } else if(this.discuss[index].isDianzan) {
                        this.discuss[index].isDianzan = false
                        this.discuss[index].dianzanNumber --
                    }
                    // console.log(this.discuss[index].isDianzan);
                    // console.log(this.discuss[index].dianzanNumber);
                    const params = {
                        _id: this.discuss[index]._id,
                        isDianzan: this.discuss[index].isDianzan,
                        dianzanNumber: this.discuss[index].dianzanNumber
                    }
                    publicDialogDianzan(params).then(res => {
                        console.log(res);
                        let isDianzan = res.data.data[0].isDianzan
                        this.discuss[index].isDianzan = isDianzan
                    })
                }
            },
            //点击我要发表
            myPublic(){
                let user = sessionStorage.getItem('user')
                if(user) {
                    this.dialogPublicVisible = true
                } else {
                    this.$message({
                        type:'error',
                        message:'请登录后发表文章'
                    })
                }
                
            },
            //点击我要评论
            pinglunClick(index,id) {
                this.pinglunIndex = index
                this.iid = id
                // console.log(this.pinglunIndex)
                this.pinglunVisible = true

            },
            //点击发表讨论
            publicClick(params) {
                publicDialogg(params).then(res => {
                    this.$message({
                        type:'success',
                        message:'发表成功'
                    })
                    this.dialogPublicVisible = false
                })
                this.init()
            },

            pinglunCancel() {
                this.pinglunVisible = false
            },
            pinglunDefine(pinglun) {
                this.pinglunVisible = false
                 let user = sessionStorage.getItem('user')
                if(user) {
                     //新增的一个评论
                let onePinglun = pinglun
                // debugger
                //将评论放进数组里
                let ddd = this.discuss[this.pinglunIndex].pinglun
                ddd.push(onePinglun)

                const params = {
                    _id: this.iid,
                    pinglun: ddd
                }
                publicDialogPinglun(params).then(res => {
                    let pinglun = res.data.data[0].pinglun
                    pinglun.forEach(item => {
                        item.time = this.dayjs(item.time).format("YYYY-MM-DD")
                    })
                    this.discuss[this.pinglunIndex].pinglun = pinglun
                    this.pinglun = {
                        content: '',
                        username:sessionStorage.getItem('user')
                    }
                    this.$message({
                        type:'success',
                        message:'评论成功'
                    })

                })
                }
               else {
                     this.$message({
                        type:'error',
                        message:'请登录后发表评论'
                    })
                       this.pinglun = {
                        content: '',
                        username:sessionStorage.getItem('user')
                    }
               }


            },
            //取消发表
            cancelPublic(){
                this.dialogPublicVisible = false
            },
            //页码跳转，每页显示 9 条数据
            handleCurrentChange(val) {
                this.currentPage = val
                // 1页 val=1  0 - 8   （1*8 - 8, 1 * 9 ）
                // 2页 val=2  9 - 17   (2*8 - 8, 2 * 9)
                this.discuss = this.filterData.slice(val*5 - 5,[val * 5])
            },
        }
    }
</script>

<style lang="scss" scoped>
    .communication {
        width: 100%;
        margin: 0 auto;
        .topsearch {
            width: 750px;
            height: 40px;
            margin: 30px auto 10px;
            /*background-color: red;*/
        }
        .discuss {
            width: 100%;
            max-height: 1600px;
            overflow: hidden;
            background-image: url("./assets/bg2.jpg");
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
                        overflow: hidden;
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
                                    .info-img-lists {
                                        display: flex;
                                        flex-wrap: wrap;
                                        .info-img-item {
                                            width: 110px;
                                            height: 120px;
                                            margin-right: 10px;
                                            /*background-color: #b6d0a8;*/
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
    }
</style>