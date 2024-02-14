<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import LayoutError from '../components/layout/LayoutError.vue'
import HeaderError from '../components/layout/header/HeaderError.vue'

export default {
  components: { LayoutError, HeaderError },
  setup () {
    const store = useStore()
    const getTheme = computed(() => store.state.darkTheme)

    return { getTheme }
  }
}
</script>

<template>
  <div :class="{ 'dark-mode': getTheme }">
    <HeaderError />
    <LayoutError />
  </div>
</template>

<style lang="scss">
@import '../assets/styles/main.scss';
  .dark-mode{
    background-color: rgb(51, 53, 54);
    color: $grey-200;
    svg{
      filter: invert(70%);
    }
  }
</style>
