<template>
  <div class="header">
    <h1 class="manage-title">Dormitory Manage</h1>
    <div class="user-bd">
      <!-- 消息通知 -->
      <div @click="drawer = true">
        <el-badge class="item" :value="newMessageNum" :hidden="isMessage">
          <i class="iconfont icon-tongzhi"></i>
        </el-badge>
      </div>
      <!-- 消息通知组件 -->
      <el-drawer
        :visible.sync="drawer"
        :modal="false"
        :show-close="true"
        ref="drawer"
        size="20%"
      >
        <span slot="title" class="message-title">消息通知</span>
        <header-drawer :messages="messages" @closeDrawer="drawer = false" />
      </el-drawer>
      <!-- 个人 -->
      <el-dropdown @command="handleInfo" trigger="click">
        <div class="user-name">
          <span>Qthon</span>
          <i class="el-icon-caret-bottom icon"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="modifyPassword">修改密码</el-dropdown-item>
          <el-dropdown-item command="notLogin">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import headerDrawer from 'components/header/header-drawer';
export default {
  components: {
    headerDrawer
  },
  data() {
    return {
      drawer: false,
      messages: [{
        title: '换宿申请',
        content: '申请进度有更新',
        type: 'senior',
        look: false
      }, {
        title: '退宿办理',
        content: '正在加速办理中',
        type: 'checkout',
        look: true
      }, {
        title: '水卡补办进度更新了',
        content: '补办有新状态',
        type: 'watercard',
        look: false
      }, {
        title: '问题反馈状态更新了',
        content: '反馈有新状态',
        type: 'feedback',
        look: false
      }],
      // 最新消息数量
      newMessageNum: '',
    }
  },
  computed: {
    isMessage() {
      let num = false
      this.messages.forEach((item) => {
        if (!item.look) {
          num++
        }
      })
      num ? this.newMessageNum = num : this.newMessageNum = ''
    }
  },
  methods: {
    handleInfo(e) {
      if (e === 'modifyPassword' && this.$route.path !== '/admin') {
        this.$router.push('/login?type=modifyPassword')
      }
      if (e === 'notLogin') {
        this.$router.push('/login')
      }
    },
  },
  watch: {
    $route() {
      this.$refs.drawer.closeDrawer();
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .manage-title {
    box-sizing: border-box;
    margin: 0;
    font-size: 16px;
    color: #999;
    background-color: #fff;
    cursor: pointer;
    user-select: none;
  }
  .user-bd {
    display: flex;
    align-items: center;
    .message-title {
      font-size: 16px !important;
      font-weight: 700 !important;
    }
    .item {
      margin-right: 20px;
      cursor: pointer;
    }
    .user-name {
      font-size: 14px;
      color: #666;
      cursor: pointer;
      .icon {
        transition: 0.4s all;
        margin-left: 6px;
      }
      // 箭头动画效果
      &:focus .icon {
        transform: rotate(180deg);
      }
    }

    .message-title {
      font-size: 20px;
    }
  }
}

// 下拉菜单
/deep/ .el-dropdown-menu__item:hover {
  background-color: #ecf5ff !important;
  color: #009999 !important;
}

// 抽屉
/deep/ .el-drawer:focus {
  outline: none !important;
}

/deep/ .el-drawer__header > :first-child:focus {
  outline: none !important;
}

/deep/ .el-drawer__header {
  margin-bottom: 10px !important;
  padding: 20px 25px 0px !important;
}

/deep/ .el-badge__content.is-fixed {
  transform: translateY(-50%) translateX(100%) scale(0.7);
  line-height: 19px;
}
</style>