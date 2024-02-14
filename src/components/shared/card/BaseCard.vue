<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    const getTheme = computed(() => store.state.darkTheme)

    return { getTheme }
  }
}
</script>

<template>
  <section class="base-card-wrapper" :class="{ 'dark-mode': getTheme }">
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
@import '../../../assets/styles/main.scss';
.base-card-wrapper{
    padding: 20px;
    margin: 8px 16px;
    background-color: $main-white-color;
    border-radius: $base-border-radius;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
    overflow-x: auto;

    @media (max-width: 768px) {
        padding: 0;
    }
}
.dark-mode{
  background-color: #252a2d;
  color: $grey-400;
  border-bottom: black;
  svg{
    filter: invert(0%);
  }
}
</style>
