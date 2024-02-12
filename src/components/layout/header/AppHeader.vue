<template>
    <header>
      <div class="header_search">
        <img alt="Vue logo" src="../../../assets/img/logo.png" style="width: 35px; height: 35px; margin: auto;">
        <SearchInput/>
      </div>
      <MenuIcon/>
      <div class="user_info">
        <IconShared icon="fa-solid fa-bell"/>
        <Avatar :url="require('../../../assets/img/users/avatar.png')"/>
      </div>
    </header>
</template>

<script>
import MenuIcon from '../../../assets/icons/MenuIcon.vue'
import Avatar from '../../shared/Avatar.vue'
import IconShared from '../../shared/icons/IconShared.vue'
import SearchInput from '../../shared/input/SearchInput.vue'

export default {
  name: 'AppHeader',
  components: { SearchInput, Avatar, IconShared, MenuIcon },
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/main.scss';

header{
    display: flex;
    justify-content: space-between;
    background-color: $main-white-color;
    @include element-size(70px, 100%);

    .header_search{
      @include flex-center;

      @media (max-width: 768px) {
        display: none
      }
    }
    .user_info {
      @include flex-center;
    }
}
</style>
