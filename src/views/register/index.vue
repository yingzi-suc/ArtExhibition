<template>
    <div class="login">
        <div class="login-bg">
            <div class="logo-img">
                <img src="~assets/img/tate-logo.png" alt="">
                <p>用户注册</p>
            </div>
            <div class="user-login">
                <el-form :model="loginForm"
                         status-icon
                         :rules="rules"
                         ref="ruleForm"
                         label-width="70px"
                         class="demo-ruleForm" @submit.native.prevent="register">
                    <el-form-item label="账号" prop="username">
                        <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="用户" prop="role">
                        <el-radio-group v-model="loginForm.role">
                            <el-radio label="普通用户"></el-radio>
                            <el-radio label="超级用户"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" native-type="submit" >注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="footer">
                <span>已有帐号？</span>
                <span class="register" @click="goToRegister">点击登录</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {userRegister} from 'network/art'
    export default {
        name: "index",
        data() {
            return {
                loginForm: {
                    username: '',
                    password: '',
                    role:'',
                },
                rules: {
                    username:[{required: true,trigger: 'blur',message: '请输入账号'}],
                    password: [{required: true,trigger: 'blur',message: '请输入密码'}],
                    role:[{required: true,trigger: 'blur',message: '请选择用户类别'}]
                }
            }
        },
        methods: {
            register() {
                userRegister(this.loginForm).then(res=> {
                    if(res.data.code === 0) {
                        this.$router.push('/login')
                        this.$message({
                            type:'success',
                            message: '注册成功'
                        })
                    } else {
                        this.$message({
                            type:'error',
                            message: '该用户名已存在！'
                        })
                    }
                })
                
               
           } 
            },
            goToRegister() {
                this.$router.push('/login')
            }
        }
    
</script>

<style scoped lang="scss">
    .login {
        width: 100%;
        height: 2000px;
        position: fixed;
        top: 0;
        left: 0;
        background: url("../../assets/img/register-bg.jpg") repeat 0px;
        .login-bg {
            width: 530px;
            height: 520px;
            background: rgba(255,255,255,0.6);
            margin: 80px auto;
            padding: 0 60px;
            .logo-img {
                width: 200px;
                margin: 0 auto;
                img {
                    margin-left: 8px;
                }
                p {
                    font-size: 28px;
                    color: #575e60;
                    margin-bottom: 20px;
                }
            }
            .user-login {
                border: 2px solid #dadada;
                margin: 0 auto;
                font-weight: 600;
                padding: 30px 30px 0 0;
                border-radius: 4px;
                margin-bottom: 30px;
            }
            .footer {
                border: 2px solid #dadada;
                height: 30px;
                font-size: 12px;
                text-align: left;
                line-height: 30px;
                padding-left: 20px;
                .register {
                    color: #0064b5;
                    cursor: pointer;
                }
            }
        }

    }
    .el-button {
        width: 296px;
    }
</style>