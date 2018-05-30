<template>
  <div>
    <div class="search">
      <input type="text" placeholder= "输入城市名称/拼音" class= "search-input" v-model= "keyword" >
    </div>
    <div class="search-content" v-show= "this.keyword" ref="search">
      <ul>
        <li
          v-for= "item of list "
          :key= "item.id"
          class="item-content"
          @click="handelCityClick(item.name)"
        >{{item.name}}</li>
        <li class="item-content border-bottom" v-show= "hasData">没有找到数据</li>
      </ul>
    </div>

  </div>

</template>

<script>
  import Bscroll from 'better-scroll'
  import {mapMutations} from 'vuex'
  export default {
    name: 'CitySearch',
    props: {
      cities:Object,
    },
    methods: {
      handelCityClick(city) {
        this.changeCity(city)
        this.$router.push({
          path: '/',
        });
      },
      ...mapMutations(['changeCity'])
    },
    data() {
      return {
        keyword: '',
        timer: null,
        list: [],
      }
    },
    computed: {
      hasData() {
        return !this.list.length
      }
    },
    mounted() {
      this.scroll= new Bscroll(this.$refs.search)
    },
    watch:{
      keyword() {
        const res =[];
        if(!this.keyword) {
          this.list =[];
        };
        // console.log(list);
        if(this.timer){
          clearTimeout(this.timer)
        };
        this.timer=setTimeout(()=>{
          for(let i in this.cities){
            this.cities[i].forEach((value)=>{
              if(value.name.indexOf(this.keyword)>-1 || value.spell.indexOf(this.keyword)>-1){
                res.push(value)
              }
            })
          }
          this.list =res
        },100)
      }
    },
  }
</script>

<style lang= "stylus" scoped>
  @import "~style/varibles.styl";
  .search
    height:0.72rem
    background: $bgColor
    padding:0 0.2rem
    .search-input
      box-sizing:border-box
      width: 100%
      height:0.62rem
      line-height:0.62rem
      text-align:center
      padding:0 0.1rem
      border-radius: 0.06rem
      color:#666
  .search-content
    z-index:1
    position:absolute
    overflow:hidden
    top:1.58rem
    bottom:0
    left:0
    right:0
    background:#eee
    .item-content
      line-height:0.64rem;
      padding-left:.2rem
      background:#fff
</style>
