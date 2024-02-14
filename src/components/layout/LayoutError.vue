<script>
import { useRouter } from 'vue-router'
import BaseButton from '../shared/button/BaseButton.vue'

export default {
  components: { BaseButton },
  setup () {
    const router = useRouter()

    const toHomePage = () => {
      router.push('/')
    }

    return { toHomePage }
  }
}
</script>

<template>
  <div class="error-wrapper">
    <div class="error">
      <img src="../../assets/img/pageNotFound.png" alt="Your Photo" class="img-error">
      <span class="title-error">Page not found</span>
      <p class="subtitle-error">Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.</p>
      <BaseButton @click="toHomePage">Go back home</BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/styles/main.scss';
  .error-wrapper {
    @include element-size(800px, 100%);
    min-height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;

    .error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .img-error{
      max-width: 100%;
      max-height: 100%;
    }
    .title-error{
      font-size: 48px;
      font-weight: 600;
      margin-top: -10px;
    }
    p{
      font-size: 17px;
      color: $grey-500;
      margin-bottom: 16px;
    }
  }

  @media (max-width: 768px) {
    height: 500px !important;
    align-items: start;
    .error{
      margin-top: 50px;
      .title-error{
        font-size: 30px;
        margin-top: 40px;
        margin-bottom: 10px
      }
      .subtitle-error{
        font-size: 17px;
        padding: 0px 12px;
        margin-top: 4px;
        line-height: 25px;
      }
    }
  }
}
</style>
