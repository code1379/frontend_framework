<template>
  <div>
    <p :class="{active: isActive, bold: isBold}">
      样式 class 对象写法
    </p>
    <p :class="['active', 'bold']">
      样式 class 数组写法
    </p>

    <p :style="computedStyle">
      样式 style 对象写法
    </p>
  </div>
</template>

<script>
export default {
  name: 'ClassDemo',
  data() {
    return {
      isActive: true,
      isBold: true
    }
  },
  computed: {
    computedStyle() {
      return {
        color: 'red',
        fontSize: '30px'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.active {
  color: red;
}
.bold {
  font-weight: bold;
}
</style>