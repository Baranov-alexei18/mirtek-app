<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'IconShared',
  props: {
    icon: {
      type: String,
      required: true
    },
    showDot: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const store = useStore()

    const iconClasses = computed(() => ['fas', props.icon])

    const dotStyles = computed(() => {
      if (!props.showDot) return {}
      return {
        width: '7px',
        height: '7px',
        borderRadius: '50%',
        backgroundColor: 'red',
        position: 'absolute',
        border: '1px solid white',
        top: '5px',
        right: '7px'
      }
    })

    const getTheme = computed(() => store.state.darkTheme)

    return { iconClasses, dotStyles, getTheme }
  }
}
</script>

<template>
  <div class="icon-container" :class="{ 'dark-mode': getTheme  }">
    <i :class="iconClasses"></i>
    <div :style="dotStyles" v-if="showDot"></div>
  </div>
</template>

<style scoped lang="scss">
@import '../../../assets/styles/main.scss';
  .icon-container {
    position: relative;
    @include element-size(32px, 32px);
    border-radius: $base-border-radius;
    background-color: $grey-50;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dark-mode{
    background-color: rgb(51, 53, 54);
    color: $grey-200 !important;
    svg{
      filter: invert(70%);
    }
  }
  </style>
