<template>
    <div>
        <el-dialog title="发表讨论" :visible.sync="dialogPublicVisible">
            <el-form :model="publicdialog" :rules="rules">
                <el-form-item label="讨论内容" :label-width="formLabelWidth" prop="info">
                    <el-input v-model="publicdialog.info" autocomplete="off" type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="上传图片" :label-width="formLabelWidth">
                    <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="publicDialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogPublicVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogPublicVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "publicDialog",
        props: ['dialogPublicVisible'],
        data() {
            return {
                publicdialog: {
                    info: ''
                },
                formLabelWidth: '120px',
                dialogImageUrl: '',
                publicDialogVisible: false,
                rules: {
                    info: [
                        {required: true, trigger: "blur", message: "请输入讨论内容"}
                    ]
                }
            }
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.publicDialogVisible = true;
            }
        }
    }
</script>

<style scoped>

</style>