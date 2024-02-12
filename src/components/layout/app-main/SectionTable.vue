<template>
    <section class="section-table">
        <h2 style="display: flex">Transactions</h2>
        <h4 style="display: flex">This is a list of latest transactions.</h4>
        <div>
    <table>
      <thead>
        <tr>
          <th>TRANSITION</th>
          <th>DATE & TIME</th>
          <th>AMOUNT</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index" :class="{ 'second-row': index % 2 !== 0 }">
          <td style="max-width: 325px;">{{ item.transition }}</td>
          <td style="max-width: 360px;">{{ item.dateTime }}</td>
          <td style="max-width: 405px;">
            <b>
              {{ item.amount }}
            </b>
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
    </section>
  </template>

<script>
import Chip from '../../shared/Chips/Chip.vue'

export default {
  components: { Chip },
  data () {
    return {
      items: [
        { transition: 'Payment from Bonnie Green', dateTime: 'Apr 23 ,2021', amount: '$2300', status: { title: 'Completed', bgColor: '#DEF7EC', textColor: '#83B3A4' } },
        { transition: 'Payment refund to #00910', dateTime: 'Apr 23 ,2021', amount: '-$670', status: { title: 'Completed', bgColor: '#DEF7EC', textColor: '#83B3A4' } },
        { transition: 'Payment failed from #087651', dateTime: 'Apr 18 ,2021', amount: '$234', status: { title: 'Cancelled', bgColor: '#FBD5D5', textColor: '#CB7979' } },
        { transition: 'Payment from Bonnie Green', dateTime: 'Apr 15 ,2021', amount: '$5000', status: { title: 'In progress', bgColor: '#E1EFFE', textColor: '#9CB2DC' } },
        { transition: 'Payment from Jese Leos', dateTime: 'Apr 15 ,2021', amount: '$2300', status: { title: 'In progress', bgColor: '#E1EFFE', textColor: '#9CB2DC' } },
        { transition: 'Payment from THEMSBERG LLC', dateTime: 'Apr 11 ,2021', amount: '$280', status: { title: 'Completed', bgColor: '#DEF7EC', textColor: '#83B3A4' } }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/main.scss';
.section-table{
    padding: 8px 16px;
    margin-bottom: 12px;
    margin-right: 8px;
    background-color: $main-white-color;
    border-radius: $base-border-radius;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
    overflow-x: auto;

  table {
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;

  }

  th{
    height: 50px;
    padding: 8px;
    text-align: left;
    background-color: $grey-50;
    border-bottom: 2px solid $grey-200;
    border-top-left-radius: $medium-border-radius;
    border-top-right-radius: $medium-border-radius;
  }
  td {
    height: 50px;
    padding: 8px;
    text-align: left;
    border-radius: $medium-border-radius;

    .chips {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    }
  }
  .second-row {
    background-color: $grey-50;
  }
}
</style>
