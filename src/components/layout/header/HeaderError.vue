<script>
import ComeInIcon from '@/assets/icons/ComeInIcon.vue'
import MenuIcon from '../../../assets/icons/MenuIcon.vue'
import Avatar from '../../shared/Avatar.vue'
import IconShared from '../../shared/icons/IconShared.vue'

import { useStore } from 'vuex'
import { ref, computed } from 'vue'

export default {
  name: 'HeaderError',
  components: { Avatar, IconShared, MenuIcon, ComeInIcon },
  props: {
    msg: String
  },
  setup () {
    const store = useStore()
    const activeTab = ref(1)

    const toggleTheme = () => {
      store.dispatch('toggleTheme')
    }

    const getTheme = computed(() => store.state.darkTheme)

    return { activeTab, toggleTheme, getTheme }
  }
}
</script>

<template>
  <header class="header-error" :class="{ 'dark-mode': getTheme  }">
    <div class="header-nav">
      <img class="logo" alt="Vue logo" src="../../../assets/img/logo.png">
      <nav class="navigation">
          <ul>
          <li :class="{ 'active': activeTab === 1 }" @click="activeTab = 1">Dashboard</li>
          <li :class="{ 'active': activeTab === 2 }" @click="activeTab = 2">Team</li>
          <li :class="{ 'active': activeTab === 3 }" @click="activeTab = 3">Projects</li>
          <li :class="{ 'active': activeTab === 4 }" @click="activeTab = 4">Calendar</li>
        </ul>
    </nav>
    </div>
    <MenuIcon/>
    <button @click="toggleTheme" class="btn-theme">
        <i v-if="getTheme" class="fa-regular fa-sun"></i>
        <i v-else class="fa-solid fa-moon"></i>
    </button>
    <div class="header-info">
        <IconShared icon="fa-solid fa-bell" style="background-color: inherit; box-shadow: none" showDot/>
        <Avatar :url="require('../../../assets/img/users/avatar.png')" style="margin-left: 6px;"/>
    </div>
    <div class="header-entrance">
        <ComeInIcon />
        <nav class="auth">Login/Register</nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import '../../../assets/styles/main.scss';

.header-error{
    @include element-size(66px, 100%);
    display: flex;
    justify-content: space-between;
    background-color: $main-white-color;
    border-bottom: 1px solid $grey-200;
    .logo{
      width: 35px;
      height: 35px;
      margin: auto;
    }
    .btn-theme{
      margin: auto 10px auto auto;
      background-color: inherit;
      color: inherit;
      height: 32px;
      width: 32px;
      border-radius: $base-border-radius;
    }
    .header-nav{
      @include flex-center;
      margin-left: 20px;
      .navigation ul {
        list-style-type: none;
        padding: 0;

        li {
        display: inline-block;
        cursor: pointer;
        margin-right: 14px;
      }
      }

      .active {
        color: $green-400;
      }

      @media (max-width: 768px) {
        display: none
      }
    }
    .header-info {
      display: none;
      margin-right: 16px;
    }
    .header-entrance{
      display: flex;
      align-items: center;
      .auth{
        padding: 0;
        margin-right: 24px;
        margin-left: 4px;
        cursor: pointer;
      }
    }

    @media (max-width: 768px) {
    height: 60px;
    .header-info {
      @include flex-center;
    }
    .header-entrance{
      display: none;
    }
  }
}
.dark-mode{
    background-color: rgb(35, 37, 38);
    border-bottom: 1px solid $grey-700;

    .logo{
      filter: invert(70%);
    }
  }
</style>
