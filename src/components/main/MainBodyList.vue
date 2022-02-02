<template>
  <div>
    <el-row v-for="(o) in 8" :key="o">
      <el-col>
        <el-card>
          <el-row>
            <el-col :span="9">
              <div class="card-item">
                <el-carousel trigger="click" height="200px" :autoplay="false">
                  <el-carousel-item v-for='image in roomImages' :key='image'>
                    <img :src="image" class="image">
                  </el-carousel-item>
                </el-carousel>
              </div>
            </el-col>
            <el-col :span="15">
              <div class="description">
                <span class="simple_desc small">광화문/경복궁의 전원주택 전체</span>
                <span class="title label">New Open [한옥독채]서촌, 경복궁 인근 포근한 한옥 '서촌 아지트'</span>
                <span class="structure small">최대 인원 4명 . 침실 2개 . 침대 4개 . 욕실 1개</span>
                <span class="options small">주방 . 무선 인터넷 . 난방 . 셀프 체크인</span>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination class="pagination" layout="prev, pager, next" :total="pagination.total" :page-size="pagination.limit"></el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'main-body-list',
    data() {
      return {
        dataValue: '',
        currentDate: new Date(),
        roomImages: [
          require(`@/assets/rooms/image1.png`),
          require(`@/assets/rooms/image2.png`),
          require(`@/assets/rooms/image3.png`),
          require(`@/assets/rooms/image4.png`),
        ],
        pagination: {
          total: 8,
          page: 1,
          limit: 5
        }
      }
    }
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .pagination {
    display: flex;
    justify-content: center;
  }

  .description {
    margin-left: 5px;
    width: 100%;
  }

  .small, .label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .label {
    font-size: 20px;
    color: black;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .small {
    font-size: 12px;
    color: #747474;
  }

  .image {
    width: 100%;
    height: 100%;
  }

</style>
