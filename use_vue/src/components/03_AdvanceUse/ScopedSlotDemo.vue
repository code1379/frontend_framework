<template>
  <div>
    <h3>作用域插槽</h3>
    <a :href="url">
      <slot :slotData="website">{{website.subTItle}}</slot>
    </a>
  </div>
</template>

<script>
export default {
  props: ["url"],
  data() {
    return {
      website: {
        url: "http://wangEditor.com/",
        title: "wangEditor",
        subTItle: "轻量级富文本编辑器"
      }
    };
  }
};
</script>

<style>
</style>