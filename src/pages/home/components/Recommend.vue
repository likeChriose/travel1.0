<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img :src="item.imgUrl" class= "item-image">
        <div class="item-info">
          <p class= "item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList:[{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg',
        title: '大连度假胜地',
        desc: '浪漫大连，海洋公园'
      },{
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
        title: '大连度假胜地',
        desc: '浪漫大连，海洋公园'
      },{
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/b3/b33a7caa457c0a52.img.jpg_200x200_fe73bd81.jpg',
        title: '大连度假胜地',
        desc: '浪漫大连，海洋公园'
      },],
    }
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
