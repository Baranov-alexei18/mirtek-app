<script>
import AppNavbar from './AppNavbar.vue'
import VolumeIcons from '../../../assets/icons/VolumeIcons.vue'
import WorldIcon from '../../../assets/icons/WorldIcon.vue'
import SettingsIcon from '../../../assets/icons/SettingsIcon.vue'

import { computed, onMounted, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'

export default {
  components: { AppNavbar, VolumeIcons, WorldIcon, SettingsIcon },
  setup () {
    const store = useStore()

    const isOpen = computed(() => {
      return store.state.isSidebarOpen
    })

    const getTheme = computed(() => {
      return store.state.darkTheme
    })

    const closeSidebar = (event) => {
      const sidebar = document.querySelector('.sidebar')
      const position = sidebar.getBoundingClientRect()

      if (!sidebar.contains(event.target) && position.left === 0) {
        store.dispatch('closeSidebar')
      }
    }

    onMounted(() => {
      document.addEventListener('click', closeSidebar)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('click', closeSidebar)
    })

    return { isOpen, getTheme }
  }
}
</script>

<template>
  <div ref="sidebar" class="sidebar" :class="{ 'sidebar-open': isOpen, 'dark-mode': getTheme }">
    <AppNavbar/>
    <div class="sidebar-cellar">
      <VolumeIcons/>
        <WorldIcon style="margin: 0 24px;"/>
        <SettingsIcon/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../../assets/styles/main.scss';
.sidebar {
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 250px;
  background-color: $main-white-color;
  border-right: 1px solid $grey-200;
  transition: left 0.3s ease-in-out;
  .sidebar-cellar{
    margin-top: auto;
    align-items: flex-end;
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
  height: 100%;
  position: fixed;
  top: 0;
  left: -250px;
  z-index: 2;
  }
}
.sidebar-open{
  left: 0;
}
.dark-mode{
  background-color: rgb(35, 37, 38);
  border-right: 1px solid $grey-700;
  color: $grey-200;
  svg{
    filter: invert(50%);
  }
}
</style>
