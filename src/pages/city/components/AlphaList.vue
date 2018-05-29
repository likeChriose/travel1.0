<template>
  <div>
    <ul class="list">
      <li class="item"
          v-for= "key of letter"
          :key= "key"
          :ref= "key"
          @click= "handelClick"
          @touchstart= "handelstart"
          @touchmove= "handelmove"
          @touchend= "handelend"
      >{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphaList',
  data () {
    return {
      touchstatus: false,
      startY: 0,
      timer: null,
    }
  },
  updated() {
    this.startY = this.$refs['A'][0].offsetTop;
  },
  props: {
    cities: Object,
  },
  computed:{
    letter(){
      const letters = [];
      for(let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handelClick (e) {
      this.$emit('change',e.target.innerText)
    },
    handelstart () {
      this.touchstatus= true;
    },
    handelmove (e) {
        if(this.touchstatus) {
          if(this.timer) {
            clearTimeout(this.timer)
          };
          this.timer = setTimeout(() => {
            const durY = e.touches[0].clientY - 79;
            const index = Math.floor((durY-this.startY)/this.$refs['A'][0].offsetWidth)
            if(index >= 0 && index < this.letter.length) {
              this.$emit('change',this.letter[index]);
            }
          })
        }
    },
    handelend () {
      this.touchstatus= false;
    },
  }
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
