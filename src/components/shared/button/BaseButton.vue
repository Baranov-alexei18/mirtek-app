<script>
export default {
  props: {
    color: {
      type: String,
      default: '#0E9F6E'
    },
    textColor: {
      type: String,
      default: 'white'
    },
    width: {
      type: String,
      default: '131px'
    },
    height: {
      type: String,
      default: '39px'
    }
  }
}
</script>

<template>
  <button
   :style="{
    backgroundColor: color,
    color: textColor,
    width: width,
    height: height,
    borderRadius: '12px',
    fontSize: '15px'
    }"
    >
    <slot></slot>
  </button>
</template>
