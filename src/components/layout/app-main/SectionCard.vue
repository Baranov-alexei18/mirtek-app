<script>
import Avatar from '@/components/shared/Avatar.vue'
import CardItem from '../../shared/card/CardItem.vue'
import BaseCardVue from '../../shared/card/BaseCard.vue'

export default {
  components: { CardItem, Avatar, BaseCardVue },
  props: ['card']
}
</script>

<template>
  <BaseCardVue class="card">
    <spam class="card-title">{{ card.titleName }}</spam>
    <div class="card-items"
      v-for="(item, idx) of card.items"
      :key="idx"
      :class="{ 'last-item': idx === card.items.length - 1 }">
        <CardItem :title="item.title" :subtitle="item.subtitle" :value="item.value">
          <template v-if="item.userUrl" v-slot:avatar>
            <Avatar  :url="item.userUrl" style="margin-right: 10px;"/>
          </template>
        </CardItem>
      </div>
  </BaseCardVue>
</template>

<style scoped lang="scss">
@import '../../../assets/styles/main.scss';
.card{
    padding: 32px 20px 12px 20px;
    .card-title{
      display: flex;
      font-size: 20px;
      font-weight: 700;
      margin-left: 0px !important;
      margin-bottom: 20px;
    }
    .card-items{
      border-bottom: 1px solid $grey-200;
    }
    .last-item{
      border-bottom: none;
      margin-bottom: 8px
    }
@media (max-width: 768px) {
      padding: 20px 16px 4px 12px !important;
    }
    .card-title{
      margin-bottom: 20px;
      margin-left: 8px;
    }
}
</style>
