<template>
  <div class="list">
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
  </div>
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
  div {
    padding: 10px;
    margin-bottom: 15px;
  }
  .select-date {
    text-align: center;
    margin-top: 10px;
  }
  .title-img {
    width: 25%;
  }
</style>
