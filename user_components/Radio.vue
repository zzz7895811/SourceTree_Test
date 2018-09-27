<template>
  <el-container>
    <el-main>
      <div>
        <el-radio-group v-model="radio1" v-for="item in items" @change="change">
          <el-radio-button :label="item"></el-radio-button>
        </el-radio-group>
      </div>
      
    </el-main>
  </el-container>
</template>
<script type="es6">
  export default {
    name: 'Radio',
    data () {
      return {
        radio1: '北京',
        items: ['上海', '北京']
      }
    },
    methods: {
      change(num){
        console.log(num)
        console.log("radio1:" + this.radio1)
      }
    }
  }
</script>
