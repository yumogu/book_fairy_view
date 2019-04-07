<template>
  <main>
    <x-header :left-options="{backText: ''}">个人资料</x-header>
    <group class="my-group">
      <cell class="my-head-img" title="我的头像">
        <img src="../../assets/images/Bitmap@2x.png" />
      </cell>
      <cell class="my-sex" title="我的性别" :value="sex"></cell>
    </group>
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
}
.my-head-img.weui-cell, .my-sex.weui-cell {
  padding: 0 30px;
  .vux-cell-primary > p > .vux-label {
    text-align: left;
    width: 100%;
  }
}
.my-head-img.weui-cell,.weui-cell__ft {
  img {
    width: 60px;
    height: 60px;
  }
}
.my-sex.weui-cell:before {
  left: 30px;
  right: 30px;
}
.my-sex.weui-cell:after {
  content: " ";
  position: absolute;
  bottom: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #D9D9D9;
  color: #D9D9D9;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  left: 30px;
  right: 30px;
}
.my-sex >.weui-cell__ft {
  padding-right: 27px;
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
  width:339px;
  height:111px;
  background:rgba(255,255,255,1);
  box-shadow:0px 2px 4px 0px rgba(242,241,241,1);
  border-radius:5px;
  margin: 0 auto;
}
</style>

