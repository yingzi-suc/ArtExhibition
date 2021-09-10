<template>
    <div class="detailbanner">
        <img :src="imgBanner" alt="">
    </div>
</template>

<script>
    export default {
        name: "DetailBanner",
        props:['imgBanner']
    }
</script>

<style scoped lang="scss">
    .detailbanner {
        width: 100%;
    }
</style>