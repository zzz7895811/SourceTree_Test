<template>
  <div>
    <el-row>
      <el-col :span="24" v-for="(param,index) in params" :key="index">
        <el-row :gutter="20" class="margins">
          <el-col :span="2">
            {{param.name}}
          </el-col>
          <el-col :span="6">
            <el-input type="text" v-model="param.value" />
          </el-col>

        </el-row>
      </el-col>
    </el-row>

    <el-button type="danger" @click="del()">信息</el-button>
  </div>
</template>


<script type="es6">
  export default {
    data(){
      return {
        vailData:"密码,账号",
        params: [
        ]
      }
    },
    created:function(){
      const _this=this;
      let paramArray=_this.vailData.split(',');
      paramArray.forEach(function (item) {
        let obj={name:item,value:""};
        _this.params.push(obj)
      })
    },
    methods:{
      del(){
        let paramStr=JSON.stringify(this.params)
        this.$notify({
          title: '数据',
          message:paramStr,
          type:"success"
        });
        console.log(paramStr)
        console.log(this.params)
      }
    }
  }


</script>
