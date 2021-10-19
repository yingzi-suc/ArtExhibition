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
                <span @click="promotion" style="cursor: pointer">升级用户</span>
                <span @click="signOut" style="cursor: pointer">退出</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {userLogout,promotionUser} from 'network/art'
    export default {
        name: "HeaderTop",
        data(){
            return {
                isLoginPage: true,
                user: '',
                role: ''
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
                let user =sessionStorage.getItem('user')
                // let role = sessionStorage.getItem('role')
                // let userInfo = {user:user,role:role}
                // //保存用户状态到vuex
                // this.$store.commit('saveUserInfo',userInfo)
                if(user) {
                    this.isLoginPage = false
                    this.user = user
                }

            },
            promotion() {
                let username = this.$store.state.userInfo.user
                this.role = this.$store.state.userInfo.role
                if(this.$store.state.userState === 0) {
                    if(this.role === "普通用户") {
                        this.$confirm('是否升级您的用户?', '提示', {
                            confirmButtonText: '是',
                            cancelButtonText: '否',
                            type: 'warning'
                        }).then(() => {
                            promotionUser({username:username}).then(res => {
                                let userInfo={user:res.data.data[0].username,role:res.data.data[0].role}
                                this.$store.commit('saveUserInfo',userInfo)
                                sessionStorage.setItem("role",res.data.data[0].role)
                                // console.log(this.$store.state.userInfo,'userInfo')
                                // console.log(this.$store.state.userState,'userState')
                            })
                            this.$message({
                                type: 'success',
                                message: '升级成功!'
                            });

                        }).catch(() => {
                            this.$message({
                                type: 'info',
                                message: '已取消'
                            });
                        });
                    } else {
                        this.$message({
                            type:'warning',
                            message:'您已经是超级用户，无需升级'
                        })
                    }
                } else {
                    this.$message({
                        type:'warning',
                        message:'请先登录'
                    })
                }

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
                    //退出登录，登陆状态为0
                    this.$store.commit('updateUserState')
                    this.$store.commit('saveUserInfo',{user:'',role:''})
                    // console.log(this.$store.state.userInfo,'userInfo')
                    // console.log(this.$store.state.userState,'userState')
                    this.$message({
                        type: 'success',
                        message: '退出成功!'
                    });
                    sessionStorage.clear()
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