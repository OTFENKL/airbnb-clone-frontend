<template>
  <div>
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
      <el-button round type="danger" icon="el-icon-s-operation" style="margin-left: 10px;" @click="showSearchDialog">필터</el-button>
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
        dataValue: '',
      }
    },
    methods: {
      showSearchDialog() {
        this.$emit('searchDialog')
      }
    }
  }
</script>

<style scoped>
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
