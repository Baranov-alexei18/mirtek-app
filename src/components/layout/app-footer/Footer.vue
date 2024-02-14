<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    const socialIcons = [
      'fab fa-facebook-f',
      'fab fa-twitter',
      'fa-brands fa-github',
      'fa-brands fa-dribbble'
    ]

    const getTheme = computed(() => store.state.darkTheme)

    return { socialIcons, getTheme }
  }
}
</script>

<template>
  <footer class="footer" :class="{ 'dark-mode': getTheme }">
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

<style scoped lang="scss">
@import '../../../assets/styles/main.scss';
  .footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 8px 16px;
    height: 120px;
    padding: 4px 28px;
    background-color: $main-white-color;
    border-radius: $base-border-radius;
    color: black;

    .footer-text {
    display: flex;
    justify-content: flex-start;
    flex: 1;
    font-size: 17px;
    margin-left: 4px;
    margin-top: 6px
  }
  .footer-social {
    display: flex;
    gap: 32px;

    .social-icon {
    margin-top: 4px;
    color: black;
    font-size: 20px;
  }

  .social-icon:hover {
    color: rgb(100, 217, 246);
  }
 }
 @media (max-width: 768px) {
  height: auto;
  .footer-text {
    min-width: 220px;
    max-width: 250px;
    text-align: start;
    padding-top: 32px;
  }
  .footer-social{
    gap: 28px;
    margin: 12px 12px;
  }
 }
}
.dark-mode{
    background-color: #252a2d;
    color: $grey-400;
    border-bottom: black;

    i{
      filter: invert(70%);
    }
  }
</style>
