import { createStore } from 'vuex'

export default createStore({
  state: {
    darkTheme: false,
    isSidebarOpen: false,
    cardLatestCustomer: {
      titleName: 'Latest Customers',
      items: [
        {
          userUrl: require('../assets/img/users/user1.png'),
          title: 'Neil Sims',
          subtitle: 'email@example.com',
          value: '$367'
        },
        {
          userUrl: require('../assets/img/users/user2.png'),
          title: 'Bonnie Green',
          subtitle: 'email@example.com',
          value: '$67'
        },
        {
          userUrl: require('../assets/img/users/user3.png'),
          title: 'Micheal Gough',
          subtitle: 'email@example.com',
          value: '$3467'
        },
        {
          userUrl: require('../assets/img/users/user4.png'),
          title: 'Thomas Lean',
          subtitle: 'email@example.com',
          value: '$2367'
        },
        {
          userUrl: require('../assets/img/users/user5.png'),
          title: 'Lana Byrd',
          subtitle: 'email@example.com',
          value: '$367'
        },
        {
          userUrl: require('../assets/img/users/user6.png'),
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
          value: '70 <span style="font-weight: 500">sales</span>'
        },
        {
          title: 'UI Kit',
          subtitle: 'React & Bootstrap Framework',
          value: '54 <span style="font-weight: 500">sales</span>'
        },
        {
          title: 'Design System Pro',
          subtitle: 'Bootstrap Framework',
          value: '47 <span style="font-weight: 500">sales</span>'
        },
        {
          title: 'Dashboard',
          subtitle: 'Tailwind, React',
          value: '43 <span style="font-weight: 500">sales</span>'
        },
        {
          userUrl: '',
          title: 'Glassmorphism UI',
          subtitle: 'Vue Js, Tailwind ',
          value: '38 <span style="font-weight: 500">sales</span>'
        },
        {
          userUrl: '',
          title: 'Multipurpose Template',
          subtitle: 'React & Bootstrap Framework',
          value: '22 <span style="font-weight: 500">sales</span>'
        }
      ]
    },
    dataShedule: [80000, 90000, 80000, 79000, 110000, 100000, 140000, 200000, 210000, 180000, 190000, 220000, 40000, 240000, 0]
  },
  getters: {
  },
  mutations: {
    toggleSidebar (state) {
      state.isSidebarOpen = true
    },
    closeSidebar (state) {
      state.isSidebarOpen = false
    },
    toggleTheme (state) {
      state.darkTheme = !state.darkTheme
    }
  },
  actions: {
    toggleSidebar ({ commit }) {
      commit('toggleSidebar')
    },
    closeSidebar ({ commit }) {
      commit('closeSidebar')
    },
    toggleTheme ({ commit }) {
      commit('toggleTheme')
    }
  },
  modules: {
  }
})
