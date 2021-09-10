<template>
    <div class="holdexhibitions">
        <div class="hold-form">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="展会名称" prop="title">
                    <el-input v-model="form.title" placeholder="请输入展会名称"></el-input>
                </el-form-item>
                <el-form-item label="展会类别" prop="exhibitionType">
                    <el-select v-model="form.exhibitionType" clearable placeholder="请选择展会类别">
                        <el-option
                                v-for="item in exhibitionTypeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="展会城市" prop="city">
                    <el-select v-model="form.city" clearable placeholder="请选择展会城市">
                        <el-option
                                v-for="item in cityOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="展览展期" prop="extension">
                    <el-date-picker
                            v-model="form.extension"
                            type="daterange"
                            value-format="yyyy年MM月dd日"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="营业时间" prop="businessHours">
                    <el-time-picker
                            is-range
                            v-model="form.businessHours"
                            value-format = 'HH:mm'
                            range-separator="至"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                            placeholder="选择时间范围">
                    </el-time-picker>
                </el-form-item>
                <el-form-item label="展会地点" prop="location">
                    <el-input v-model="form.location"></el-input>
                </el-form-item>
                <el-form-item label="联系人" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" prop="number">
                    <el-input v-model="form.number"></el-input>
                </el-form-item>
                <el-form-item label="上传图片" prop="img">
<!--                    <el-upload-->
<!--                            class="avatar-uploader"-->
<!--                            action="http://localhost:8080/api/hold/imgload"-->
<!--                            :show-file-list="false"-->
<!--                            :on-success="uploadSuccess"-->
<!--                            :before-upload="uploadBefore"-->
<!--                    >-->
<!--                        <i class="el-icon-plus avatar-uploader-icon"></i>-->
<!--                    </el-upload>-->
                    <el-upload
                            class="upload-demo"
                            action="http://localhost:8080/api/hold/imgload"
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
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>
                <el-form-item label="展会介绍" prop="content">
                    <el-input  type="textarea" v-model="form.content"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit('form')">提交</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
        <art-footer/>
<!--        <div class="fff"></div>-->
    </div>
</template>

<script>
    import ArtFooter from "../../components/common/footer/ArtFooter";

    import {holdExhibition} from "network/art"
    export default {
        name: "index",
        components: {
            ArtFooter
        },
        data() {
            return {
                fileList:[],//图片列表
                uploadData: {  //提交到OSS的参数
                    policy: '',
                    signature: '',
                    key: '',
                    ossaccessKeyId: '',
                    dir: 'itsource',
                    host: 'https://hrm-th-file.oss-cn-chengdu.aliyuncs.com'
                },
                form: {
                    num: 0,
                    title: '',
                    city:'',
                    exhibitionType: '',
                    extension: '',
                    businessHours:'',
                    location: '',
                    name: '',
                    number: '',
                    imgBanner: '',
                    img:[],
                    content: ''
                },
                rules: {
                    title: [
                        {required: true, trigger: "blur", message: "请输入展会名称"}
                    ],
                    city: [
                        {required: true, trigger: "blur", message: "请输入展会城市"}
                    ],
                    type: [
                        {required: true, trigger: "blur", message: "请输入展会类型"}
                    ],
                    extension: [
                        {required: true, trigger: "blur", message: "请输入展会展览展期"}
                    ],
                    businessHours: [
                        {required: true, trigger: "blur", message: "请输入展会营业时间"}
                    ],
                    location: [
                        {required: true, trigger: "blur", message: "请输入展会位置"}
                    ],
                    name: [
                        {required: true, trigger: "blur", message: "请输入办展人姓名"}
                    ],
                    // img: [
                    //     {required: true, trigger: "blur", message: "请上传图片"}
                    // ],
                    number: [
                        {required: true, trigger: "blur", message: "请输入办展人电话"}
                    ],
                    content: [
                        {required: true, trigger: "blur", message: "请输入展会介绍"}
                    ],
                },
                exhibitionTypeOptions: [{
                    value: '1',
                    label: '摄影展'
                }, {
                    value: '2',
                    label: '美术展'
                }, {
                    value: '3',
                    label: '艺术展'
                }, {
                    value: '4',
                    label: '插画展'
                }, {
                    value: '5',
                    label: '雕塑展'
                }],
                cityOptions: [
                    {
                        value: '1',
                        label: '成都'
                    }, {
                        value: '2',
                        label: '上海'
                    }, {
                        value: '3',
                        label: '北京'
                    }, {
                        value: '4',
                        label: '深圳'
                    }, {
                        value: '5',
                        label: '福建'
                    }, {
                        value: '6',
                        label: '江苏'
                    }
                ],
                value: '', //展会类别
                dialogImageUrl: '',
                dialogVisible: false
            }
        },
        mounted() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },
        methods: {
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const param = this.form
                        param['dianzan'] = 0
                        // console.log(param)
                        holdExhibition(param).then(res => {
                            if(res.data.code === 0) {
                                this.$refs[formName].resetFields();
                                this.$message({
                                    type: 'success',
                                    message: '办展信息提交成功'
                                })
                                this.fileList = []
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            //图片上传成功
            uploadSuccess(res, file) {
                if(res.data.name === "banner.jpg") {
                    this.form.imgBanner = res.data.path
                } else {
                    this.form.img.push(res.data.path)
                }
            },
            //删除图片时
            handleRemove(file, fileList) {
                console.log(file, fileList,'1111111');
                if(file.name === "banner.jpg") {
                    this.form.imgBanner = ''
                } else {
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
                    this.form.img.splice(this.form.img.contains(path),1)
                    // console.log(this.form.img,'删除后的form.img')
                }

            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 5 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .holdexhibitions {
        width: 100%;
        .hold-form {
            width: 600px;
            margin: 30px auto;
        }
        .el-select {
            float: left;
        }
    }
    .fff {
        height: 1000px;
    }
</style>
<style>
    .el-form-item .el-date-editor {
        float: left;
    }
</style>