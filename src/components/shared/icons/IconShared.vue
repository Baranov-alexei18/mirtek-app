<template>
    <div class="icon-container">
      <i :class="iconClasses"></i>
      <div :style="dotStyles" v-if="showDot"></div>
    </div>
  </template>

<script>
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
  computed: {
    iconClasses () {
      return ['fas', this.icon]
    },
    dotStyles () {
      if (!this.showDot) return {}
      const styles = {
        width: '7px',
        height: '7px',
        borderRadius: '50%',
        backgroundColor: 'red',
        position: 'absolute',
        border: '1px solid white',
        top: '5px',
        right: '7px'
      }

      return styles
    }
  }
}
</script>

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
  </style>
