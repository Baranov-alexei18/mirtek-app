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
        :style="{backgroundColor:  activeItem === index ? item.activeColor: 'inherit'}">
        <div class="icon-label">
          <component :is="item.icons" :color="item.defaultColor"/>
        </div>
        {{ item.label }}
        <i
          v-if="item.submenu"
          class="arrow-icon fas"
          :class="{'fa-chevron-up': isSubmenuOpen(index), 'fa-chevron-down': !isSubmenuOpen(index)}"
          style="margin-left: auto"
        ></i>
        <Chip v-if="item.count" width="20px" height="20px" textColor="RGB(183, 82, 82)" bgColor="RGB(251, 213, 213)" radius="12px" style="margin-left: auto">
            {{item.count}}
        </Chip>
      </div>
      <div v-if="isSubmenuOpen(index)" class="submenu">
        <nav class="submenu-item" v-for="(subItem, subIndex) in item.submenu" :key="subIndex">
          {{ subItem }}
        </nav>
      </div>
      <div v-if="!item.label" style="border: 1px solid #EEF0F3; width: 258px; margin: 0; margin-left: -20px"></div>
    </div>
  </div>
</template>

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

export default {
  components: { Chip },
  props: {
    isOpen: Boolean
  },
  data () {
    return {
      menuNav: [
        { label: 'Overview', icons: ChartPieVue, defaultColor: '#0E9F6E' },
        { label: 'Pages', icons: PageIcon, submenu: ['Pages 1', 'Pages 2', 'Pages 3'], isOpen: false, defaultColor: 'black', activeColor: '#F3F4F6' },
        { label: 'Sales', icons: SalesIcons, submenu: ['Product List', 'Billing', 'Invoice'], isOpen: false, defaultColor: 'black', activeColor: '#F3F4F6' },
        { label: 'Messages', icons: MessageIcon, defaultColor: 'black', count: 1 },
        { label: 'Authentication', icons: LockIcon, submenu: ['Authentication 1', 'Authentication 2'], isOpen: false, defaultColor: 'black', activeColor: '#F3F4F6' },
        {},
        { label: 'Docs', icons: DocumentIcon, defaultColor: 'black' },
        { label: 'Components', icons: ComponentIcon, defaultColor: 'black' },
        { label: 'Help', icons: HelpIcon, defaultColor: 'black' }
      ],
      activeItem: null
    }
  },
  methods: {
    toggleSubmenu (index) {
      this.activeItem = this.activeItem === index ? null : index
    },
    isSubmenuOpen (index) {
      return this.activeItem === index
    },
    isSubmenu (index) {
      console.log(this.menuNav[index].submenu)
      return this.menuNav[index].submenu > 0
    }

  }
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/main.scss';

.sidebar-open {
  left: 0;
}

.menu-item {
  color: black;
  margin: 10px;
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
  }
}

.submenu {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  color: black;
  margin-left: 36px;
}

.submenu-item {
  padding: 10px 0 ;
  padding-left: 10px;
}
</style>
