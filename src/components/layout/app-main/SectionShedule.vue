<script>
import InfoIconVue from '../../../assets/icons/InfoIcon.vue'
import BaseCardVue from '../../shared/card/BaseCard.vue'
import Shedule from '../../shared/Shedule.vue'

export default {
  components: { Shedule, InfoIconVue, BaseCardVue }
}
</script>

<template>
  <BaseCardVue>
    <div class="section-shedule-title" style="display: flex; align-items: center  ;">
      <h3>Sales</h3>
      <InfoIconVue color="#B1B7C0"/>
    </div>
    <Shedule />
    </BaseCardVue>
</template>

<style scoped lang="scss">
@import '../../../assets/styles/main.scss';

.section-shedule-title{
  margin: 16px 12px;
  h3{
    font-weight: 800;
    margin-right: 12px;
  }
  svg{
    position: relative;
    z-index: inherit;
  }
  @media (max-width: 768px) {
      margin: 4px 8px;
    }
}
</style>
