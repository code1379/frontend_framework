<template>
  <div>
    <h4>keep alive 组件</h4>
    <button @click="changeState('A')">A</button>
    <button @click="changeState('B')">B</button>
    <button @click="changeState('C')">C</button>

    <keep-alive>
      <KeepAliveStageA v-if="state === 'A'"></KeepAliveStageA>
      <KeepAliveStageB v-if="state === 'B'"></KeepAliveStageB>
      <KeepAliveStageC v-if="state === 'C'"></KeepAliveStageC>
    </keep-alive>
  </div>
</template>

<script>
import KeepAliveStageA from "./KeepAliveStageA";
import KeepAliveStageB from "./KeepAliveStageB";
import KeepAliveStageC from "./KeepAliveStageC";
export default {
  components: {
    KeepAliveStageA,
    KeepAliveStageB,
    KeepAliveStageC
  },
  data() {
    return {
      state: "A"
    };
  },
  methods: {
    changeState(type) {
      this.state = type;
    }
  },
  created() {
    console.log("keep alive 组件 创建");
  },
  destroyed() {
    console.log("keep alive 组件 销毁");
  },
  activated() {
    console.log("keep alive 组件 激活");
  },
  deactivated() {
    console.log("keep alive 组件 隐藏");
  }
};
</script>

<style>
</style>