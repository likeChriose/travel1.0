<template>
  <div class="list" ref= "wrapper">
    <div>
      <div class="area border-topbottom">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.nowCity}}</div>
          </div>
        </div>
      </div>

      <div class="area border-topbottom">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for= "item of hotCities" :key="item.id">
            <div class="button" @click="handelCityClick(item.name)">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area border-topbottom"
           v-for= "(json,key) of cities"
           :key= "key"
           :ref= "key"
      >
        <div class="title">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for= "item of json"
               :key= "key.id"
               @click="handelCityClick(item.name)"
          >{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll';
import  {mapState,mapMutations} from 'vuex'

export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  methods:{
    handelCityClick(city) {
      this.changeCity(city)
      this.$router.push({
        path: '/',
      });
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    ...mapState({
      nowCity: 'city'
    })
  },
  props: {
    cities:Object,
    hotCities: Array,
    letters :String,
  },
  watch: {
    letters(){
      if(this.letters) {
        const element = this.$refs[this.letters][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
};
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
