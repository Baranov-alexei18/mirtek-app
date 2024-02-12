<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <section class="card">
        <h2 style="display: flex">{{ card.titleName }}</h2>
        <div class="card-items"
            v-for="(item, idx) of card.items" :key="idx" :class="{ 'last-item': idx === card.items.length - 1 }">
            <CardItem :title="item.title" :subtitle="item.subtitle" :value="item.value">
              <template v-if="item.userUrl" v-slot:avatar>
                <Avatar  :url="item.userUrl"/>
              </template>
            </CardItem>
        </div>
    </section>
  </template>

<script>
import Avatar from '@/components/shared/Avatar.vue'
import CardItem from '../../shared/card/CardItem.vue'

export default {
  components: { CardItem, Avatar },
  props: ['card'],
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/main.scss';
section{
    padding: 8px 16px;
    margin-bottom: 12px;
    margin-right: 8px;
    background-color: $main-white-color;
    border-radius: $base-border-radius;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);

    .card-items{
    padding: 12px 0;
    border-bottom: 1px solid $grey-200;
    }
    .last-item{
    border-bottom: none
}
}
</style>
