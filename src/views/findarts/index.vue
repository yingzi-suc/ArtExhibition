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

    import {homeHighlight} from 'network/art'
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
                currentPage:1  //显示当前页
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
                homeHighlight().then(res => {
                    console.log(res)
                    const result = res.data.data
                    this.total = result.length
                    result.forEach(item => {
                        item.exhibitionType = this.exhibitionTypeName[item.exhibitionType-1]
                    })
                    this.filterData = result
                    this.artlist = this.filterData.slice(0,9)
                })
            },
            //根据城市获取列表数据
            cityClick(item) {
                console.log(item)
                // homeHighlight({city:item}).then(res => {
                //     console.log(res)
                //     const result = res.data.data
                //     this.total = result.length
                //     result.forEach(item => {
                //         item.exhibitionType = this.exhibitionTypeName[item.exhibitionType-1]
                //     })
                //     this.filterData = result
                //     this.artlist = this.filterData.slice(0,9)
                // })
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