<template>
  <div id="app">
    <router-view v-if="path === '/login'"></router-view>

    <el-container v-else>
      <!-- 头部 -->
      <el-header>
        <Header />
      </el-header>
      <el-container class="main">
        <!-- 侧边栏导航 -->
        <el-aside width="220px">
          <Aside />
        </el-aside>
        <!-- 主体内容 -->
        <el-main>
          <transition name="el-fade-in-linear">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Header from "./components/Header";
import Aside from "./components/Aside";

export default {
  components: {
    Header,
    Aside,
  },
  data() {
    return {
      path: "",
    };
  },
  watch: {
    $route: {
      handler(to) {
        this.path = to.path;
      },
      immediate: true,
    },
  },
};
</script>

<style lang="less">
@import "./untils/form-common.less";

body {
  background-color: #f0f2f9;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

html,
body,
#app,
.el-container {
  height: 100%;
}

.el-header {
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #dddddd;
}

.el-main {
  padding: 15px 15px !important;
  height: calc(100vh - 60px);
  // 去掉滚动条且不影响页面滚动效果，存在兼容性(IE低版本的不支持)
  &::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
  }
}

.el-aside {
  height: calc(100vh - 60px);
  background-color: #fff;
  // 去掉滚动条且不影响页面滚动效果，存在兼容性(IE低版本的不支持)
  &::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
  }
}

// 下拉框组件的选中样式覆盖修改
.select-option {
  .selected {
    font-weight: normal !important;
    color: #009999 !important;
  }
  .el-scrollbar__thumb {
    display: none !important;
  }
}
</style>
