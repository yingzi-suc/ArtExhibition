<template>
    <div class="detail">
        <detail-banner :imgBanner="imgBanner"/>
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
        name: "Detail",
        components: {
            DetailBanner,
            DetailContent,
            ArtFooter,
        },
        data(){
            return {
                showBackTop: false,
                detail:[],
                imgBanner:''
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
                detailInfo(iid).then(res => {
                    const result = res.data.data
                    result.businessHours = result.businessHours.join('-')
                    result.extension = result.extension.join('-')
                    // console.log(result);
                    //时间格式处理
                    result.myPinglun.forEach(item => {
                        item.time = this.dayjs(item.time).format("YYYY-MM-DD")
                    })
                    this.detail = result
                    this.imgBanner = result.imgBanner
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