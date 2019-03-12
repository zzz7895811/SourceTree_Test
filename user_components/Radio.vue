<template>
  <el-container>
    <el-main>
      <div>
       <el-radio-group v-model="radio1" v-for="(item,index) in items" @change="change" :key="index">
          <el-radio-button  :label="item"></el-radio-button>-->
        </el-radio-group>
        <el-button type="primary" id="btnAdd" @click="click1">添加</el-button>
      </div>
      <div>
        <el-radio-group v-model="radio1" >
          <el-radio-button v-for="(item,index) in items" :label="item" :key="index"></el-radio-button>
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

      },
      click1(){
        let arr=['广州','深圳']
        var $this=this
        arr.forEach(function (a) {
          $this.items.push(a)
        })
      }
    }
  }
</script>
