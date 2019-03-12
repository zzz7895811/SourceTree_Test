<template>
    <div>
      <h1 id="msg"></h1>
      <filelist @removeFile="remove" :files="fileInfoList"></filelist>
      <el-upload
        ref="uploadFile"
        :auto-upload="false"
        class="avatar-uploader"
        action="http://localhost:2627/Test/user/login"
        :show-file-list="true"
        :on-success="handleAvatarSuccess"
        :on-change="fileUploadChangeHandler"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        {{imageUrl}}
      </el-upload>
    </div>
</template>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
<script type="es6">
  import filelist from '../user_components/UploadFileList'
  export default {
    data(){
      return {
        imageUrl: '',
        fileInfoList:[],
      }
    },
    mounted:function()
    {
     console.log( $("#msg"))
    },
    components: {
      filelist
    },
    methods:{
      handleAvatarSuccess(res, file) {
        console.log(file)
        this.imageUrl = URL.createObjectURL(file.raw);

      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      fileUploadChangeHandler(file, fileList){
        this.fileInfoList = fileList;
      },
      remove(index){
        this.$refs.uploadFile.uploadFiles.splice(index, 1);
      }
    }
  }

</script>
