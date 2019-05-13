<template>
<div>
  <tabbar class="book_tabber">
    <tabbar-item>
      <img class="home" slot="icon" @click="selectTabber('homeIcon')"  :src="homeIcon">
    </tabbar-item>
    <tabbar-item>
      <img class="tag" slot="icon" @click="selectTabber('tagIcon')" :src="tagIcon">
    </tabbar-item>
    <tabbar-item>
      <img class="my" slot="icon" @click="selectTabber('myIcon')" :src="myIcon">
    </tabbar-item>
  </tabbar>
</div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'book-tabber',
  data () {
    return {
      myIcon: require('../assets/images/my.png'),
      tagIcon: require('../assets/images/tag.png'),
      homeIcon: require('../assets/images/home-high-light.png')
    }
  },
  components: {
    Tabbar,
    TabbarItem
  },
  methods: {
    selectTabber (type) {
      switch (type) {
        case 'myIcon':
          this.myIcon = require('../assets/images/my-high-light.png')
          this.tagIcon = require('../assets/images/tag.png')
          this.homeIcon = require('../assets/images/home.png')
          break
        case 'tagIcon':
          this.myIcon = require('../assets/images/my.png')
          this.tagIcon = require('../assets/images/tag-high-light.png')
          this.homeIcon = require('../assets/images/home.png')
          break
        case 'homeIcon':
          this.myIcon = require('../assets/images/my.png')
          this.tagIcon = require('../assets/images/tag.png')
          this.homeIcon = require('../assets/images/home-high-light.png')
          break
      }
    }
  }
}
</script>
<style lang="less">
body {
  margin: 0;
}
.book_tabber.weui-tabbar {
  background-color: #ffffff;
  > a > .weui-tabbar__icon {
    .home {
      width:23px;
      height:19px;
    }
    .tag {
      width:19px;
      height:19px;
    }
    .my {
      width:19px;
      height:19px;
    }
  }
}
.book_tabber.weui-tabbar >.weui-tabbar__item {
  padding: 14px 0 5px 0;

  >.weui-tabbar__icon {

  }
}
</style>
