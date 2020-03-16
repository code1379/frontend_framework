<template>
  <div>
    <p>{{name}} {{major}} {{city}}</p>
    <button @click="alertName">弹框显示姓名</button>
  </div>
</template>

<script>
import myMixin from "./mixin";

export default {
  mixins: [myMixin], // 可以添加多个，会自动合并起来
  data() {
    return {
      name: "thiem",
      major: "前端工程师"
    };
  },
  mounted() {
    console.log("component mounted", this.name);
  }
};
</script>

<style>
</style>