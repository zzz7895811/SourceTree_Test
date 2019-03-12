<template>
    <div class="block">
      <p>Switch</p>

      <el-switch v-model="value1"
                 active-text="按月收费"
                 v-on:change="change1"
        >

      </el-switch>
      <el-switch v-model="value2"
                 active-text="按月收费"
                 inactive-text="按年收费"
                 v-on:change="change2"
        >

      </el-switch>

      <p>Slider</p>
      <el-slider v-model="value3"></el-slider>
      阈值范围{{value4[0]}}-{{value4[1]}}
      <el-slider v-model="value4" :step="5" range v-on:change="change3" show-stops></el-slider>
<span id="span1">123</span>
    </div>
</template>


<script type="es6">
  export default {
    data(){
      return {
        value1:true,
        value2:true,
        value3:40,
        value4:[0,40]
      }
    },
    methods:{
      change1: function (val) {
      $("#span1").text("aabbcc")
        console.log(val)
        console.log(this)
      },
      change2: function (val) {
        console.log(val)
      },
      change3: function (val) {
        console.log(val)
      }
    }

  }

</script>
