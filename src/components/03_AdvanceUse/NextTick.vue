<template>
  <div>
    <h3>$nextTick 的使用</h3>
    <ul ref="ul">  
      <li v-for="(item, index) in list" :key="index">{{item}}</li>
    </ul>
    <button @click="addItem">添加一项</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['a', 'b', 'c']
    }
  },
  methods: {
    addItem() {
      this.list.push(`${Date.now()}`)
      this.list.push(`${Date.now()}`)
      this.list.push(`${Date.now()}`)
      // 获取DOM元素
      const ulElem = this.$refs.ul
      console.log(ulElem)
      console.log(ulElem.childNodes.length)

      // 1. 异步渲染， $nextTick再DOM渲染完再回调
      // 2. 页面渲染时会将 Data 的修改做整合，多次 data 修改只会渲染一次
      this.$nextTick(() => {
        console.log("nextTick", ulElem.childNodes.length)
      })
    }
  },
}
</script>

<style>

</style>