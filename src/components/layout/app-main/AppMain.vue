<script>
import Footer from '../app-footer/Footer.vue'
import SectionCard from './SectionCard.vue'
import SectionShedule from './SectionShedule.vue'
import SectionTable from './SectionTable.vue'

import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: { Footer, SectionCard, SectionTable, SectionShedule },
  props: {
    isOpen: Boolean
  },
  setup () {
    const store = useStore()

    const getCardCustomer = computed(() => store.state.cardLatestCustomer)
    const getCardProducts = computed(() => store.state.cardTopProducts)

    return { getCardCustomer, getCardProducts }
  }
}
</script>

<template>
  <main>
    <SectionShedule />
      <div class="block-info">
        <SectionCard :card="getCardCustomer" style="flex-grow: 1"></SectionCard>
        <SectionCard :card="getCardProducts" style="flex-grow: 5; padding-left: 12px;"></SectionCard>
      </div>
    <SectionTable/>
    <Footer />
  </main>
</template>

<style lang="scss">
@import '../../../assets/styles/main.scss';
  main {
    flex: 1 1 auto;
    max-width: 100%;
    margin: 8px;

    .block-info{
        display: flex;
        flex: 1 3 auto;

        @media (max-width: 900px){
          flex-wrap: wrap;
        }
    }
  }
  </style>
