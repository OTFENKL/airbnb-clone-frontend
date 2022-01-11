<template>
<div class="wrap">
  <div id="header">
    <main-header />
  </div>
  <div id="content">
    <el-row>
      <el-col :span="10">
        <div class="bg-purple-dark">
          test
        </div>
      </el-col>
      <el-col :span="14">
        <div class="bg-purple-light">
          test
        </div>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<script>
import MainHeader from '@/components/common/MainHeader.vue'

export default {
  name: 'main',
  components: {
    MainHeader
  }
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
    padding: 5px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>