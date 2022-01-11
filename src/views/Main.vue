<template>
<div>
  <div id="header">
    <main-header />
  </div>
  <div id="content">
    <el-row>
      <el-col :span="10">
        <el-row v-for="(o) in 4" :key="o">
          <el-col>
            <el-card>
              <div class="card-item">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
                <div class="bottom">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="primary" class="button">Reservation</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="14">
        MAP
      </el-col>
    </el-row>
  </div>
</div>
</template>

<script>
import MainHeader from '@/components/common/MainHeader.vue'

export default {
  name: 'main',
  components: {
    MainHeader
  },
  data() {
    return {
      currentDate: new Date()
    }
  }
}
</script>

<style scoped>
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