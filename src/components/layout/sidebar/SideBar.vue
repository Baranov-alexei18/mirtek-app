<template>
    <div class="sidebar" :class="{ 'sidebar-open': isOpen }">
        <AppNavbar/>
        <div class="sidebar-cellar">
            <VolumeIcons/>
            <WorldIcon/>
            <SettingsIcon/>
        </div>
    </div>
  </template>

<script>
import AppNavbar from './AppNavbar.vue'
import VolumeIcons from '../../../assets/icons/VolumeIcons.vue'
import WorldIcon from '../../../assets/icons/WorldIcon.vue'
import SettingsIcon from '../../../assets/icons/SettingsIcon.vue'

export default {
  components: { AppNavbar, VolumeIcons, WorldIcon, SettingsIcon },
  props: {
    isOpen: Boolean
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/main.scss';
  .sidebar {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    width: 250px;
    background-color: $main-white-color;
    transition: left 0.3s ease-in-out;

    .sidebar-cellar{
      margin-top: auto;
      align-items: flex-end;
    }
  }
  </style>
