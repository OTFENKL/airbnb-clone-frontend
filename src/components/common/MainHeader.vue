<template>
  <header>
    <el-row>
      <el-col :span="8">
        <img src="@/assets/title_logo.png" class="title-img">
      </el-col>
      <el-col :span="8">
        <div class="select-date">
          <el-date-picker
            v-model="dataValue"
            type="daterange"
            range-separator="~"
            start-placeholder="체크인"
            end-placeholder="체크아웃">
          </el-date-picker>
        </div>
      </el-col>
    </el-row>
  </header>
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
  header {
    padding: 10px;
    margin-bottom: 15px;
  }
  .select-date {
    text-align: center;
    margin-top: 10px;
  }
  .title-img {
    width: 20%;
  }
</style>
