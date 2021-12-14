<template>
    <div class="home">
        <banner/>
        <jump-module/>
        <highlights/>
        <art-collection/>
        <hold-exhibitions/>
        <art-footer/>
        <back-top v-show="showBackTop" @backTop="backTop" class="backtop"/>
    </div>
</template>

<script>
    import Banner from "./components/Banner";
    import JumpModule from "./components/JumpModule";
    import Highlights from "./components/Highlights";
    import ArtCollection from "./components/ArtCollection";
    import HoldExhibitions from "./components/HoldExhibitions";

    import ArtFooter from "../../components/common/footer/ArtFooter";
    import BackTop from "../../components/common/BackTop";

     import {loginlog} from 'network/art'
    export default {
        name: "index",
        components: {
            Banner,
            JumpModule,
            Highlights,
            ArtCollection,
            HoldExhibitions,
            ArtFooter,
            BackTop
        },
        data(){
            return {
                showBackTop: false
            }
        },
        mounted() {
            window.addEventListener("scroll",this.handleScroll);
           if(sessionStorage.getItem('user')){
                let params = {
                    username:sessionStorage.getItem('user'),
                    role:sessionStorage.getItem('role'),
                    loginDate:this.$fn.getDate(),
                    detail:'登录'
                }
                console.log(params,'params')
                loginlog(params).then(res=>{
                   
                })
           }            
        },
        destroyed() {
            document.removeEventListener('scroll', this.handleScroll)
        },
        methods: {
            handleScroll() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
               if(scrollTop >= 600) {
                   this.showBackTop = true
               } else {
                   this.showBackTop = false
               }
            },
            backTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }
        }
    }
</script>

<style scoped>
    .home {
        width: 100%;
        height: 100%;
    }
    .backtop {
        position: fixed;
        right: 70px;
        bottom: 65px;
    }
</style>