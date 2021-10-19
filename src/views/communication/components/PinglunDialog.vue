<template>
    <div>
        <el-dialog title="评论" :visible.sync="pinglunVisible">
            <el-form :model="pinglun">
                <el-form-item label="内容" :label-width="formLabelWidth">
                    <el-input v-model="pinglun.content" autocomplete="off" type="textarea"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="pinglunCancel">取 消</el-button>
                <el-button type="primary" @click="pinglunDefine">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "PinglunDialog",
        props: ['pinglunVisible'],
        data() {
            return {
                pinglun: {
                    content: ''
                },
                formLabelWidth: '120px'
            }
        },
        methods: {
            pinglunCancel() {
                this.$emit('pinglunCancel')
            },
            pinglunDefine() {
                this.$emit('pinglunDefine',this.pinglun)
            }
        }
    }
</script>

<style scoped>

</style>