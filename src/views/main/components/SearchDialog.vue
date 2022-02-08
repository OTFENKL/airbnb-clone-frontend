<template>
  <div>
    <template>
      <el-dialog
        :title="label"
        :visible.sync="isOpen"
        center
        @close="popupClose"
        >
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="popupConfirm">확인</el-button>
          <el-button @click="popupClose">닫기</el-button>
        </span>
      </el-dialog>
    </template>
  </div>
</template>

<script>

export default {
  name: 'search-dialog',
  props: {
    label: {  // 부모로 부터 받아온 라벨 정보
      type: String,
      default: 'Dialog'
    },
    type: {
      type: String,
      default: ''
    },
    isPopupOpen: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'lg'
    },
    childProps: {
      type: Object
    },
  },
  data () {
    return {
      popupData: {},  // 팝업에 관련된 정보
      isOpen:  false
    };
  },
  watch: {
    isPopupOpen () {
      this.isOpen = this.isPopupOpen;
    }
  },
  computed: {
  },
  beforeCreate () {
  },
  created () {
  },
  beforeMount () {
    this.init();
  },
  mounted () {
  },
  beforeUpdate () {
    this.$nextTick(() => {
      this.isOpen = this.isPopupOpen;
    });
  },
  beforeDestory () {
    this.init();
  },
  methods: {
    init () {
      
    },
    selectionChanged (_popupData) {
      this.popupData = _popupData;
    },
    popupClose () {
      this.isOpen = false;
      window.getApp.$emit('POPUP_CLOSED');
    },
    popupConfirm () {
      this.popupClose();
    }
  }
};
</script>