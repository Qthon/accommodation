<template>
  <div class="search-wrapper">
    <h2 class="checkout_title">
      <span :class="{ active: toggle == 'basemsg' }" @click="goto('basemsg')"
        >信息查询</span
      >
      <span class="line">|</span>
      <span :class="{ active: toggle == 'dorm' }" @click="goto('dorm')"
        >宿舍详情</span
      >
    </h2>
    <keep-alive>
      <search-name v-if="toggle === 'basemsg'" />
      <search-room v-if="toggle === 'dorm'" />
    </keep-alive>
  </div>
</template>

<script>
import searchName from '../components/search/search-name'
import searchRoom from '../components/search/search-room.vue'

export default {
  components: {
    searchName,
    searchRoom,
  },
  data() {
    return {
      toggle: this.$route.query.type,
    }
  },
  methods: {
    goto(type) {
      this.toggle = type
      if (this.$route.query.type === type) return
      this.$router.push(`/search?type=${type}`)
    }
  }
}
</script>

<style lang="less" scoped>
.search-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #fff;
  padding: 8px 30px 20px;
  margin: 0px auto;
  color: #666;
  font-size: 14px;
  border-radius: 6px;
}

.checkout_title {
  font-size: 14px;
  padding-bottom: 10px;
  font-weight: normal;
  margin-bottom: 20px;
  letter-spacing: 0.1em;
  border-bottom: 1px solid #eee;
  & > span {
    padding: 10px 5px;
    cursor: pointer;
    box-sizing: border-box;
  }
}

.active {
  color: #009999;
  border-bottom: 2px solid #009999;
}

.line {
  margin: 0 5px;
}
</style>