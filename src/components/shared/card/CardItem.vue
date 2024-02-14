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
  }
}
</script>

<template>
  <div class="card-item">
    <slot name="avatar"></slot>
    <div class="info">
        <span class="info-title">{{ title }}</span>
        <span class="info-subtitle">{{ subtitle }}</span>
    </div>
    <span class="info-count" v-html="value">
    </span>
  </div>
</template>

<style scoped lang="scss">
@import '../../../assets/styles/main.scss';
.card-item{
  display: flex;
  align-items: center;
  height: 59px;
  background-color: inherit;
  .info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .info-title{
      font-size: 16px;
      font-weight: 700;
    }
    .info-subtitle{
      font-size: 13px;
      margin-top: 4px;
      color: $grey-500;
    }
  }
  .info-count{
    font-size: 18px;
    font-weight: 700;
    margin-left: auto;
  }
}

</style>
