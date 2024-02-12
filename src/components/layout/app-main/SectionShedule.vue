<template>
    <section class="section-shedule">
        <h2 style="display: flex">Sales</h2>

    </section>
  </template>

<script>

export default {
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
.section-shedule{
    height: 500px;
    padding: 8px 16px;
    margin-bottom: 12px;
    margin-right: 8px;
    background-color: $main-white-color;
    border-radius: $base-border-radius;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
    overflow-x: auto;
}
</style>
