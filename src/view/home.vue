<template>
  <main>
    <div>
      <div class="my-title">书生</div>
      <div>书中有仙，一醉千年</div>
    </div>
    <div>
      <home-book-item></home-book-item>
    </div>
    <book-tabber></book-tabber>
  </main>
</template>
<script>
import bookTabber from '../components/Tabber'
import HomeBookItem from '../components/HomeBookItem'
export default {
  data () {
    return {
      userName: 'Tickmao'
    }
  },
  components: {
    bookTabber,
    HomeBookItem
  },
  methods: {
    goTo (url) {
      this.$router.push({path: url})
    }
  }
}
</script>
