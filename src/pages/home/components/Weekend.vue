<template>
  <div>
    <div class="title">
      周末去哪儿
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of this.list" :key="item.id">
        <div class="item-wrapper">
          <img :src="item.imgUrl" class= "item-image">
        </div>
        <div class="item-info">
          <p class= "item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array,
  }
}
</script>

<style lang= "stylus" scoped>
  @import '~style/mixins.styl';
  .title
    line-height:0.8rem
    background:#eee
    text-indent:0.2rem
  .item-wrapper
    height:0
    overflow:hidden
    padding-bottom:37.09%
    .item-image
      width:100%
  .item-info
    padding:.1rem
    min-width:0
    .item-title
      line-height:0.54rem
      font-size:0.32rem
      ellipse()
    .item-desc
      line-height:0.4rem
      color:#ccc
      ellipse()
</style>
