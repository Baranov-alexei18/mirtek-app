<script>
import MenuIcon from '../../../assets/icons/MenuIcon.vue'
import Avatar from '../../shared/Avatar.vue'
import IconShared from '../../shared/icons/IconShared.vue'
import SearchInput from '../../shared/input/SearchInput.vue'

import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'HeaderMain',
  components: { SearchInput, Avatar, IconShared, MenuIcon },
  props: {
    msg: String
  },
  setup () {
    const store = useStore()

    const getTheme = computed(() => store.state.darkTheme)

    const toggleTheme = () => {
      store.dispatch('toggleTheme')
    }

    return { getTheme, toggleTheme }
  }
}
</script>

<template>
  <header :class="{ 'dark-mode': getTheme  }">
    <div class="header-search">
      <img class="logo" alt="Vue logo" src="../../../assets/img/logo.png">
      <SearchInput/>
    </div>
    <MenuIcon/>
    <button @click="toggleTheme" class="btn-theme">
      <i v-if="getTheme" class="fa-regular fa-sun"></i>
      <i v-else class="fa-solid fa-moon"></i>
    </button>
    <div class="header-info">
      <IconShared icon="fa-solid fa-bell" style="margin-right: 12px;"/>
      <Avatar :url="require('../../../assets/img/users/avatar.png')"/>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import '../../../assets/styles/main.scss';

header{
  display: flex;
  justify-content: space-between;
  background-color: $main-white-color;
  @include element-size(70px, 100%);
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
  .header-search{
    @include flex-center;
    margin-left: 20px;

    @media (max-width: 768px) {
      display: none
    }
  }
  .header-info {
    @include flex-center;
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    height: 60px;
    .header-info {
      @include flex-center;
      margin-right: 16px;
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
