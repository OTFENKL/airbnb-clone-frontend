<template>
<div>
  <main-header />

  <div class="content">
    <div class="list">
      <main-body-list />
    </div>
    <div class="map">
      map
    </div>
  </div>
  
</div>
</template>

<script>
import MainHeader from '@/components/main/MainHeader.vue'
import MainBodyList from '@/components/main/MainBodyList.vue'

export default {
  name: 'main',
  components: {
    MainHeader,
    MainBodyList
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
  .list {
    width: 55%;
    position: absolute;
    height: 100%;
    float: left;
    overflow: auto;
  }
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
  .time {
    font-size: 15px;
    color: #999;
  }
  .bottom {
    line-height: 15px;
  }
  .button {
    padding: 5px;
    float: right;
  }
  .map {
    width: 45%;
    float: right;
    text-align: center;
  }
</style>