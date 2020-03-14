<template>
  <div class="slot-demo">
    <h3>slot 的基本使用</h3>
    <a :href="url">
      <slot>默认内容，即父组件没有设置内容时，这里显示的文本</slot>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
</style>