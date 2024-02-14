<template>
    <div :class="{ 'focused': isFocused, 'dark-mode': getTheme }" class="input-search" @click="focusOn">
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
  computed: {
    getTheme () {
      return this.$store.state.darkTheme
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
.input-search {
    @include flex-center;
    position: relative;
    height: 45px;
    width: 402px;
    margin-left: 20px;
    padding-left: 16px;
    border: 1px solid $grey-50;
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
    font-size: 16px;
    border: none;
    padding-left: 12px;
    border-radius: $base-border-radius;
    background-color: inherit;
    outline: none;

}
}
.focused {
  border: 1px solid $grey-600;
}
.dark-mode{
  color: $grey-400;
  border: 1px solid $grey-600;
  input{
    color: $grey-400;
  }
  }
</style>
