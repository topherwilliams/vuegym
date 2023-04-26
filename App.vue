<template>
  <div id="app-container">
    <SiteHeader></SiteHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import SiteHeader from './components/header/SiteHeader.vue';

export default {
  components: {
    SiteHeader,
  }

}
</script>

<style>
#app-container {
  max-width: 1280px;
  height: 100vh;
  overflow-y: auto;
  border: 1px black solid;
  margin: auto;
  padding: 0px;
  box-sizing: border-box;
  
}

</style>
