<template>
  <div class="drawer-wrapper">
    <div class="drawer-main">
      <!-- 通过判断look来显示is-dot -->
      <el-badge
        class="drawer-item-box"
        v-for="(item, index) in message"
        :key="item + index"
        :is-dot="!item.look"
      >
        <div @click="handleMessage(item, index)">
          <div class="drawer-item-title">
            {{ item.title }}
            <span class="drawer-item-time">2021-3-19 9:00</span>
          </div>
          <span class="drawer-item-content">{{ item.content }}</span>
        </div>
      </el-badge>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: Array
  },
  data() {
    return {
      message: []
    }
  },
  methods: {
    handleMessage(value, index) {
      //   取消通知点
      if (!value.look) this.message[index].look = true
      // 修复重复跳转路由缺陷
      if (this.$route.path === `/${value.type}`) {
        this.$emit('closeDrawer')
        return
      }
      this.$router.push(`/${value.type}`)

    }
  },
  watch: {
    messages: {
      handler(arr) {
        this.message = arr;
      },
      immediate: true
    }
  }
}
</script>

<style lang="less" scoped>
.drawer-wrapper {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  box-sizing: border-box;
  height: 100vh;
  font-size: 14px;

  .drawer-main {
    overflow-y: auto;
    flex: 1;
    width: 100%;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 0;
    }
  }

  .drawer-item-box {
    width: 100%;
    padding: 12px 12px 12px 5px;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background: rgba(0, 150, 136, 0.1);
    }

    .drawer-item-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #333;
      margin-bottom: 5px;

      .drawer-item-time {
        font-size: 14px;
        color: #999;
      }
    }

    .drawer-item-content {
      font-size: 12px;
      color: #999;
    }
  }
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/deep/ .el-badge__content.is-fixed.is-dot {
  right: 12px;
  top: 8px;
}
</style>