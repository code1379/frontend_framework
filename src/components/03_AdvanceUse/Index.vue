<template>
  <div>
    <!-- 自定义 v-model -->
    <!-- <p>{{name}}</p>
    <CustomVmodel v-model="name" />-->

    <!-- $nextTick的使用 -->
    <!-- <NextTick/> -->

    <!-- slot 的德本使用 -->
    <!-- <SlotDemo :url="website.url"></SlotDemo>
    <SlotDemo :url="website.url">{{website.title}}</SlotDemo>-->
    <!-- 作用域插槽 -->
    <!-- <ScopedSlotDemo :url="website.url"></ScopedSlotDemo>
    <ScopedSlotDemo :url="website.url">{{website.title}}</ScopedSlotDemo>-->
    <!-- 
      作用域插槽的意思，就是渲染子组件里面的data。
      怎么把子组件里面的data 扔出来，让父组件可以获取到?
      1. 首先在子组件里面的slot 定义一个 名字 slotData="xxx" (xxx 为子组件里面的变量)
      2. 在父组件的插槽里添加 template 末班标签 v-slot='slotProps'
      3. 通过 slotProps.slotData.title 就能获取到 子组件里面数据的内容了。

      作用域插槽不是很常考
    -->
    <!-- <ScopedSlotDemo :url="website.url">
      <template v-slot="slotProps">{{slotProps.slotData.title}}</template>
    </ScopedSlotDemo>-->

    <!-- 具名插槽 -->
    <!-- 
      <template v-slot:header>
    缩写  <template #header>-->
    <!-- <NamedSlot>
      <template v-slot:header>
        <h1>将插入 header slot 中</h1>
      </template>
      <p>将插入 main slot 中,即未命名的 slot</p>
      <template v-slot:footer>
        <p>将插入 footer slot 中</p>
      </template>
    </NamedSlot>-->

    <!-- 动态组件 -->
    <!-- <component :is="NextTickName"></component> -->
    <!-- 这里必须使用动态的 :is 否则会报错 -->
    <!-- <component is="NextTick"></component> -->
    <!-- <component v-for="(item, index) in newsData" :is="item" :key="index"></component> -->

    <!-- 异步组件 -->
    <!-- <FormDemo v-if="isShow"></FormDemo> -->
    <!-- <button @click="toggleShow">toggle show</button> -->

    <!-- keep alive -->
    <KeepAlive />

    <!-- mixin -->
    <MixinDemo />
  </div>
</template>

<script>
import CustomVmodel from "./CustomVmodel";
import NextTick from "./NextTick";
import SlotDemo from "./SlotDemo";
import ScopedSlotDemo from "./ScopedSlotDemo";
import NamedSlot from "./NamedSlot";
import KeepAlive from "./KeepAlive";
import MixinDemo from "./MixinDemo";
export default {
  components: {
    CustomVmodel,
    NextTick,
    SlotDemo,
    ScopedSlotDemo,
    NamedSlot,
    FormDemo: () => import("./FormDemo"),
    // FormDemo: () => {return import("./FormDemo")}
    KeepAlive,
    MixinDemo
  },
  data() {
    return {
      name: "thiem",
      website: {
        url: "http://imooc.com/",
        title: "imooc",
        subTitle: "程序员的梦工厂"
      },
      NextTickName: "NextTick",
      newsData: ["text", "text", "image"],
      isShow: false
    };
  },
  methods: {
    toggleShow() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style>
</style>