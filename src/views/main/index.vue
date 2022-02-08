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

    <el-dialog
      title="Tips"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>This is a message</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import MainHeader from '@/views/main/components/Header.vue'
import MainBodyList from '@/views/main/components/BodyList.vue'

export default {
  name: 'Main',
  components: {
    MainHeader,
    MainBodyList
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    showSearchDialog(open) {
      this.dialogVisible = open
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
</style>