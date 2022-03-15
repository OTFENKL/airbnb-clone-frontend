<template>
  <el-container>
    <el-header>
      <main-header @searchDialog="showSearchDialog" />
    </el-header>
    <el-main>
      <div class="content">
        <el-row>
          <el-col :span="14">
            <div class="list">
              <main-body-list />
            </div>
          </el-col>
          <el-col :span="10">
            <div class="map">
            </div>
          </el-col>
        </el-row>
      </div>
    </el-main>
    <search-dialog :param="popupOptions"></search-dialog>
  </el-container>
</template>

<script>
import MainHeader from '@/views/air_main/components/Header.vue'
import MainBodyList from '@/views/air_main/components/BodyList.vue'
import SearchDialog from '@/views/air_main/components/SearchDialog.vue'

export default {
  name: 'Main',
  components: {
    MainHeader,
    MainBodyList,
    SearchDialog
  },
  data() {
    return {
      popupOptions: {
        target: null,
        title: '필터 적용하기',
        visible: false,
        width: '50%',
        param: {},
        closeCallback: null,
      },
    }
  },
  methods: {
    showSearchDialog() {
      this.popupOptions.visible = true;
    }
  }
}
</script>

<style scoped>
  .el-header {
    position: fixed;
    z-index: 1000;
    background-color: white;
    height: 70px;
    top: 0;
    left: 0;
    right: 0;
  }
  .el-main {
    margin-top: 60px;
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
  .options {
    vertical-align: middle;
  }
  .option {
    float: right;
  }
  el-dialog {
    height: 600px;
    overflow: auto;
  }
</style>