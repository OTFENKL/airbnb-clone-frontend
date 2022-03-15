<template>
  <div>
    <el-row v-for="(room, i) in roomList" :key="i">
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
            <router-link to="/detail">
              <el-col :span="15">
                <div class="description">
                  <span class="simple_desc small">{{room.type}}</span>
                  <span class="title label">{{room.name}}</span>
                  <span class="structure small">최대 인원 4명 . 침실 2개 . 침대 4개 . 욕실 1개</span>
                  <span class="options small">주방 . 무선 인터넷 . 난방 . 셀프 체크인</span>
                </div>
                <div class="rating">
                  <span><i class="el-icon-star-on" style="color: red"></i><strong>{{room.rating}}</strong> (후기 {{room.reviewCount}}개)</span>
                </div>
              </el-col>
            </router-link>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination class="pagination" layout="prev, pager, next" :total="pagination.total" :limit.sync="pagination.limit" @current-change="handleCurrentChange"></el-pagination>
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
          total: 100,
          limit: 5
        },
        roomList: [],
        currPage: 0
      }
    },
    methods: {
      getData() {
        var _this = this;
        this.$axios
          .get('/accommodations?page=' + _this.currPage + '&size=20')
          .then((res) => {
            _this.roomList = res.data.accommodationResList;
          })
          .catch(e => {
            console.log(e);
          })
      },
      handleCurrentChange(e) {
        this.currPage = e - 1;
        this.getData();
        this.scrollToTop();
      },
      scrollToTop() {
        window.scrollTo(0, 0);
      }
    },
    created() {
      this.getData();
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

  .rating {
    position: absolute;
    bottom: 0;
    margin-left: 5px;
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
