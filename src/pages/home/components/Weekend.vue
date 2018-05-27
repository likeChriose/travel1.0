<template>
  <div>
    <div class="title">
      周末去哪儿
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
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
    data() {
      return {
        weekendList:[{
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          title: '大连度假胜地',
          desc: '浪漫大连，海洋公园'
        },{
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg',
          title: '大连度假胜地',
          desc: '浪漫大连，海洋公园'
        },{
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
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
  .item-wrapper
    height:0
    overflow:hidden
    padding-bottom:37%
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
