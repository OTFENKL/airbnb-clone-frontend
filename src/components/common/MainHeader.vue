<template>
  <header>
    <el-row>
      <el-col :span="8">
        <h2>airbnb</h2>
      </el-col>
      <el-col :span="8">
        <div class="select-date">
          <p>날짜선택</p>
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
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
  }
  .select-date {
    text-align: center;
  }
</style>
