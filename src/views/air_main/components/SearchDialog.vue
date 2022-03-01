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

        <h2>침실과 침대</h2>
        <div>
          <el-row>
            <el-col class="option" v-for="(value, name) in options.bedrooms" :key="value">
              <span>{{value}}</span>
              <el-input-number class="option-value" size="small" v-model="optionsValues[name]" :min="1" :max="10"></el-input-number>
            </el-col>
          </el-row>
        </div>

        <el-divider></el-divider>

        <h2>편의시설 더 보기</h2>
        <div>
          <el-row>
            <el-col class="option" v-for="(value, name) in options.amenities" :key="value">
              <span>{{value}}</span>
              <el-switch class="option-value" v-model="optionsValues[name]"></el-switch>
            </el-col>
          </el-row>
        </div>

        <el-divider></el-divider>

        <h2>접근성 편의</h2>
        <div>
          <el-row>
            <el-col :span="12" class="option" v-for="(value, name) in options.accessibility" :key="value">
              <el-checkbox v-model="optionsValues[name]">{{value}}</el-checkbox>
            </el-col>
          </el-row>
        </div>

        <div id="accessibility-detail" v-show="accessDetailToggle">
          <el-row>
            <el-col :span="12" class="option" v-for="(value, name) in options.accessibilityDetail" :key="value">
              <el-checkbox v-model="optionsValues[name]">{{value}}</el-checkbox>
            </el-col>
          </el-row>
        </div>
        <el-link style="margin-top: 25px;" @click="accessDetailToggle = !accessDetailToggle" v-show="!accessDetailToggle">
          접근성 기능 모두보기
          <i class="el-icon-arrow-down el-icon--right"></i>
          </el-link>
        <el-link style="margin-top: 25px;" @click="accessDetailToggle = !accessDetailToggle" v-show="accessDetailToggle">
          숨기기
          <i class="el-icon-arrow-up el-icon--right"></i>
        </el-link>

        <span slot="footer" class="dialog-footer">
          <el-button @click="param.visible = false">취소</el-button>
          <el-button type="danger" @click="param.visible = false">확인</el-button>
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
      accessDetailToggle: false,
      options: {
        bedrooms: {bedrooms1: '침대 수', bedrooms2: '침실 수', bedrooms3: '욕실 수'},
        amenities: {amenities1: '즉시 예약', amenities2: '슈퍼호스트', amenities3:'취소 수수료 없음'},
        accessibility: {
          accessibility1: '게스트 출입구에 계단이나 문턱 없음', 
          accessibility2: '너비 81cm 이상의 게스트 출입구', 
          accessibility3: '휠체어 접근 가능 주차 공간', 
          accessibility4: '게스트 출입구까지 계단이나 문턱 없이 이동 가능',
        },
        accessibilityDetail: {
          accessibility5: '계단이나 문턱 없는 침실',
          accessibility6: '너비 81cm 이상의 침실 출입구',
          accessibility7: '계단이나 문턱 없는 욕실',
          accessibility8: '너비 81cm 이상의 욕실 출입구',
          accessibility9: '샤워실 고정 손잡이',
          accessibility10: '변기 옆 고정 손잡이',
          accessibility11: '계단이나 문턱 없는 샤워실',
          accessibility12: '샤워/목욕 의자',
          accessibility13: '천장형 또는 이동식 리프트'
        }
      },
      optionsValues: {
        bedrooms1: 1,
        bedrooms2: 1,
        bedrooms3: 1,
        amenities1: false,
        amenities2: false,
        amenities3: false,
        accessibility1: false,
        accessibility2: false,
        accessibility3: false,
        accessibility4: false,
        accessibility5: false,
        accessibility6: false,
        accessibility7: false,
        accessibility8: false,
        accessibility9: false,
        accessibility10: false,
        accessibility11: false,
        accessibility12: false,
        accessibility13: false,
      }
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
  methods: {}
};
</script>

<style scoped>
  .option {
    margin-top: 10px;
  }
  .option span {
    margin-top: 5px;
    float: left;
  }
  .option-value {
    float: right;
  }
</style>
