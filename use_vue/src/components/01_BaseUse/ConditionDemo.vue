<template>
  <div class="condition-demo">
    <!-- v-if -->
    <div v-if="type === 'a'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else>C</div>

    <!-- v-show -->
    <div v-show="type === 'a'">A by v-show</div>
    <div v-show="type === 'b'">B by v-show</div>
  </div>
</template>

<script>
export default {
  name: 'ConditionDemo',
  data() {
    return {
      type: 'a'
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>