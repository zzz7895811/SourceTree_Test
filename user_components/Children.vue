<template>
    <div>
{{tempStr}}
    </div>
</template>


<script type="es6">
  export default {
    data(){
      return {

      }
    },
    props: {
      tempStr:{
        type:String,
        required:true
      }
    },
    mounted: function () {
      this.GetNewData();
    },
    methods:{
      GetNewData(){
        console.log(this.tempStr);
      }
    },
    watch:{
      tempStr(newVal){
        this.GetNewData();
      }
    }
  }

</script>
