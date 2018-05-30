<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of this.list" :key="item.id"
        :to="'/detail/'+item.id"
      >
        <img :src="item.imgUrl" class= "item-image">
        <div class="item-info">
          <p class= "item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array,
  }
}
</script>

<style lang= "stylus" scoped>
  @import '~style/mixins.styl';
  .title
    line-height:0.8rem
    margin-top:0.2rem
    background:#eee
    text-indent:0.2rem
  .item
    overflow:hidden
    display:flex
    height:1.9rem
    .item-image
      width:1.7rem
      height:1.7rem
      padding:.1rem
    .item-info
      flex:1
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
      .item-button
        margin-top:0.2rem
        padding:0 0.2rem
        border-radius:0.06rem
        background:orange


</style>
