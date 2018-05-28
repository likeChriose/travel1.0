<template>
  <div>
    <ul class="list">
      <li class="item" v-for= "(json,key) of cities" :key= "key">{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphaList',
  props: {
    cities:Object,
  }
}
</script>

<style lang= "stylus" scoped>
  @import '~style/varibles.styl';
  .list
    display:flex
    flex-direction:column
    justify-content:center
    position:absolute
    top:1.58rem
    width:0.4rem
    bottom:0
    right:0
    .item
      text-align:center
      line-height:0.4rem
      color:$bgColor
</style>
