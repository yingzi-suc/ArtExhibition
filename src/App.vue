<template>
  <div id="app">
    <div id="nav">
      <header-top/>
      <tabbar/>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
 import HeaderTop from "./components/common/headertop/HeaderTop";
 import Tabbar from "./components/common/tabbar/Tabbar";
 export default {
   components: {Tabbar, HeaderTop}
 }

</script>
<style lang="scss">
  @import 'assets/css/common.css';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  a {
    font-weight: bold;
    font-size: 14px;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #0072ce;
    }
  }
}
</style>
