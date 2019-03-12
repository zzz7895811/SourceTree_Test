<template>
  <div class="block">
        <span class="demonstration">
          评分
            <el-rate
              v-model="value2"
              :show-score="showScore"
              :color="['#99A9BF', '#F7BA2A', '#FF9900']"
              @change="rateChange"
              :max="maxScore"
              ></el-rate>
        </span>

    <button v-for="(oper,index) in tempData" :key="index" v-on:click="operClick(oper.type)">{{oper.name}}</button>
    <div id="logo">{{logo}}</div>
  </div>
</template>
<script type="es6">
  export default {
    data() {
      return {
        value2: 3.7,
        showScore: true,
        maxScore: 10,
        tempData: [
          {name: "审批中", type: 1},
          {name: "已审批", type: 2},
          {name: "已退回", type: 3},
        ]
      }
    },

    props:["logo"],
    methods: {
      rateChange: function (num) {
        this.$emit('rateClickEvent', num)
      },
      operClick: function (typeID) {
        this.$emit('operClickEvent', typeID)
      }
    },


  }
</script>
