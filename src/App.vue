<template>
  <div id="app">
    <img src="./assets/logo.png">

    <router-view/>

    <div class="container">

    </div>
  </div>
</template>

<script type="es6">
  import eleUI from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css';
  import Vue from 'vue'
  import elementUIVerify from 'element-ui-verify'
  import Gantt from '../user_components/GanttDemo.vue'

  Vue.use(eleUI);
  Vue.use(elementUIVerify)


  export default {
    name: 'App',

    data () {
      return {

      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
