<template>
    <div class="headertop">
        <div class="haeder_inner">
            <!-- logo-->
            <div class="header-branding">
                <img src="~assets/img/tate-logo.jpg" alt="Tate Logo" class="header-img">
            </div>
            <div class="login">
                <span style="cursor: pointer" @click="goToLogin" v-show="isLoginPage">登录</span>
                <span class="type" v-show="!isLoginPage">欢迎您：{{this.user}}</span>
                <span @click="signOut" style="cursor: pointer">退出</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {userLogout} from 'network/art'
    export default {
        name: "HeaderTop",
        data(){
            return {
                isLoginPage: true,
                user: ''
            }
        },
       mounted() {
            this.userSave()
       },
        methods: {
            //保存登录用户信息
            userSave() {
               this.$bus.$on('userSave',(user) => {
                   if(user) {
                       this.isLoginPage = false
                       this.user = user
                   }
               })
            },
            signOut() {
                this.$confirm('是否退出该账号?', '提示', {
                    confirmButtonText: '是',
                    cancelButtonText: '否',
                    type: 'warning'
                }).then(() => {
                    userLogout().then(res => {
                        
                    })
                    this.isLoginPage = true
                    this.$message({
                        type: 'success',
                        message: '退出成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消退出'
                    });
                });
            },
            goToLogin() {
                this.$router.push('/login')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .headertop {
        width: 100%;
        height: 65px;
        border-bottom: 1px solid #d0d0d0;
        .haeder_inner {
            width: 1136px;
            margin: 0 auto;
            position: relative;
            .header-branding {
                width: 144px;
                display: block;
                margin: 0 auto;
                .header-img {
                    height: 62px;
                }
            }
            .login {
                width: 230px;
                position: absolute;
                top: 20px;
                right: 10px;
                color: #313131;
                span {
                    margin-left: 20px;
                }
                .type {
                    cursor: pointer;
                }
            }
        }

    }

</style>