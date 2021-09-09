<template>
    <div class="topsearch">
        <el-form :inline="true" :model="topSearch" class="demo-form-inline" label-width="400px">
            <el-form-item >
                <el-input v-model="topSearch.content" placeholder="请输入查询内容" style="width: 500px"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="searchClick">搜索</el-button>
                <el-button type="primary" @click="dialogPublicVisible = true">我要发表</el-button>
            </el-form-item>
        </el-form>
        <public-dialog :dialogPublicVisible = 'dialogPublicVisible'/>
    </div>
</template>

<script>
    import publicDialog from "./publicDialog";
    export default {
        name: "TopSearch",
        components: {
            publicDialog
        },
        data() {
            return {
                topSearch: {
                    content: ''
                },
                dialogPublicVisible: false
            }
        },
        methods: {
            searchClick() {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .topsearch {
        width: 750px;
        height: 40px;
        margin: 30px auto 10px;
        /*background-color: red;*/
    }
</style>