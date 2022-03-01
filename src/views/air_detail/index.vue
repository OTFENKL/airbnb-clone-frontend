<template>
  <div class="detail">
    <div class="detail-header">
      <h1>New Open [한옥독채]서촌, 경복궁 인근 포근한 한옥 '서촌 아지트'</h1>
      <span><i class="el-icon-star-on" style="color: red"></i>4.89</span>
      <span> · </span>
      <span>후기 36개</span>
      <span> · </span>
      <span><i class="el-icon-medal" style="color: red"></i>슈퍼호스트</span>
      <span> · </span>
      <span>서촌, 경복궁, 서울, 한국</span>
    </div>

    <el-row>
      <el-col :span="12">
        <img :src="roomImages.image1" class="image">
      </el-col>
      <el-col :span="12">
        <el-row>
          <el-col :span="12">
            <img :src="roomImages.image1" class="image">
          </el-col>
          <el-col :span="12">
            <img :src="roomImages.image2" class="image">
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <img :src="roomImages.image3" class="image">
          </el-col>
          <el-col :span="12">
            <img :src="roomImages.image4" class="image">
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Detail',
  components: {},
  data() {
    return {
      roomImages: {
        image1: require(`@/assets/rooms/image1.png`),
        image2: require(`@/assets/rooms/image2.png`),
        image3: require(`@/assets/rooms/image3.png`),
        image4: require(`@/assets/rooms/image4.png`),
      },
    }
  },
  methods: {}
}
</script>

<style scoped>
  .detail {
    margin-left: 15%;
    margin-right: 15%;
  }
  .detail-header {
    margin-bottom: 10px;
  }
  .image {
    width: 100%;
    height: 100%;
  }
</style>