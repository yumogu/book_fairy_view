<template>
  <main>
    <x-header :left-options="{backText: ''}">关于我们</x-header>
    <div class="about-us-content">
      <div class="about-app">本应用是一个小说阅读搜索引擎，提供且仅提供第三方搜索引擎提供的小说检索结果。</div>
      <div class="statement-title">免责申明</div>
      <div class="statement-content">本站所有书籍因技术以及人力限制,无法对书籍质量以及版权逐一检查. <br>如果你发现本站任何资源侵犯了你的版权,请联系告知.我们会在核实后第一时间删除。<br>如有条件请尽量阅读正版，支持正版。</div>

    </div>
  </main>
</template>
<script>
export default {
  data () {
    return {
      userName: 'Tickmao',
      sex: '男'
    }
  }
}
</script>
<style lang="less" scoped>
.about-us-content {
  text-align: left;
  padding: 0 23px;
  .about-app {
    margin-top: 30px;
    margin-bottom: 30px;
    height:48px;
    font-size:14px;
    font-weight:300;
    color:rgba(74,74,74,1);
    line-height:24px;
  }
  .statement-title {
    height:25px;
    font-size:18px;
    font-weight:600;
    color:rgba(74,74,74,1);
    line-height:25px;
  }
  .statement-content {
    height:120px;
    font-size:14px;
    font-weight:300;
    color:rgba(74,74,74,1);
    line-height:24px;
    margin-top: 8px;
  }
}
</style>

