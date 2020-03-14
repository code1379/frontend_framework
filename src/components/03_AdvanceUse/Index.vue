<template>
  <div>
    <!-- 自定义 v-model -->
    <!-- <p>{{name}}</p>
    <CustomVmodel v-model="name" /> -->

    <!-- $nextTick的使用 -->
    <NextTick/>
  </div>
</template>

<script>
import CustomVmodel from './CustomVmodel'
import NextTick from './NextTick'
export default {
  components: {
    CustomVmodel,
    NextTick
  },
  data() {
    return {
      name: 'thiem'
    }
  },
}
</script>

<style>

</style>