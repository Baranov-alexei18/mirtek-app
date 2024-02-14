<template>
  <div :class="{ 'dark-mode': getTheme }">
    <HeaderMain />
    <div class="main-wrapper" ref="mainSideBar">
      <SideBar/>
      <AppMain/>
    </div>
  </div>
</template>

<script>
import AppMain from '../components/layout/app-main/AppMain.vue'
import HeaderMain from '../components/layout/header/HeaderMain.vue'
import SideBar from '../components/layout/sidebar/SideBar.vue'

export default {
  name: 'HomeView',
  components: { HeaderMain, SideBar, AppMain },
  computed: {
    getTheme () {
      return this.$store.state.darkTheme
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/main.scss';
  .main-wrapper{
    display: flex;
  }
  .dark-mode{
    background-color: rgb(51, 53, 54);
    color: $grey-200;
    svg{
      filter: invert(70%);
    }
  }
</style>
