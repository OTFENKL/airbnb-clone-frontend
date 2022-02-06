<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/title_logo.png" class="title-img">
    </div>
    <div class="header-menu">
      <el-date-picker
        v-model="dataValue"
        type="daterange"
        range-separator="~"
        start-placeholder="체크인"
        end-placeholder="체크아웃">
      </el-date-picker>
      <a-round-btn label="필터" size="md" color="red" icon="el-icon-s-operation" style="margin-left: 10px;" />
    </div>
    <div class="user-menu">
      <div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'main-header',
    data() {
      return {
        dataValue: ''
      }
    }
  }
</script>

<style scoped>
  .header {
    padding: 10px;
    background-color: white;
  }
  .select-date {
    text-align: center;
    margin-top: 10px;
  }
  .logo, .header-menu, .user-menu {
    width: 33%;
    display: inline-block;
    vertical-align: middle;
  }
  .header-menu {
    text-align: center;
  }
  .user-menu {
    text-align: right;
  }
  .title-img {
    width: 150px;
  }
  .btn-filter {
    margin-left: 10px;
  }
</style>
