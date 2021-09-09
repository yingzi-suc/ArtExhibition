<template>
    <div class="detailcontent">
        <div class="line"></div>
        <div class="detailcontent-top"><h2>{{detail.title}}</h2></div>
        <div class="detailcontent-introduce">
<!--            <h4>展览介绍</h4>-->
            <p class="introduce-text" v-html="detail.content">
            </p>
            <div class="introduce-img">
                <img src="../assets/1.jpg" alt="" class="img-item">
                <img src="../assets/2.jpg" alt="" class="img-item">
                <img src="../assets/3.jpg" alt="" class="img-item">
                <img src="../assets/4.jpg" alt="" class="img-item">
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
            <span class="emit">编辑</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailContent",
        props:['detail'],
        data() {
            return {
                isDianzan: false,
                pinglun: '',
//                 detail: {
//                     content: `
//                   快来和🍬甜萌的糖果星人一起玩呀 <br/>-<br/>
//  澳洲艺术家 👩‍🎨Tanya Schultz，擅长使用糖粉、糖果🍬、塑料花等日常工艺材料创作令人身临其境的装置和艺术品。<br/>
// -<br/>
// “糖果乌托邦——Tanya Schultz 全球巡展上海站”是艺术家在中国乃至亚洲的首次大规模的亮相。<br/>
// -<br/>
//
//
// 听说甜食🍰让人心情愉悦，糖果乌托邦是一个甜甜的展，来这里遇见萌萌的糖果生物、糖粉山、棉花糖床……拯救你的不开心。<br/>-<br/>
//
// 展厅还设置了一个荧光房，带你发现糖果星球🌍的另一面<br/>
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
            isDianzanClick() {
               if(this.isDianzan === false) {
                   this.isDianzan = true
                   this.detail.dianzan+=1
               } else {
                   this.isDianzan = false
                   this.detail.dianzan-=1

               }
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
</style>