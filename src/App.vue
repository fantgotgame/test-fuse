<template>
  <div class="container">
    <router-view></router-view>
<!--    <developments-component></developments-component>-->
  </div>
</template>

<script>
// import DevelopmentsComponent from "./components/DevelopmentsComponent";
    export default {
        name: 'App',
    }
</script>

<style>
  #app {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    box-sizing: border-box;
  }
  .container {
    max-width: 1280px;
    margin: 0 auto;
  }
</style>
