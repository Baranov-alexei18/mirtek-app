<template>
  <div class="main-wrapper">
    <SideBar/>
    <AppMain/>
  </div>
</template>

<script>
import AppMain from '../components/layout/app-main/AppMain.vue'
import SideBar from '../components/layout/sidebar/SideBar.vue'

export default {
  name: 'HomeView',
  components: { SideBar, AppMain }
}
</script>

<style lang="scss">
@import '../assets/styles/main.scss';
  .main-wrapper{
    display: flex;
    margin-top: 12px;
  }
</style>
