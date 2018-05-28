<template>
  <div>
    <ul class="list">
      <li class="item">A</li>
      <li class="item">B</li>
      <li class="item">B</li>
      <li class="item">D</li>
      <li class="item">E</li>
      <li class="item">F</li>
      <li class="item">G</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphaList',
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
