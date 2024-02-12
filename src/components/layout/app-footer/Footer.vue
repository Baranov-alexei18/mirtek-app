<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <footer class="footer">
      <div class="footer-text">
        <p>© 2021 Themesberg, LLC. All rights reserved.</p>
      </div>
      <div class="footer-social">
        <a href="#" class="social-icon" v-for="(icon, index) in socialIcons" :key="index">
          <i :class="icon"></i>
        </a>
      </div>
    </footer>
  </template>

<script>
export default {
  data () {
    return {
      socialIcons: [
        'fab fa-facebook-f',
        'fab fa-twitter',
        'fa-brands fa-github',
        'fa-brands fa-dribbble'
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/styles/main.scss';
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    padding: 0 40px;
    background-color: $main-white-color;
    border-radius: $base-border-radius;
    color: black;

    .footer-text {
    display: flex;
    justify-content: flex-start;
    flex: 1;
  }
  .footer-social {
    display: flex;

    .social-icon {
    margin-left: 20px;
    color: black;
    font-size: 20px;
  }

  .social-icon:hover {
    color: rgb(100, 217, 246);
    transform: scale(1.3);
  }
 }
}
</style>
