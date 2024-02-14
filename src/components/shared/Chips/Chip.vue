<script>
export default {
  props: {
    width: {
      type: String
    },
    height: {
      type: String
    },
    textColor: {
      type: String,
      default: 'black'
    },
    bgColor: {
      type: String,
      default: 'white'
    },
    radius: {
      type: String
    }
  }
}
</script>

<template>
  <div :style="{
    width: width,
    height: height,
    color: textColor,
    backgroundColor: bgColor,
    borderRadius: radius
  }">
    <slot></slot>
  </div>
</template>
