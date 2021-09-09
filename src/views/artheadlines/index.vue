<template>
    <div class="artheadlines">
        <banner/>
        <art-headlines :artHeadlines="artHeadlines"/>
        <el-pagination
                layout="total,prev, pager, next"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="4"
                :total="total">
        </el-pagination>
    </div>
</template>

<script>
    import Banner from "./components/Banner"
    import ArtHeadlines from "./components/ArtHeadlines";

    import {artheadlines} from 'network/art'
    export default {
        name: "artheadlines",
        components: {
            Banner,
            ArtHeadlines
        },
        data(){
            return {
                total: 0,  //页码总数
                currentPage:1,  //显示当前页
                filterData: [], //总的列表数据
                artHeadlines: [],
            }
        },
        created() {
            this.init()
        },
        methods:{
            init(){
                artheadlines().then(res => {
                    this.filterData = res.data.data
                    this.total = this.filterData.length
                    this.artHeadlines = this.filterData.slice(0,4)
                })
            },
            //页码跳转，每页显示 9 条数据
            handleCurrentChange(val) {
                this.currentPage = val
                // 1页 val=1  0 - 8   （1*8 - 8, 1 * 9 ）
                // 2页 val=2  9 - 17   (2*8 - 8, 2 * 9)
                this.artHeadlines = this.filterData.slice(val*4 - 4,[val * 4])
            },
        }
    }
</script>

<style scoped>
    .artheadlines {
        width: 100%;
    }
</style>