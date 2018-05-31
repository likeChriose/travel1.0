<template>
  <div>
    <router-link tag="div" class="header-abs"  to="/" v-show="!show">
      <div class="iconfont header-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="show" :style="opacityStyle">
      景点详情
      <router-link tag="div" to="/" >
        <div class="iconfont header-fixed-icon">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailHeader',
  data() {
    return {
      show:false,
      opacityStyle:{
        opacity:0
      }
    }
  },
  methods: {
    handelScroll() {
      const element = document.documentElement.scrollTop
      if(element >60) {
        this.show =true;
        const opacity = opacity>1 ? 1 :element/240;
        this.opacityStyle={opacity}
      }else{
        this.show =false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll',this.handelScroll)
  },
  destroyed () {
    window.removeEventListener('scroll',this.handelScroll)
  },
}
</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl';
  .header-abs
    position:absolute
    left:0.2rem
    top:0.2rem
    width:0.8rem
    height:0.8rem
    line-height:0.8rem
    text-align:center
    border-radius:0.4rem
    background:rgba(0,0,0,0.8)
    .header-icon
      color:#fff
      font-size:0.4rem
  .header-fixed
    position:fixed
    z-index:10
    top:0
    left:0
    right:0
    width: 100%
    height:0.86rem
    text-align:center
    line-height:0.86rem
    background:$bgColor
    font-size: 0.32rem
    .header-fixed-icon
      position: absolute
      left:0
      top: 0
      width:0.64rem
      text-align:center
      color: #fff
      font-size: 0.4rem
</style>
