<template>
    <div class="findarts">
        <classification-query @cityClick="cityClick"/>
        <lists-art :artlist="artlist"/>
        <el-pagination
                layout="total,prev, pager, next"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="9"
                :total="total">
        </el-pagination>
        <art-footer/>
        <back-top v-show="showBackTop" @backTop="backTop" class="backtop"/>
    </div>
</template>

<script>
    import ClassificationQuery from "./components/ClassificationQuery";
    import ListsArt from "./components/ListsArt";
    import ArtFooter from "../../components/common/footer/ArtFooter";
    import BackTop from "../../components/common/BackTop";

    import {homeHighlight,findCityArts} from 'network/art'
    export default {
        name: "index",
        components: {
            ClassificationQuery,
            ListsArt,
            ArtFooter,
            BackTop
        },
        data() {
            return {
                currentCity:'',
                showBackTop: false,
                filterData: [], //总的列表数据
                artlist: [], //每页渲染的列表数据
                exhibitionTypeName: ['摄影展','美术展','艺术展','插画展','雕塑展'],
                total: 0,  //页码总数
                currentPage:1 , //显示当前页
                thisCity: 0, //当前城市选择
            }
        },
        mounted() {
            window.addEventListener("scroll",this.handleScroll);
        },
        destroyed() {
            document.removeEventListener('scroll', this.handleScroll)
        },
        created() {
            this.getInfo()
        },
        methods: {
            //获取列表数据
            getInfo() {
                if(this.thisCity === 0) {
                    homeHighlight().then(res => {
                        const result = res.data.data
                        this.total = result.length
                        result.forEach(item => {
                            item.exhibitionType = this.exhibitionTypeName[item.exhibitionType-1]
                            item.businessHours = item.businessHours.join('-')
                            item.extension = item.extension.join('-')
                        })
                        this.filterData = result
                        this.artlist = this.filterData.slice(0,9)
                    })
                }
            },
            //根据城市获取列表数据
            cityClick(item) {
                switch (item) {
                    case "成都":
                        this.thisCity = 1;
                        break;
                    case "上海":
                        this.thisCity = 2;
                        break;
                    case "北京":
                        this.thisCity = 3;
                        break;
                    case "深圳":
                        this.thisCity = 4;
                        break;
                    case "福建":
                        this.thisCity = 5;
                        break;
                    case "江苏":
                        this.thisCity = 6;
                        break;
                    default:
                        this.thisCity = 0;
                        break;
                }
                // console.log( this.thisCity )
                if(this.thisCity && this.thisCity !== 0) {
                    findCityArts({city:this.thisCity}).then(res => {
                        const result = res.data.data
                        this.total = result.length
                        result.forEach(item => {
                            item.exhibitionType = this.exhibitionTypeName[item.exhibitionType-1]
                            item.businessHours = item.businessHours.join('-')
                            item.extension = item.extension.join('-')
                        })
                        this.filterData = result
                        this.artlist = this.filterData.slice(0,9)
                    })
                } else if(this.thisCity === 0) {
                    this.getInfo()
                }
            },
            //页码跳转，每页显示 9 条数据
            handleCurrentChange(val) {
                this.currentPage = val
                // 1页 val=1  0 - 8   （1*8 - 8, 1 * 9 ）
                // 2页 val=2  9 - 17   (2*8 - 8, 2 * 9)
                this.artlist = this.filterData.slice(val*9 - 9,[val * 9])
            },
            handleScroll() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                // console.log(scrollTop)
                if(scrollTop >= 600) {
                    this.showBackTop = true
                } else {
                    this.showBackTop = false
                }
            },
            backTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }
        }
    }
</script>

<style scoped>
    .findarts {
        width: 100%;
        margin: 0 auto;
    }
    .backtop {
        position: fixed;
        right: 70px;
        bottom: 65px;
    }
</style>