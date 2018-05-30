<template>
  <div>
    <City-header></City-header>
    <City-search :cities= "cities"></City-search>
    <city-list :hotCities="hotCities" :cities= "cities" :letters= "letters"></city-list>
    <city-alphaList
      :cities= "cities"
      @change= "handelChange"
    ></city-alphaList>
  </div>
</template>

<script>
import axios from 'axios';
import CityHeader from './components/Header';
import CitySearch from './components/Search';
import CityList from './components/List';
import CityAlphaList from './components/AlphaList';
import {mapState} from 'vuex';
export default {
  name: 'City',
  data () {
    return {
      lastCity: '',
      cities: {},
      hotCities: [],
      letters: '',
    }
  },
  computed: {
    ...mapState(['city'])
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphaList,
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json?city='+this.city).
      then(this.getCityInfoSuccess)
    },
    getCityInfoSuccess(msg) {
      msg = msg.data;
      if(msg.ret && msg.data) {
        const res = msg.data;
        this.cities= res.cities;
        this.hotCities=res.hotCities;
      }
    },
    handelChange (letters) {
      this.letters = letters;
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getCityInfo()
  },
  activated(){
    if(this.lastCity !== this.city){
      this.lastCity = this.city
      this.getCityInfo()
    }

  },
};
</script>

<style lang= "stylus" scoped>
  @import '~style/varibles.styl';
</style>
