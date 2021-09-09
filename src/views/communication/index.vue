<template>
    <div class="communication">
        <top-search/>
        <discuss :discuss="discuss"/>
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
    import TopSearch from "./components/TopSearch";
    import Discuss from "./components/Discuss";
    import {communication} from 'network/art'
    export default {
        name: "index",
        components: {
            TopSearch,
            Discuss
        },
        data() {
            return {
                discuss:[],
                filterData: [], //总的列表数据
                total: 0,  //页码总数
                currentPage:1  //显示当前页
            };
        },
        created() {
            this.init()
        },
        methods: {
            init(){
                communication().then(res => {
                    console.log(res.data.data);
                    this.filterData = res.data.data
                    this.total = this.filterData.length
                    this.discuss = this.filterData.slice(0,5)
                    this.discuss.forEach(item => {
                        //处理时间格式
                        const data = new Date(item.time).toJSON();
                        item.time = new Date(+new Date(data) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').
                        replace(/\.[\d]{3}Z/, '')

                        item.pinglun.forEach(res => {
                            const data1 = new Date(res.time).toJSON();
                            res.time = new Date(+new Date(data1) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').
                            replace(/\.[\d]{3}Z/, '')
                        })
                    })
                })
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
    }
</style>