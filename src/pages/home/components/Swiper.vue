<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide>
        <img src="http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg" alt="" class="swiper-img"/>
      </swiper-slide>
      <swiper-slide>
        <img src="http://img1.qunarzz.com/piao/fusion/1805/77/f63bd04dd5319602.jpg_750x200_6ba8e0ca.jpg" alt="" class="swiper-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {},
    };
  },
};
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow: hidden
    width:100%
    height:0
    padding-bottom: 26.6%
    .swiper-img
      width: 100%
</style>
