<template>
    <div class="card-item">
        <slot name="avatar"></slot>
        <div class="info">
            <span>{{ title }}</span>
            <span>{{ subtitle }}</span>
        </div>
        <span style="margin-left: auto">
            <b>{{ value }}</b>
        </span>
    </div>
  </template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    subtitle: {
      type: String,
      default: 'Subtitle'
    },
    value: {
      type: String,
      default: 'Value'
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/main.scss';
.card-item{
    display: flex;
    align-items: center;
    background-color: $main-white-color;

    .info{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 8px;
    }
}

</style>
