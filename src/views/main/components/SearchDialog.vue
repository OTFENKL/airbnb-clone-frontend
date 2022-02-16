<template>
  <div>
    <template>
      <el-dialog
        :title="param.title"
        :visible.sync="param.visible"
        :fullscreen="false"
        :append-to-body="true"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        :show-close="false"
        :width="param.width"
        :height="param.height">

        <h4>침실과 침대</h4>
        <div>
          <el-row>
            <el-col class="option">
              <span>침대 수</span>
              <el-input-number class="option-value" size="small" v-model="bedNum" :min="1" :max="10"></el-input-number>
            </el-col>
            <el-col class="option">
              <span>침실 수</span>
              <el-input-number class="option-value" size="small" v-model="roomNum" :min="1" :max="10"></el-input-number>
            </el-col>
            <el-col class="option">
              <span>욕실 수</span>
              <el-input-number class="option-value" size="small" v-model="bathNum" :min="1" :max="10"></el-input-number>
            </el-col>
            <el-col class="option">
              <span>즉시 예약</span>
              <el-switch class="option-value" v-model="immediReserve"></el-switch>
            </el-col>
          </el-row>
        </div>

        <h4>편의시설 더 보기</h4>
        <div>
          <el-row>
            <el-col class="option">
              <span>슈퍼호스트</span>
              <el-switch class="option-value" v-model="immediReserve"></el-switch>
            </el-col>
            <el-col class="option">
              <span>취소 수수료 없음</span>
              <el-switch class="option-value" v-model="immediReserve"></el-switch>
            </el-col>
          </el-row>
        </div>

        <h4>접근성 편의</h4>
        <div>
          <el-row>
            <el-col :span="12" class="option">
              <el-checkbox v-model="checked1">게스트 출입구에 계단이나 문턱 없음</el-checkbox>
            </el-col>
            <el-col :span="12" class="option">
              <el-checkbox v-model="checked1">너비 81cm 이상의 게스트 출입구</el-checkbox>
            </el-col>
            <el-col :span="12" class="option">
              <el-checkbox v-model="checked1">휠체어 접근 가능 주차 공간</el-checkbox>
            </el-col>
            <el-col :span="12" class="option">
              <el-checkbox v-model="checked1">게스트 출입구까지 계단이나 문턱없이 이동 가능</el-checkbox>
            </el-col>
          </el-row>
        </div>

        <h4>접근성 편의</h4>
        <div>
          <el-row>
            <el-col :span="12" class="option">
              <el-checkbox v-model="checked1">게스트 출입구에 계단이나 문턱 없음</el-checkbox>
            </el-col>
            <el-col :span="12" class="option">
              <el-checkbox v-model="checked1">너비 81cm 이상의 게스트 출입구</el-checkbox>
            </el-col>
            <el-col :span="12" class="option">
              <el-checkbox v-model="checked1">휠체어 접근 가능 주차 공간</el-checkbox>
            </el-col>
            <el-col :span="12" class="option">
              <el-checkbox v-model="checked1">게스트 출입구까지 계단이나 문턱없이 이동 가능</el-checkbox>
            </el-col>
          </el-row>
        </div>

        <h4>접근성 편의</h4>
        <div>
          <el-row>
            <el-col :span="12" class="option">
              <el-checkbox v-model="checked1">게스트 출입구에 계단이나 문턱 없음</el-checkbox>
            </el-col>
            <el-col :span="12" class="option">
              <el-checkbox v-model="checked1">너비 81cm 이상의 게스트 출입구</el-checkbox>
            </el-col>
            <el-col :span="12" class="option">
              <el-checkbox v-model="checked1">휠체어 접근 가능 주차 공간</el-checkbox>
            </el-col>
            <el-col :span="12" class="option">
              <el-checkbox v-model="checked1">게스트 출입구까지 계단이나 문턱없이 이동 가능</el-checkbox>
            </el-col>
          </el-row>
        </div>

        <span slot="footer" class="dialog-footer">
          <el-button @click="param.visible = false">취소</el-button>
          <el-button type="primary" @click="param.visible = false">확인</el-button>
        </span>

      </el-dialog>
    </template>
  </div>
</template>

<script>

export default {
  name: 'search-dialog',
  props: {
    param: {
      type: Object,
      default: () => ({
        target: null,
        title: '',
        visible: false,
        width: '30%',
        height: null,
        top: '50px',
        param: {},
        customCallBack: null,
        closeCallback: null,
      }),
    }
  },
  data () {
    return {
      bedNum: 1,
      roomNum: 1,
      bathNum: 1,
      immediReserve: false
    };
  },
  watch: {

  },
  computed: {
  },
  beforeCreate () {
  },
  created () {
  },
  beforeMount () {
  },
  mounted () {
  },
  beforeUpdate () {
  },
  beforeDestory () {
  },
  methods: {
  }
};
</script>

<style scoped>
  .option {
    margin-bottom: 10px;
  }
  .option span {
    margin-top: 5px;
    float: left;
  }
  .option-value {
    float: right;
  }

</style>