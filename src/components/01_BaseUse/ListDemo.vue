<template>
  <div>
    <!-- 遍历数组 -->
    <h3>遍历数组</h3>
    <ul>
      <li v-for="(item, index) in listArr" :key="item.id">
        {{ index }} - {{ item.id }} - {{ item.title }}
      </li>
    </ul>
    <h3>遍历对象</h3>
    <ul v-if="flag">
      <li v-for="(item, key, index) in obj" :key="key">
        {{index}} - {{ key }} - {{ item.name || item.age || item.height }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'ListDemo',
  data() {
    return {
      flag: false,
      // 数据结构中，最好有 id
      listArr:[
        {id: 1, title: '标题1'},
        {id: 2, title: '标题2'},
        {id: 3, title: '标题3'}
      ],
      obj: {
        a: {name: 'dell'},
        b: {age: 18},
        c: {height: 1.88}
      }
    }
  },
}
</script>

<style>

</style>