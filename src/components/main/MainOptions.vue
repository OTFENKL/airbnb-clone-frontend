<template>
  <div class="options">
    <el-scrollbar>
      <el-checkbox-group v-model="checkBoxGrp">
        <el-checkbox-button class="option" round v-for="option in options" :label="option" :key="option">{{option}}</el-checkbox-button>
      </el-checkbox-group>
      <!-- <el-button class="option" round v-for="option in options" :key="option">{{option}}</el-button> -->
    </el-scrollbar>
  </div>
</template>

<script>
  export default {
    name: 'main-options',
    data() {
      return {
        checkBoxGrp: [],
        options: [
          '수변에 인접',
          '주방',
          '무선 인터넷',
          '세탁기',
          '셀프 세탁기',
          '무료 주차 공간',
          '에어컨',
          '업무 전용 공간',
          '건조기',
          '헬스장',
          '다리미',
          '수영장',
          '해변에 인접',
          '셀프 체크인',
          '셀프 체크인',
          '셀프 체크인',
          '셀프 체크인',
          '셀프 체크인',
          '셀프 체크인',
        ]
      }
    }
  }
</script>

<style scoped>
  .options {
    padding: 5px;
    background-color: white;
    width: 100%;
    white-space: nowrap;
  }
  .option {
    margin-bottom: 10px;
  }
  .select-date {
    text-align: center;
    margin-top: 30%;
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
</style>
