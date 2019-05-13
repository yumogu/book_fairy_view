<template>
  <div class="book-info-item">
    <div class="book-info">
      <div class="book-img">
        <img src="../assets/images/Rectangle.png" />
      </div>
      <div class="book-info-title">{{bookItems.bookName}}</div>
      <div class="book-info-subTitle">{{bookItems.subTitle}}</div>
      <div class="flex book-info-size-date">
        <div class="tl">{{bookItems.size}}</div>
        <div class="tr">{{bookItems.lastReadDate}}</div>
      </div>
      <div class="book-info-progress">
        <x-progress :percent="bookItems.progress" :show-cancel="false"></x-progress>
      </div>
    </div>
  </div>
</template>
<script>
import { XProgress } from 'vux'
export default {
  name: 'home-book-item',
  data () {
    return {}
  },
  components: {
    XProgress
  },
  props: {
    bookItems: {
      type: Object,
      default () {
        return {
          bookName: '追风筝的人',
          image: '../assets/images/51_active20190429161322.png',
          progress: 80,
          subTitle: '追风筝的人',
          lastReadDate: '2019.05.02',
          size: '13.2M'
        }
      }
    }
  },
  methods: {}
}
</script>
<style>
.weui-progress__bar {
  background: #ffffff !important;
  height:2px !important;
  border-radius:1px !important;
}
.weui-progress__inner-bar {
  background-color: #84B1ED !important;
}
</style>

<style lang="less" scoped>
.book-info-item {
  margin: 0 auto;
  width:335px;
  height: 140px;
}
.book-info {
  height: 100px;
  margin-top: 40px;
  background:rgba(255,255,255,1);
  box-shadow:0px 4px 10px 0px rgba(242,241,241,1);
  border-radius:5px;
  position: relative;
  padding-left: 110px;
  .book-img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 110px;
    height: 140px;
    border-radius: 10px;
    img  {
      width: 100%;
      height: 100%;
    }
  }
  .flex {
    >div {
      width: 50%;
    }
    >div:first-child {
      padding-left: 15px;
    }
    >div:last-child {
      padding-right: 20px;
    }
  }
  .book-info-title {
    height:25px;
    font-size:18px;
    font-weight:600;
    color:rgba(74,74,74,1);
    line-height:25px;
    margin: 10px 0 10px 15px;
  }
  .book-info-subTitle {
    height:17px;
    font-size:12px;
    font-weight:600;
    color:rgba(152,152,152,1);
    line-height:17px;
    margin-left: 15px;
  }
  .book-info-size-date {
    margin-top: 10px;
    height:17px;
    font-size:12px;
    font-weight:600;
    color:rgba(74,74,74,1);
    line-height:17px;
  }
  .book-info-progress {
    position: absolute;
    bottom: 0;
    left: 108px;
    width: 227px;
  }
}
</style>
