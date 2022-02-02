<template>
  <div>
    <div class="head">
      <main-header />
      <main-options />
    </div>

    <div class="content">
      <el-row>
        <el-col :span="14">
          <div class="list">
            <main-body-list />
          </div>
        </el-col>
        <el-col :span="10">
          <div class="map">
            <main-body-map />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/main/MainHeader.vue'
import MainBodyList from '@/components/main/MainBodyList.vue'
import MainBodyMap from '@/components/main/MainBodyMap.vue'
import MainOptions from '@/components/main/MainOptions.vue'

export default {
  name: 'main',
  components: {
    MainHeader,
    MainBodyList,
    MainBodyMap,
    MainOptions,
    MainOptions
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
  .head {
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    z-index: 1000;
  }
  .content {
    padding-top: 140px;
  }
  .list {
    width: 100%;
    height: 100%;
  }
  .map {
    position: fixed;
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
</style>