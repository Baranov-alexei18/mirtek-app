<script>
import ChartPieVue from '../../../assets/icons/ChartPieIcon.vue'
import DocumentIcon from '../../../assets/icons/DocumentIcon.vue'
import SalesIcons from '../../../assets/icons/SalesIcons.vue'
import MessageIcon from '../../../assets/icons/MessageIcon.vue'
import LockIcon from '../../../assets/icons/LockIcon.vue'
import PageIcon from '../../../assets/icons/PageIcon.vue'
import ComponentIcon from '../../../assets/icons/ComponentIcon.vue'
import HelpIcon from '../../../assets/icons/HelpIcon.vue'

import Chip from '../../shared/Chips/Chip.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: { Chip },
  props: {
    isOpen: Boolean
  },
  setup () {
    const store = useStore()
    const menuNav = ref([
      { label: 'Overview', icons: ChartPieVue, defaultColor: '#0E9F6E' },
      { label: 'Pages', icons: PageIcon, submenu: ['Pages 1', 'Pages 2', 'Pages 3'], isOpen: false, defaultColor: 'black', activeColor: '#F3F4F6' },
      { label: 'Sales', icons: SalesIcons, submenu: ['Product List', 'Billing', 'Invoice'], isOpen: false, defaultColor: 'black', activeColor: '#F3F4F6' },
      { label: 'Messages', icons: MessageIcon, defaultColor: 'black', count: 1 },
      { label: 'Authentication', icons: LockIcon, submenu: ['Authentication 1', 'Authentication 2'], isOpen: false, defaultColor: 'black', activeColor: '#F3F4F6' },
      {},
      { label: 'Docs', icons: DocumentIcon, defaultColor: 'black' },
      { label: 'Components', icons: ComponentIcon, defaultColor: 'black' },
      { label: 'Help', icons: HelpIcon, defaultColor: 'black' }
    ])
    const activeItem = ref(null)

    const toggleSubmenu = (index) => {
      activeItem.value = activeItem.value === index ? null : index
    }

    const isSubmenuOpen = (index) => {
      return activeItem.value === index
    }

    const isSubmenu = (index) => {
      return menuNav.value[index].submenu > 0
    }

    const getTheme = computed(() => {
      return store.state.darkTheme
    })

    return { menuNav, activeItem, toggleSubmenu, isSubmenuOpen, isSubmenu, getTheme }
  }
}
</script>

<template>
  <div>
    <div
      class="menu-item"
      v-for="(item, index) in menuNav"
      :key="index"
      @click="toggleSubmenu(index)"
      :style="{ color: item.defaultColor,}"
      >
      <div
        class="menu-label"
        :class="{ 'dark-mode': getTheme }"
        :style="{backgroundColor:  activeItem === index && !getTheme ? item.activeColor: 'inherit'}">
        <div class="icon-label">
          <component :is="item.icons" :color="item.defaultColor"/>
        </div>
        <span  style="margin-left: 7px">
          {{ item.label }}
        </span>
        <i
          v-if="item.submenu"
          class="arrow-icon fas"
          :class="{'fa-chevron-up': isSubmenuOpen(index), 'fa-chevron-down': !isSubmenuOpen(index)}"
          style="margin-left: auto"
        ></i>
        <Chip v-if="item.count" width="20px" height="20px" textColor="RGB(183, 82, 82)" bgColor="RGB(251, 213, 213)" radius="12px" class="chip-count">
            {{item.count}}
        </Chip>
      </div>
      <div v-if="isSubmenuOpen(index)" class="submenu" :class="{ 'dark-mode': getTheme }">
        <nav
        class="submenu-item"
         v-for="(subItem, idx) in item.submenu"
         :key="idx"
         :style="{marginBottom: idx === item.submenu.length - 1 ? '-6px':'0px' }"
         >
          {{ subItem }}
        </nav>
      </div>
      <div v-if="!item.label" class="chapter"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../../assets/styles/main.scss';
.menu-item {
  margin: 7px 16px 10px 10px;
  font-size: 18px;
  cursor: pointer;

  .menu-label{
    @include flex-start;
    border-radius: $medium-border-radius;
    padding: 8px;

    .icon-label{
    @include flex-center;
    @include element-size(100%, 25px);
    margin-right: 10px;
    }

    .chip-count{
      @include flex-center;
      font-size: 12px;
      margin-left: auto;
    }
  }
  .submenu {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 40px;
  .submenu-item {
  padding: 16px 0 ;
  padding-left: 10px;
}
}
.chapter{
  border: 1px solid #EEF0F3;
  width: 258px;
  margin: -16px 0px 20px -20px;
}
}
.dark-mode{
  background-color: rgb(51, 53, 54);
  color: $grey-200 !important;
  .menu-label{
   color: $green-100
  }
  .submenu{
    background-color:inherit
  }
  svg{
    filter: invert(70%);
  }
}
</style>
