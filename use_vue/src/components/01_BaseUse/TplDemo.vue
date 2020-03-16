<template>
  <div>
    <p>文本插值 - {{message}}</p>
    <p>JS 表达式 {{flag ? 'yes' : 'no'}} 只能放表达式，不能放js语句</p>
    
    <p :id="dynamicId">动态属性 id</p>

    <hr>
    <p v-html="rawHtml">
      <span>有 xss 风险</span>
      <span>【注意】使用 v-html 之后，将会覆盖子元素</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TplDemo',
  data() {
    return { 
      message: '03-02 Vue 模板（插值，指令）',
      flag: true,
      rawHtml: '指令 - 原始 html <b>加粗</b><i>斜体</i>',
      dynamicId: `id - ${Date.now()}`
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>