<!--suppress ALL -->
<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to= "/city">
      <div class="header-right">
        {{this.nowCity}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  props: {
    city: String,
  },
  computed: {
    ...mapState({
      nowCity: 'city'
    })
  }
};
</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl';
  .header
    display:flex
    line-height:0.86rem
    background:$bgColor
    color:#fff
    .header-left
      width: 0.64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      margin-top :.12rem
      line-height .64rem
      height :.64rem
      margin-left :.2rem
      padding-left :0.2rem
      background: #fff
      border-radius .1rem
      color:#ccc
    .header-right
      min-width: 1.4rem
      padding:0 0.1rem
      float: right
      text-align :center
      color: #fff
      .arrow-icon
        font-size .24rem
        margin-left :-.04rem
</style>
