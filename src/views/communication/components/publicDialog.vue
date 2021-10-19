<template>
    <div>
        <el-dialog title="发表讨论" :visible.sync="dialogPublicVisible">
            <el-form :model="publicdialog" :rules="rules">
                <el-form-item label="讨论内容" :label-width="formLabelWidth" prop="content">
                    <el-input v-model="publicdialog.content" autocomplete="off" type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="上传图片" :label-width="formLabelWidth"  prop="img">
                    <el-upload
                            class="upload-demo"
                            action="http://localhost:8080/api/communication/imgload"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            multiple
                            :limit="5"
                            :on-exceed="handleExceed"
                            :file-list="fileList"
                            :on-success="uploadSuccess">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                    <el-dialog :visible.sync="publicDialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="publicClick">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "publicDialog",
        props: ['dialogPublicVisible','discuss'],
        data() {
            return {
                fileList:[],//图片列表
                publicdialog: {
                    username: '花花',
                    content: '',
                    img:[],
                },
                formLabelWidth: '120px',
                dialogImageUrl: '',
                publicDialogVisible: false,
                rules: {
                    content: [
                        {required: true, trigger: "blur", message: "请输入讨论内容"}
                    ]
                }
            }
        },
        methods: {
            //图片上传成功
            uploadSuccess(res, file) {
                this.publicdialog.img.push(res.data.path)
                // console.log(this.publicdialog.img)
            },
            //删除图片时
            handleRemove(file, fileList) {
                console.log(file, fileList,'1111111');
                    //给数组封装一个方法
                    Array.prototype.contains = function(obj) {
                        var i = this.length;
                        while (i--) {
                            if (this[i] === obj) {
                                return i;  // 返回的这个 i 就是元素的索引下标，
                            }
                        }
                        return false;
                    }
                    const path = file.response.data.path
                    this.publicdialog.img.splice(this.publicdialog.img.contains(path),1)
                    // console.log(this.publicdialog.img,'删除后的form.img')
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 5 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            //取消发表
            cancel() {
                this.publicdialog.img = []
                this.dialogPublicVisible = false
            },
            //发表
            publicClick() {
                this.$emit('publicClick',this.publicdialog)
            }
        }
    }
</script>

<style scoped>

</style>