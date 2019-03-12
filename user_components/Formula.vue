<template>
  <el-container>
    <el-main>
      <el-form>
        <el-form-item class="rules" label="ERP字段" prop="notifyobject">
          <el-input v-model="formulaList.erpField" placeholder="请输入ERP字段"  class="el-select_box"></el-input>
        </el-form-item>
      <el-form-item class="rules" label="供应链字段" prop="notifyobject">
        <el-input v-model="formulaList.startField" placeholder="请输入供应链字段"  class="el-select_box"></el-input>
      </el-form-item>
      <div id="moreFormula">
        <div v-for="(item,index) in formulaList.moreField" :key="index">
          <el-select v-model="item.sign" placeholder="请选择">
            <el-option
              v-for="e in options"
              :key="e.value"
              :label="e.label"
              :value="e.value">
            </el-option>
          </el-select>
          <el-form-item class="rules" label="供应链字段" prop="notifyobject">
            <el-input v-model="item.field" placeholder="请输入供应链字段"  class="el-select_box"></el-input>
          </el-form-item>
        </div>
      </div>
      <button @click="addMore">more</button>
        <button @click="save">保存</button>
      </el-form>
    </el-main>
  </el-container>
</template>


<script type="es6">
  export default {
    data(){
      return {
        formulaList: {
          startField: "",
          erpField:"总价",
          moreField: []
        },
        value:"+",
        options:[
          {label:"加",value:'+'},
          {label:"减",value:'-'},
          {label:"乘",value:'*'},
          {label:"除",value:'/'},
        ]
      }
    },
    methods:{
      addMore(){
        this.formulaList.moreField.push({
          sign:"+",
          field:""

        })
      },
      save(){
        console.log(this.formulaList.moreField)
      }
    }
  }

</script>
