<template>
  <main>
    <div class="head_img">
      <img src="../assets/logo.png">
    </div>
    <div class="use_name_input">
      <x-input title="title" v-model="value"></x-input>
    </div>
    <div class="psd_input">
      <x-input title="title" v-model="value"></x-input>
    </div>
    <div>
      <label for="性别"></label>
      <input type="radio" value="男">男
      <input type="radio" value="女">女
    </div>
    <div class="btn">{{type === 1 ? '登录' : '注册'}}</div>
    <div>注册成功</div>
    <div class="regist" @click="changeFn(type)">{{type === 1 ? '注册' : '已有账号？立即登录'}}</div>
  </main>
</template>
<script>
export default {
  data () {
    return {
      type: 1, // 1: 登录，2：注册
      value: ''
    }
  },
  methods: {
    changeFn (v) {
      v === 1 ? this.type = 2 : this.type = 1
    }
  }
}
</script>

<style lang="less" scoped>
.head_img {
  width: 60px;
  height: 60px;
  margin: 148px auto 30px;
  border-radius: 30px;
  img {
    width: 100%;
    height: 100%;
  }
}
.use_name_input, .psd_input {
  width: 240px;
  height: 48px;
  margin: 0 auto;
  background:rgba(247,247,247,1);
  box-shadow: 0px 2px 4px 0px rgba(233,233,233,0.5);
  border-radius: 25px;
}
.use_name_input + .psd_input {
  margin-top: 30px;
}
.btn {
  margin: 29px auto 0;
  width: 240px;
  height: 48px;
  background: rgba(132,177,237,1);
  box-shadow: 0px 2px 4px 0px rgba(228,228,228,0.5);
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(247,247,247,1);
  line-height: 48px;
}
.regist {
  position: absolute;
  bottom: 22px;
  right: 20px;
  margin-top: 124px;
  height: 22px;
  font-size: 16px;
  font-weight: 300;
  color: rgba(33,33,33,1);
  line-height: 22px;
}
</style>
