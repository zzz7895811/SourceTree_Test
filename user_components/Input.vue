<template>
  <div style="width:140px">
    <el-tooltip content="点击关闭 tooltip 功能" placement="top" effect="light">
      <el-input v-model="input1" placeholder="请输入内容" @keyup.native="search" type="number">
        <i slot="prefix" class="el-input__icon el-icon-warning" @click="clickTip('1')"></i>
      </el-input>
    </el-tooltip>
    <span>斐波那契:{{fibsNum}}</span>
    <p></p>
    <span>{{fibsSum}}</span>
    <el-input v-model="input2"  v-validate="'required|email'" type="text" name="Email1" >

    </el-input>
  </div>
</template>
<script type="es6">
  function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
      [a, b] = [b, a + b];
      yield b;
    }
  }
  //var nums = [10, 20, 30];
  //var sum = nums.reduce(function (sum1, num) {
  //  return sum1 += num;
  //}, 0)
  export default {
    data(){
      return {

        model:{age:0,mobile:0},
        input1: "1",
        input2: "",
        input3: "",
        fibsSum: 0
      }
    },

    methods: {
      clickTip(num){
        console.log(num)
      },
      search(e){
        this.input1=this.input1.replace(/^([0-9]{1,}[.][0-9]*)$/g,'');
        //this.input1=this.input1.replace('.','');

      },
      number(){
        this.input2=this.input2.replace(/^([0-9]{1,}[.][0-9]*)$/g,'');
      }
    },
    computed: {
      fibsNum(){
        let fib = fibs();
        let count = parseInt(this.input1);
        let fibsNumB = 0;

        for (var i = 0; i < count; i++) {
          fibsNumB= fib.next().value;
        }
        return fibsNumB;
      }
    }
  }

</script>
