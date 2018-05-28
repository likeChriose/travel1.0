<template>
  <div class="list">
    <div class="area border-topbottom">
      <div class="title">当前城市</div>
      <div class="button-list">
      <div class="button-wrapper">
        <div class="button">北京</div>
      </div>
    </div>

    </div>
    <div class="area border-topbottom">
      <div class="title">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div><div class="button-wrapper">
        <div class="button">北京</div>
      </div><div class="button-wrapper">
        <div class="button">北京</div>
      </div><div class="button-wrapper">
        <div class="button">北京</div>
      </div><div class="button-wrapper">
        <div class="button">北京</div>
      </div>





      </div>
    </div>
    <div class="area border-topbottom">
      <div class="title">A</div>
      <div class="item-list">
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉伯</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
        <div class="item border-bottom">阿乱七八糟</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList',
}
</script>

<style lang= "stylus" scoped>
  @import '~style/varibles.styl';
  .border-topbottom
    &:before
      border-color:#ccc
    &:after
      border-color:#ccc
  .border-bottom
    &:before
      border-color:#ccc
  .list
    position:absolute
    overflow:hidden
    top:1.58rem
    left:0
    right:0
    bottom:0
    .title
      height: 0.44rem
      line-height:0.44rem
      font-size:0.26rem
      background:#eee
      padding-left: 0.2rem
      color:#666
    .button-list
      overflow:hidden
      padding:0.1rem 0.6rem 0.1rem 0.1rem
      .button-wrapper
        float: left
        width:33.33%
        .button
          text-align:center
          padding:0.1rem 0
          margin:0.1rem
          border:0.02rem solid #ccc
          border-radius: 0.06rem
          color: #000
    .item-list
      .item
        color:#666
        line-height:0.76rem
        padding-left:0.2rem
</style>
