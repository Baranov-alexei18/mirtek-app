<template>
    <div :class="{ 'focused': isFocused }" class="input-container" @click="focusOn">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input ref="inputField" type="serach" class="input-field" placeholder="Search" @blur="removeFocus">
    </div>
  </template>

<script>
export default {
  name: 'SearchInput',
  data () {
    return {
      isFocused: false
    }
  },
  methods: {
    focusOn () {
      this.isFocused = true
    },
    removeFocus () {
      this.isFocused = false
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/main.scss';
.input-container {
    @include flex-center;
    position: relative;
    height: 45px;
    width: 402px;
    border: 1px solid #ccc;
    border-radius: $base-border-radius;
    background-color: $grey-200;
    .input-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #aaa;
  }

  .input-field {
    height: 95%;
    width: 350px;
    border: none;
    border-radius: $base-border-radius;
    background-color: inherit;
    outline: none;
}
}
.focused {
  border: 1px solid $grey-800;
}
</style>
