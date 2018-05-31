<template>
  <div>
    <div class="banner" @click="handelShow">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">
          {{this.sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe603;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <common-gallary
      :gallaryImgs="gallaryImgs"
      v-show="showit"
      @closeIt= "handelClose"
    ></common-gallary>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary';
export default {
  name:'DetailBanner',
  data() {
    return {
      showit:false
    }
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array,
    categoryList: Array,
  },
  components:{
    CommonGallary,
  },
  methods: {
    handelShow() {
      this.showit=true
    },
    handelClose() {
      this.showit=false
    }
  },
}
</script>

<style lang="stylus" scoped>
  .banner
    position:relative
    overflow:hidden
    height:0
    padding-bottom:55%
    .banner-img
      width:100%
    .banner-info
      display:flex
      position:absolute
      left:0
      right:0
      bottom:0
      color:#fff
      background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      line-height:0.6rem
      .banner-title
        padding:0 0.2rem
        font-size:0.32rem
        flex:1
      .banner-number
        height:0.32rem
        margin:0.14rem 0.2rem 0 0
        padding:0 0.4rem
        font-size:.24rem
        line-height:0.32rem
        border-radius:0.2rem
        background:rgba(0,0,0,0.8)
        .banner-icon
          font-size:.32rem
          vertical-align:middle
</style>
