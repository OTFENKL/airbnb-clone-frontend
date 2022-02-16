<template>
  <div>
    <div class="header">
      <main-header @searchDialog="showSearchDialog" />
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
          </div>
        </el-col>
      </el-row>
    </div>
    <search-dialog :param="popupOptions"></search-dialog>    
  </div>
</template>

<script>
import MainHeader from '@/views/main/components/Header.vue'
import MainBodyList from '@/views/main/components/BodyList.vue'
import SearchDialog from '@/views/main/components/SearchDialog.vue'

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
        width: '40%',
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
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    z-index: 1000;
    background-color: white;
    padding: 10px;
  }
  .content {
    padding-top: 80px;
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