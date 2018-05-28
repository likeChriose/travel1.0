<template>
  <div>
    <City-header></City-header>
    <City-search></City-search>
    <city-list></city-list>
    <city-alphaList></city-alphaList>
  </div>
</template>

<script>
import CityHeader from './components/Header';
import CitySearch from './components/Search';
import CityList from './components/List';
import CityAlphaList from './components/AlphaList';
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphaList,
  },
};
</script>

<style lang= "stylus" scoped>
  @import '~style/varibles.styl';
</style>
