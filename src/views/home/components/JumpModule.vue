<template>
    <div class="jumpmodule">
        <div class="splash-header">
            <ul class="in-page-nav_list">
                <li class="in-page-nav_item"><a href="#highlights">Highlights</a></li>
                <li class="in-page-nav_item"><a href="#art-in-the-collection">Art in the collection</a></li>
                <li class="in-page-nav_item"><a href="#hold-exhibitions">Hold Exhibitions</a></li>
                <li class="in-page-nav_item"><a href="#dig-deeper">Dig Deeper</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "JumpModule"
    }
</script>

<style lang="scss" scoped>
 .jumpmodule {
     height: 60px;
     line-height: 60px;
     width: 100%;
     background-color: #f8f7f5;
     .splash-header {
         width: 1000px;
         margin: 0 auto;
         .in-page-nav_list {
             display: flex;
             justify-content: space-between;
             .in-page-nav_item {
                 width: 200px;
                 color: #0d1215;
                 a:-webkit-any-link {
                    color: #0d1215;
                 }
             }
         }
     }
 }
</style>