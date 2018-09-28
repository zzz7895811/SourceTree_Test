<template>
    <div style="width:140px">
      <el-tooltip content="点击关闭 tooltip 功能" placement="bottom" effect="light" style="background-color: #000088">

      <el-input v-model="input1" placeholder="请输入内容" >
        <i slot="prefix" class="el-input__icon el-icon-warning" @click="clickTip('1')"></i>
      </el-input>
      </el-tooltip>
    </div>
</template>
<script type="es6">
  export default {
    data(){
      return{
        input1:""
      }
    },
    methods:{
      clickTip(num){

      }
    }
  }

</script>
