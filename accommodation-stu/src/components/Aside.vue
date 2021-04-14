<template>
  <div class="aside">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      style="height: 100%"
      active-text-color="#74c4d6"
      router
    >
      <!-- 首页 -->
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- 入学须知 -->
      <el-menu-item index="/notice">
        <i class="el-icon-document"></i>
        <span slot="title">入学须知 · 新生</span>
      </el-menu-item>
      <!-- 住宿论坛 -->
      <el-menu-item index="/forum">
        <i class="el-icon-s-help"></i>
        <span slot="title">宿舍论坛</span>
      </el-menu-item>
      <!-- 学生宿舍 -->
      <el-submenu index="live">
        <template slot="title">
          <i class="el-icon-s-management"></i>
          <span>办事大厅</span>
        </template>
        <el-menu-item index="/senior">换宿申请</el-menu-item>
        <el-menu-item index="/checkout">退宿办理</el-menu-item>
        <el-menu-item index="/watercard">水卡补办</el-menu-item>
      </el-submenu>
      <!-- 反馈 -->
      <el-menu-item index="/feedback">
        <i class="el-icon-s-comment"></i>
        <span slot="title">问题反馈</span>
      </el-menu-item>
      <!-- 个人信息 -->
      <el-menu-item index="/admin">
        <i class="el-icon-user-solid"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
.aside {
  display: flex;
  flex-direction: column;
  height: 100%;

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 180px;

    .user-tx {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 10px;
      cursor: pointer;
    }

    .user-name {
      font-size: 16px;
      color: #333;
      cursor: pointer;
    }
  }

  .el-menu-vertical-demo {
    flex: 1;
  }

  .iconfont {
    margin-left: 4px;
    margin-right: 5px;
    font-size: 18px;
    color: #909399;
  }
}

.el-menu {
  height: 100%;
  box-sizing: border-box;
  border: none !important ;
}

.el-menu-item.is-active {
  background-color: #ecf5ff !important;
  color: #009999 !important;
}
</style>