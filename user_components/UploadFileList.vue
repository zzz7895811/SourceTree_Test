<template>
  <div>
    <div v-for="(item,key) in fileInfoList" :key="key">
      <div>
        <span>{{item.name}}</span>
        <button type="button" @click="removeFile(key)">移除</button>
      </div>
    </div>
  </div>
</template>


<script type="es6">
  export default {
    data(){
      return {
        fileInfoList:[],
      }

    },
    props: {
      files: {
        type: Array,
        default() {
          return [];
        }
      }
  },
    methods:{
      removeFile(index){
        console.log(index)
        this.fileInfoList.splice(index,1)
        this.$emit("removeFile", index);
      }
    },
    watch:{
      files(newVal,oldVal){
        this.fileInfoList=newVal
      }
    }
  }

</script>
