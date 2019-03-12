<template>
  <div>
    <!--<el-form :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">-->
      <el-col :span="12">
        <el-form-item label="活动名称" prop="name2">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>

      <el-col :span="12">
        <el-form-item label="年龄" prop="age">
          <el-input type="text" v-model="ruleForm.age" autocomplete="off"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="活动名称" prop="name2">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>

      <el-col :span="12">
        <el-form-item label="年龄" prop="age">
          <el-input type="text" v-model="ruleForm.age" autocomplete="off"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="时间范围">
          <el-date-picker
            v-model="value4"
            :default-time="dTime"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
      </el-col>

      <el-col :span="12">
        <el-form-item label="年龄" prop="age">
          <el-input type="text" v-model="ruleForm.age" autocomplete="off"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="活动名称" prop="name2">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>

      <el-col :span="12">
        <el-form-item label="年龄" prop="age">
          <el-input type="text" v-model="ruleForm.age" autocomplete="off"></el-input>
        </el-form-item>
      </el-col>

    <!--</el-form>-->
  </div>
</template>


<script type="es6">
  export default {
    data(){
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        var regex = new RegExp(/^([0-9]{1,}[.][0-9]{1,3})$/g);
        var regex2 = new RegExp(/^[0-9]+([.]{1}[0-9]+){0,1}$/g);
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }

      };
      return {
        value4:"",
        //value4:['2018-11-30 15:38:00','2018-11-30 16:38:00'],
        dTime:["9:00:00","10:00:00"],
        name: '',
        age: '',
        ruleForm: {
          name: '',
          age: ''
        },
        rules: {
          name2: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          age: [
            {required: true,validator: checkAge, trigger: 'blur'}
          ]
        }
      }
    }
  }

</script>
