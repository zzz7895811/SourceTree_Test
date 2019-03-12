<template>
  <div>
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="c in cities" :label="c.id" :key="c.id">
        {{c.city}}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script type="es6">
  function field(value)
  {
    this.value=value;
  }
  field.prototype.valid= function () {
   return  this.value.length>0;
  }
  var user=new field("username");
  // console.log(user.valid())
  const cityOptions = [
    {
      id: 1,
      city: '上海',
    },
    {
      id: 2,
      city: '北京',
    },
    {
      id: 3,
      city: '广州',
    },
    {
      id: 4,
      city: '深圳',
    },];
  export default {
    data() {
      return {

        checkAll: false,
        checkedCities: [1, 2],
        cities: cityOptions,
        isIndeterminate: true,
        cityIDs:cityOptions.map(function (city) {
          return city.id;
        })
      }
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? this.cityIDs : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cityIDs.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cityIDs.length;
      }
    }
  }
</script>
