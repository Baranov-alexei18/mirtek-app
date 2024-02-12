<template>
    <div class="avatar">
      <img :src="url" :alt="altText" class="avatar-image">
    </div>
  </template>

<script>
export default {
  name: 'AppAvatar',
  props: {
    url: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      default: 'User'
    }
  },
  computed: {
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/main.scss';
.avatar {
    @include element-size(32px, 32px);
    border-radius: $base-border-radius;
    overflow: hidden;

    .avatar-image {
    width: 100%;
    height: auto;
  }
}
</style>
