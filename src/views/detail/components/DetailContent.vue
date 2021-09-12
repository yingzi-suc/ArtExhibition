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
                 <i class="iconfont icon-a-dianzan1" :class="{dianzanStyle: isDianzan}" @click="isDianzanClick"></i>
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
    import {detailPinglun} from 'network/art'
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
//
// 🟣 “成为安迪·沃霍尔”展览是传奇波普艺术家安迪·沃霍尔的艺术人生在中国最为全面的呈现<br/>
//
// 🟣 展览从匹兹堡安迪·沃霍尔美术馆的馆藏中精选出400件作品，其中包括首次于安迪·沃霍尔美术馆之外展出的摄影作品和文献物品，特别聚焦于安迪·沃霍尔身为摄影师和实验电影制作人的艺术实践。
// “成为安迪·沃霍尔”重新审视了与沃霍尔相关的大量文献资料与艺术遗产。
// 基于对沃霍尔人生和多元艺术实践最新的学术研究，通过对沃霍尔艺术生涯各阶段具有代表性和并不广为人知的作品的呈现，展览充分展现了沃霍尔多元跨界
// 实践和“复制”创作方式对视觉艺术发展的深刻影响。<br>
//
// 🟣 展出以五个章节展开，还特别设置了“波普工厂”互动体验区。展览通过绘画、照片、物品、电影、沃霍尔年轻时的文献物品，以及诸如斯蒂芬·肖
// 尔和戴维·麦凯布同时期拍摄的沃霍尔照片，对沃霍尔的人生和职业生涯展开了非线性的探索。<br>
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
        methods: {
            //点赞处理
            isDianzanClick() {
               if(this.isDianzan === false) {
                   this.isDianzan = true
                   this.detail.dianzan+=1
               } else {
                   this.isDianzan = false
                   this.detail.dianzan-=1
               }
            },
            //评论处理
            pinglunClick() {
                this.onePinglun.content = this.pinglun
                this.onePinglun.username = "小橘子"
                const ddd = this.detail.myPinglun //新增评论数据
                ddd.push(this.onePinglun)
                const params = {
                    _id:this.detail._id,
                    myPinglun: ddd
                }
                detailPinglun(params).then(res => {
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