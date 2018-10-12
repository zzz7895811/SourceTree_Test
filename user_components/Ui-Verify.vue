<template>
  <div>
    插件提供验证:
  <el-form :model="model">
    <el-form-item prop="age" verify number :lte="99">
      <el-input v-model.number="model.age"></el-input>
    </el-form-item>
  </el-form>
    <p></p>
    自定义验证:
    <el-form :model="model">
      <el-form-item prop="age2" :verify="verifyNumber" >
        <el-input v-model="model.age2"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="es6">

  export default{
    name: 'UiVerify',
    data () {
    return {
      model: {
        age: 0,
        age2:''
      }
    }
  },
    methods:{
      verifyNumber (rule, val, callback) {
        // rule: 这个参数很恶心，不经常用到还要放在第一位，不过为了保持async-validator的风格，还是留着它了
        // val: 待校验值
        // callback: 校验结果回调 具体可以点击上文的"校验方法"链接查看
        var regex2 = new RegExp(/^[0-9]+([.]{1}[0-9]+){0,1}$/g);
        if (!regex2.test(val))callback(Error('请输入数字值'));
        else callback();
      }
    }
  }
</script>
