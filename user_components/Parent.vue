<template>
  <div>
    <children :tempStr="data1" ref="ref1"></children>
    <button v-on:click="change">click</button>
    <el-form label-width="140px" :model="orderModel" :rules="rules" ref="refOrderForm">
      <el-form-item label="财务软件版本" prop="selectSupport">
        <el-cascader
          :options="supportData"
          placeholder="请选择财务软件"
          style="width: 100%;"
          :props="cascaderProps"
          v-model="orderModel.selectSupport"
          ></el-cascader>
      </el-form-item>
    </el-form>
    <button v-on:click="save">保存</button>

    <el-table
      ref="table1"
      :data="tableData"
      :highlight-current-row="true"
      @current-change="currChangeHandler"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <button v-on:click="clear">清空</button>
  </div>
</template>


<script type="es6">
  import children from '../user_components/Children'
  export default {
    data(){
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,
          tag: '公司'
        }],
        orderModel: {
          id: null,
          name: "",
          code: "",
          productID: null,
          support: null,
          selectSupport: []
        },
        cascaderProps: {
          value: "id",
          label: "name"
        },
        supportData: [{
          id: 'shejiyuanze',
          name: '设计原则',
          children: [{
            id: 'yizhi',
            name: '一致'
          }, {
            id: 'fankui',
            name: '反馈'
          }, {
            id: 'xiaolv',
            name: '效率'
          }, {
            id: 'kekong',
            name: '可控'
          }]
        },],
        rules: {
          name: [{required: true, message: "请输入名称", trigger: "blur"}],
          code: [{required: true, message: "请输入编号", trigger: "blur"}],
          selectSupport: [
            {
              type: "array",
              required: true,
              message: "请选择财务软件",
              trigger: "change"
            }
          ]
        },
        data1: "123",
        selName:"",
      }
    },
    methods: {
      currChangeHandler(currentRow, oldCurrentRow){
        this.selName=currentRow.name;
        console.log(this.selName)
      },
      change(){
        this.data1 = "456";
      },
      clear(){
        this.$refs["table1"].setCurrentRow({});
        console.log(this.selName)
      },
      save(){
        this.$refs["refOrderForm"].validate(valid => {
          if (valid) {
            console.log("A")
          }
        })
      }
    },
    components: {
      children
    },
  }

</script>
