<template>
  <div class= "city-header">
    城市选择
    <router-link to= "/">
      <div class="iconfont city-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
}
</script>

<style lang= "stylus" scoped>
  @import '~style/varibles.styl';
  .city-header
    position: relative
    overflow:hidden
    width: 100%
    height:0.86rem
    text-align:center
    line-height:0.86rem
    background:$bgColor
    font-size: 0.32rem
    .city-back
      position: absolute
      top: 0
      left: 0.1rem
      color: #fff
      font-size: 0.4rem

</style>
