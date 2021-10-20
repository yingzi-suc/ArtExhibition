<template>
    <div class="detailcontent">
        <div class="line"></div>
        <div class="detailcontent-top"><h2>{{detail.title}}</h2></div>
        <div class="detailcontent-introduce">
<!--            <h4>展览介绍</h4>-->
            <p class="introduce-text" v-html="detail.content">
            </p>
            <div class="introduce-img">
                <img v-for="(item,index) in detail.img" :src="item" :key="index" alt="" class="img-item">
            </div>
        </div>
        <div class="introduce-other">
            <div>-</div>
            <div>✨展名：<span>{{detail.title}}</span></div>
            <div>📍地址：<span>{{detail.location}}</span></div>
            <div>💫展览展期： <span>{{detail.extension}}</span></div>
            <div>🌟营业时间： <span>{{detail.businessHours}}</span></div>
        </div>
        <div class="like-pinglun">
             <span class="dianzan" >
                 <i class="iconfont icon-a-dianzan1" :class="{dianzanStyle: detail.isDianzan}" @click="isDianzanClick"></i>
                 <span>{{detail.dianzan}}</span>
             </span>
           <el-input
                   v-model="pinglun"
                   placeholder="爱评论的人运气都不差~"
                   type="textarea"
                   size="mini" style="width: 340px; vertical-align: middle;" autosize>
           </el-input>
            <span class="emit" @click="pinglunClick">评论</span>
        </div>
        <div class="myPinglun">
            <ul>
                <li v-for="(item,index) in detail.myPinglun" :key="index">
                    <div>
                        <span class="username"><i class="iconfont icon-yonghu" style="color: #9acd32"></i>{{item.username}}：</span>
                        <span class="pinglun">{{item.content}}</span>
                        <span class="time">{{item.time}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {detailPinglun,detailGood} from 'network/art'
    export default {
        name: "DetailContent",
        props:['detail'],
        data() {
            return {
                isDianzan: false,
                myPinglunaaa:[],
                onePinglun:{},
                pinglun: '',
//                 detail: {
//                     content: `
//  ⚪️关于展览<br/>
// 波士顿美术馆联名地产大亨Monpoly先生推出的《云端的波士顿美术馆-地产大亨奇幻之旅》<br/>
//
// 在云端的一场视觉盛宴，画廊将分为遇见莫奈、GIVERNY花园、浪漫拍卖行、印象火车站、博物馆商城五个站点组成，还有悬挂在顶部的巨幕油画是展中的一大亮点。<br/>
//
// 由地产大亨带你游览云端的艺术画廊，在这个画廊里你能感受到莫奈后半生经典的画作系列，像是他精心打造的莲花池里头有着他后半生的故事，116层的落地窗外照射
// 进来光影使得原本在墙上的画作变得生动起来。<br/>
//             ⚪️关于作品<br/>
//
// 本展共有30+件作品,如《睡莲》《干草垛》<br/>
//
// 他的作品，让人们也对光着迷，喜爱光带来的冷暖。他留下的光也继续照耀着世界。
//
//                     `,
//                     img: [
//
//                     ],
//                     title: '未来动物🤍',
//                     location: '天府五街208号箐融汇1B栋108-109',
//                     extension: '2021/7/24——2021/10/18',
//                     businessHours: '13：30——21：30（20：00以后要收费)',
//                     dianzanNumber: '333'
//                 }
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init(){
                setTimeout(()=>{
                    this.isDianzan = this.detail.isDianzan
                },1000)

            },
            //点赞处理
            isDianzanClick() {
               if(!this.isDianzan) {
                   this.detail.dianzan++
               } else {
                   this.detail.dianzan--
               }
                this.isDianzan = !this.isDianzan
                this.detail.isDianzan =  this.isDianzan
                // console.log(this.isDianzan);
                // console.log(this.detail.dianzan);
                 const params = {
                    _id:this.detail._id,
                    dianzan: this.detail.dianzan,
                    isDianzan: this.isDianzan
                }
                detailGood(params).then(res=>{
                    let isDianzan = res.data.data[0].isDianzan
                    this.detail.isDianzan = isDianzan
                })
            },

            //评论处理
            pinglunClick() {
                //一条评论信息
                let onePinglun ={
                    content:this.pinglun,
                    username:sessionStorage.getItem('user')
                }
                //数据库里的以前的评论信息
                let ddd = this.detail.myPinglun
                ddd.push(onePinglun)

                const params = {
                    _id:this.detail._id,
                    myPinglun: ddd
                }
                detailPinglun(params).then(res => {
                    let pinglun = res.data.data[0].myPinglun
                    pinglun.forEach(item => {
                        item.time = this.dayjs(item.time).format("YYYY-MM-DD")
                    })
                    this.detail.myPinglun = pinglun
                    this.$message({
                        type:'success',
                        message:'评论成功'
                    })
                    this.pinglun = ''
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .detailcontent {
        width: 1136px;
        margin: 30px auto;
        text-align: left;
        .line {
            height: 1px;
            width: 100%;
            background-color: #eaeaea;
            margin-bottom: 30px;
            font-size: 14px;
            color: #333;
        }
        .detailcontent-top {
            height: 38px;
            line-height: 38px;
            border: 1px solid #d0d0d0;
            padding: 6px 4px 0;
            box-sizing: border-box;
            border-bottom: 2px solid #77a75e;
        }
        .detailcontent-introduce {
            position: relative;
            padding-left: 4px;
            margin-top: 30px;
            h4 {
                margin-bottom: 14px;
            }
            .introduce-text {
                line-height: 30px;
                height: 390px;
                width: 470px;
            }
            .introduce-img {
                width: 600px;
                height: 580px;
                position: absolute;
                top: 4px;
                right: 10px;
                display: flex;
                justify-content: space-evenly;
                flex-wrap: wrap;
                .img-item {
                    width: 40%;
                    height: 46%;
                    background-color: #dac9b5;
                }
            }
        }
        .introduce-other {
            line-height: 30px;
            height: 150px;
            span {
                margin-left: 10px;
            }
        }
        .like-pinglun {
            margin-top: 30px;
            height: 30px;
            .dianzan {
                margin-right: 60px;
                color: #909090;
                cursor: pointer;
            }
            .pinglun {
                width: 100px;
            }
            .pinglun {
                width: 100px;
            }
            .emit {
                color: #909090;
                font-size: 14px;
                margin-left: 20px;
                cursor: pointer;
            }

        }
    }
    .dianzanStyle {
        color: red;
        z-index: 999;
    }
    .myPinglun {
        width: 50%;
        margin-left: 110px;
        margin-top: 10px;
        text-align: left;
        color: #0d1215;
        font-size: 12px;
        .username  {
            color: #737373;
        }
        .time {
            color: #737373;
            font-size: 10px;
            margin-left: 40px;
        }
    }
</style>