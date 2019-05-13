<template>
  <main>
    <div class="my-title">书生</div>
    <cell @click.native="goTo('/my/userCenter')" is-link :title="userName" class="my-head">
      <img slot="icon" src="../assets/images/Bitmap@2x.png">
    </cell>
    <group class="my-group">
      <cell class="read-record" @click.native="goTo('/my/readRecord')" title="阅读记录" is-link></cell>
      <cell class="about-us" @click.native="goTo('/my/aboutUs')" title="关于我们" is-link></cell>
    </group>
    <book-tabber></book-tabber>
  </main>
</template>
<script>
import bookTabber from '../components/Tabber'
export default {
  data () {
    return {
      userName: 'Tickmao'
    }
  },
  components: {
    bookTabber
  },
  methods: {
    goTo (url) {
      this.$router.push({path: url})
    }
  }
}
</script>
<style lang="less">
.weui-cell.my-head {
  &:before {
    border: none;
  }
  .vux-cell-primary > p > .vux-label {
    height:28px;
    font-size:20px;
    font-weight:600;
    color:rgba(74,74,74,1);
    line-height:28px;
    text-align: left;
    width: 100%;
    padding-left: 22px;
  }
  .weui-cell__hd {
    img {
      width: 60px;
      height: 60px;
    }
  }
  .weui-cell__ft:after {
    right: 24px;
  }
}
.read-record.weui-cell, .about-us.weui-cell {
  .weui-cell__ft:after {
    right: 41px;
  }
  .vux-cell-primary > p > .vux-label {
    text-align: left;
    width: 100%;
    padding-left: 22px;
  }
}
.about-us.weui-cell:before {
  left: 30px;
  right: 50px;
}
.my-group {
  .weui-cells:after {
    border: none;
  }
  .weui-cells:before {
    border: none;
  }
}
</style>

<style lang="less" scoped>
.my-title {
  padding: 14px 0 11px 19px;
  height:53px;
  font-size:20px;
  font-weight:600;
  color:rgba(74,74,74,1);
  line-height:53px;
  text-align: left;
}
.my-head {
  width: 85%;
  height: 111px;
  background: rgba(255,255,255,1);
  box-shadow: 0px 2px 4px 0px rgba(242,241,241,1);
  border-radius: 5px;
  margin: 0 auto;
}
</style>
