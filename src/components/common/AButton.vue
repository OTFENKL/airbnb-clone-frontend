<template>
  <span>
    <el-button
      plain
      :disabled="disabled"
      :type="getColor"
      :size="getSize"
      :icon="icon"
      class="default-button"
    >{{label}}</el-button>
  </span>
</template>

<script>
export default {
  name: 'a-btn',
  props: {
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    getColor() {
      if (this.color === 'blue') {
        return 'primary';
      } else if (this.color === 'orange') {
        return 'warning';
      } else if (this.color === 'red') {
        return 'danger';
      } else if (this.color === 'gray') {
        return 'info';
      } else if (this.color === 'green') {
        return 'success';
      } else if (this.color === 'black') {
        return '';
      } else {
        return 'info';
      }
    },
    getSize() {
      if (this.size === 'sm') {
        return 'small';
      } else if (this.size === 'md') {
        return '';
      } else if (this.size === 'lg') {
        return 'large';
      } else {
        return 'mini';
      }
    },
  }
}
</script>