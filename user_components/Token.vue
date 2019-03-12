<template>
  <div>Tokne：{{tokenVal}}
    <button id="btnTokne" v-on:click="getToken()">获取Token</button>
    {{tokenVal|CheckTokenVal}}
    {{nowDate|formatDate}}

  </div>
</template>
<script type="es6">
  import moment from 'moment'

  export default {
    data()
    {
      return {
        tokenVal: "Token",
        nowDate: new Date()
      }
    }
    ,
    filters: {
      CheckTokenVal: function (value) {
        return !(value == "Token")
      }
      ,
      formatDate: function (value) {
        return moment(value).format("YYYY-MM-DD HH:mm:ss")
      }
      ,
    }
    ,
    mounted: function () {
      var _this = this;

      this.timer = setInterval(function () {
        _this.nowDate = new Date()

      }, 1000)

    }
    ,
    methods: {
      getToken()
      {
        var _this = this
        this.$axios.get('http://localhost:2627/api/User/GetToken', {
          params: {
            name: "李亚捷",
            pwd: "1256321"
          }
        }).then(function (response) {
          // console.log(response.data.StatusCode)
          // console.log(response.data.Data.SignToken)
          _this.tokenVal = response.data.Data.SignToken
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
    ,
    beforeDestroy: function () {
      if (this.timer) {
        clearInterval(this.timer)
      }
    }
  }
</script>
