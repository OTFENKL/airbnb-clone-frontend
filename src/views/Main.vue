<template>
<div class="form">
  <el-row class="center">
    <el-row>
      <el-col>
        <span>vue-diary</span>
      </el-col>
    </el-row>
    
    <el-row>
     <el-input label="사용자" placeholder="사용자 이름" v-model="name" ></el-input>
    </el-row>

    <el-row>   <!--로그인 버튼-->
      <el-button type="primary" size="medium">Sign In</el-button>
    </el-row>

  </el-row>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
  
</style>