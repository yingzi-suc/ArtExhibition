<template>
    <div class="detail">
        <detail-banner/>
        <detail-content :detail="detail"/>
        <art-footer/>
    </div>
</template>

<script>
    import DetailBanner from "./components/DetailBanner";
    import DetailContent from "./components/DetailContent";
    import ArtFooter from "../../components/common/footer/ArtFooter";

    import {detailInfo} from 'network/art'
    export default {
        name: "index",
        components: {
            DetailBanner,
            DetailContent,
            ArtFooter,
        },
        data(){
            return {
                showBackTop: false,
                detail:[]
            }
        },
        mounted() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },
        created() {
            this.getDetailInfo()

        },
        methods: {
            getDetailInfo() {
                // const iid = JSON.stringify(this.$route.query)
                const iid = this.$route.query.iid
                // console.log(iid)
                detailInfo(iid).then(res => {
                    this.detail = res.data.data
                })
            }
        }
    }
</script>

<style scoped>
    .detail {
        width: 100%;
    }
</style>