<template>
  <main-page>
    <header-compo></header-compo>
  </main-page>
</template>

<script>
import MainPage from './views/MainPage.vue';
import HeaderCompo from './components/HeaderCompo.vue';
export default{
  components: {
    MainPage, HeaderCompo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
