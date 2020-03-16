<template>
  <div class="home">
    <!-- <TplDemo/> -->

    <!-- <ComputedDemo/> -->
    <!-- <WatchDemo/> -->

    <!-- <ClassDemo/> -->

    <!-- <ConditionDemo/> -->

    <!-- <ListDemo/> -->

    <!-- <EventDemo/> -->

    <FormDemo/>

  </div>
</template>

<script>
// 基本使用
import TplDemo from '../components/01_BaseUse/TplDemo'
// computed和watch的区别
import ComputedDemo from '../components/01_BaseUse/ComputedDemo'
import WatchDemo from '../components/01_BaseUse/WatchDemo'
// 样式
import ClassDemo from '../components/01_BaseUse/ClassDemo'
// v-if 和 v-show
import ConditionDemo from '../components/01_BaseUse/ConditionDemo'
// v-for 遍历数组和对象
import ListDemo from '../components/01_BaseUse/ListDemo'
// event事件
import EventDemo from '../components/01_BaseUse/EventDemo'
// form
import FormDemo from '../components/01_BaseUse/FormDemo'


export default {
  name: 'Home',
  components: {
    // TplDemo,
    // ComputedDemo,
    // WatchDemo,
    // ClassDemo,
    // ConditionDemo,
    // ListDemo,
    // EventDemo,
    FormDemo,
  }
}
</script>
