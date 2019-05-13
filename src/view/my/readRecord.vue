<template>
  <main>
    <div class="my-read-record">
      <div class="my-read-record-back" @click="onBack"></div>
    </div>
    <div class="read-record-userinfo">
      <img src="../../assets/images/Bitmap@2x.png">
      <span>Tickmao</span>
    </div>
    <div class="record-title">阅读记录</div>
    <div class="flex">
      <div class="flexTd record-list" v-for="(item, idx) in recordList" :key="idx">
        <div><img src="../../assets/images/Rectangle.png"></div>
        <div>{{item.bookName}}</div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data () {
    return {
      recordList: [{
        // img: require('../../assets/images/default_book_img.jpg'),
        bookName: '追风筝的人'
      }, {
        // img: require('../../assets/images/default_book_img.jpg'),
        bookName: '追风筝的人'
      }, {
        // img: require('../../assets/images/default_book_img.jpg'),
        bookName: '追风筝的人'
      }, {
        // img: require('../../assets/images/default_book_img.jpg'),
        bookName: '追风筝的人'
      }]
    }
  },
  methods: {
    onBack () {
      this.$router.back(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.my-read-record {
  width: 100%;
  height: 232px;
  background: url('../../assets/images/Rectangle.png') no-repeat;
  background-size: 100% 100%;
  .my-read-record-back {
    width: 25px;
    height: 45px;
    margin-left: 25px;
    padding-top: 20px;
  }
}
.read-record-userinfo {
  margin-top: -30px;
  margin-left: 34px;
  position: relative;
  img {
    width: 60px;
    height: 60px;
    display: inline-block;
    border-radius: 50%;
  }
  span {
    font-size: 20px;
    font-weight: 600;
    color: rgba(74,74,74,1);
    display: inline-block;
    height: 30px;
    line-height: 30px;
    position: absolute;
    top: 30px;
    left: 67px;
  }
}
.record-title {
  margin-top: 23px;
  margin-bottom: 20px;
  margin-left: 19px;
  height:28px;
  font-size:20px;
  font-weight:600;
  color:rgba(74,74,74,1);
  line-height:28px;
}
.flex {
  padding: 0 20px;
  flex-wrap: wrap;
}
.record-list {
  margin-right: 32px;
  >div:first-child {
    width: 90px;
    height: 115px;
    border-radius: 5px;
    img {
      border-radius: 5px;
      width: 100%;
      height: 100%;
    }
  }
  >div:last-child {
    margin-top: 11px;
    height:17px;
    font-size:12px;
    font-weight:400;
    color:rgba(74,74,74,1);
    line-height:17px;
    margin-bottom: 20px;
  }
}
</style>
