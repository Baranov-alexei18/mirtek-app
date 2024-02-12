<template>
    <main>
        <SectionShedule />
        <div class="block-info">
            <SectionCard :card="cardLatestCustomer" style="flex-grow: 1"></SectionCard>
            <SectionCard :card="cardTopProducts" style="flex-grow: 3"></SectionCard>
        </div>
        <SectionTable/>
        <Footer />
    </main>

  </template>

<script>
import Footer from '../app-footer/Footer.vue'
import SectionCard from './SectionCard.vue'
import SectionShedule from './SectionShedule.vue'
import SectionTable from './SectionTable.vue'

export default {
  components: { Footer, SectionCard, SectionTable, SectionShedule },
  props: {
    isOpen: Boolean
  },
  data () {
    return {
      cardLatestCustomer: {
        titleName: 'Latest Customers',
        items: [
          {
            userUrl: require('../../../assets/img/users/user1.png'),
            title: 'Neil Sims',
            subtitle: 'email@example.com',
            value: '$367'
          },
          {
            userUrl: require('../../../assets/img/users/user2.png'),
            title: 'Bonnie Green',
            subtitle: 'email@example.com',
            value: '$67'
          },
          {
            userUrl: require('../../../assets/img/users/user3.png'),
            title: 'Micheal Gough',
            subtitle: 'email@example.com',
            value: '$3467'
          },
          {
            userUrl: require('../../../assets/img/users/user4.png'),
            title: 'Thomas Lean',
            subtitle: 'email@example.com',
            value: '$2367'
          },
          {
            userUrl: require('../../../assets/img/users/user5.png'),
            title: 'Lana Byrd',
            subtitle: 'email@example.com',
            value: '$367'
          },
          {
            userUrl: require('../../../assets/img/users/user6.png'),
            title: 'Karen Nelson',
            subtitle: 'email@example.com',
            value: '$1367'
          }
        ]
      },
      cardTopProducts: {
        titleName: 'Top products',
        items: [
          {
            title: 'Restaurant Booking App',
            subtitle: 'React & Bootstrap Framework',
            value: '70 sales'
          },
          {
            title: 'UI Kit',
            subtitle: 'React & Bootstrap Framework',
            value: '54 sales'
          },
          {
            title: 'Design System Pro',
            subtitle: 'Bootstrap Framework',
            value: '47 sales'
          },
          {
            title: 'Dashboard',
            subtitle: 'Tailwind, React',
            value: '43 sales'
          },
          {
            userUrl: '',
            title: 'Glassmorphism UI',
            subtitle: 'Vue Js, Tailwind ',
            value: '38 sales'
          },
          {
            userUrl: '',
            title: 'Multipurpose Template',
            subtitle: 'React & Bootstrap Framework',
            value: '22 sales'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/styles/main.scss';
  main {
    flex: 1 1 auto;
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
