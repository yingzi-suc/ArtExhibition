<template>
    <div class="pagination">
        <el-pagination
                layout="total,prev, pager, next"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="9"
                :total="total">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props: ['total'],
        data() {
            return {
                currentPage:1
            }
        },
        methods: {
            handleCurrentChange(val) {
                this.currentPage = val
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pagination {
        margin: 30px auto;
    }
</style>