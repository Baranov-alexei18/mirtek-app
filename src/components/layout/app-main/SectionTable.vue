<script>
import BaseCardVue from '../../shared/card/BaseCard.vue'
import Chip from '../../shared/Chips/Chip.vue'

import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  components: { Chip, BaseCardVue },
  setup () {
    const items = [
      { transition: 'Payment from ', transitionBold: 'Bonnie Green', dateTime: 'Apr 23, 2021', amount: '$2300', status: { title: 'Completed', bgColor: '#DEF7EC', textColor: '#83B3A4' } },
      { transition: 'Payment refund to ', transitionBold: '#00910', dateTime: 'Apr 23, 2021', amount: '-$670', status: { title: 'Completed', bgColor: '#DEF7EC', textColor: '#83B3A4' } },
      { transition: 'Payment failed from ', transitionBold: '#087651', dateTime: 'Apr 18, 2021', amount: '$234', status: { title: 'Cancelled', bgColor: '#FBD5D5', textColor: '#CB7979' } },
      { transition: 'Payment from ', transitionBold: 'Bonnie Green', dateTime: 'Apr 15, 2021', amount: '$5000', status: { title: 'In progress', bgColor: '#E1EFFE', textColor: '#9CB2DC' } },
      { transition: 'Payment from ', transitionBold: 'Jese Leos', dateTime: 'Apr 15, 2021', amount: '$2300', status: { title: 'In progress', bgColor: '#E1EFFE', textColor: '#9CB2DC' } },
      { transition: 'Payment from ', transitionBold: 'THEMSBERG LLC', dateTime: 'Apr 11, 2021', amount: '$280', status: { title: 'Completed', bgColor: '#DEF7EC', textColor: '#83B3A4' } }
    ]
    const store = useStore()

    const getTheme = computed(() => store.state.darkTheme)

    return { items, getTheme }
  }
}
</script>

<template>
  <BaseCardVue class="section-table" :class="{ 'dark-mode': getTheme }">
      <span class="section-title">Transactions</span>
      <span class="section-subtitle">This is a list of latest transactions.</span>
      <div>
      <table>
        <thead>
          <tr>
            <th style="min-width: 250px; width: 250px">TRANSITION</th>
            <th style="min-width: 150px">DATE & TIME</th>
            <th style="min-width: 150px; width: 390px">AMOUNT</th>
            <th style="min-width: 120px; width: 240px">STATUS</th>
          </tr>
        </thead>
         <tbody>
           <tr v-for="(item, index) in items" :key="index" :class="{ 'second-row': index % 2 !== 0 }">
             <td>
              <span class="td-title">
                {{ item.transition }}
                <b style="font-weight:800;">{{ item?.transitionBold }} </b>
              </span>
            </td>
            <td>
              <span class="td-date">
                {{ item.dateTime }}
              </span>
            </td>
             <td>
               <span class="td-count">
                 {{ item.amount }}
               </span>
             </td>
             <td>
               <Chip width="83px" height="22px" radius="10px" :bgColor="item.status.bgColor" :textColor="item.status.textColor" class="chips">
                 {{ item.status.title }}
               </Chip>
             </td>
           </tr>
         </tbody>
       </table>
     </div>
  </BaseCardVue>
</template>

<style scoped lang="scss">
@import '../../../assets/styles/main.scss';
.section-table{
    padding: 20px 16px 16px 16px !important;

    .section-title{
      display: flex;
      font-size: 20px;
      font-weight: 700;
    }
    .section-subtitle{
      display: flex;
      color: $grey-500;
      font-size: 15px;
      margin-top: 4px;
    }
    table {
      width: 100%;
      color: $grey-500;
      border-collapse: collapse;
      overflow-x: auto;
      margin-top: 16px;
      font-size: 12px;
      font-weight: 400;

      th{
      height: 50px;
      padding-left: 16px;
      text-align: left;
      background-color: $grey-50;
      border-bottom: 2px solid $grey-200;
      border-top-left-radius: $medium-border-radius;
      border-top-right-radius: $medium-border-radius;
      }

      td {
      height: 52px;
      font-size: 12px;
      padding-left: 16px;
      margin: 0;
      text-align: left;
      border-radius: $medium-border-radius;

      .td-title{
        font-size: 13px;
        font-weight: 600;
        margin-left: auto;
      }
      .td-date{
        font-size: 15px;
        font-weight: 500;
        margin-left: auto;
      }
      .td-count{
        font-size: 18px;
        font-weight: 700;
        margin-left: auto;
      }
      .chips {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
      }
    }
  }
  .second-row {
    background-color: $grey-50;
  }
}
.dark-mode{
    background-color: #252a2d;
    color: $grey-400;
    border-bottom: black;
    .section-table{
      th{
      background-color: rgb(45, 42, 42);
      border-bottom: 2px solid $grey-600;
      }
    }
    .second-row {
    background-color: rgb(45, 42, 42);
  }
  }
</style>
