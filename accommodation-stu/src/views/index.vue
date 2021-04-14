<template>
  <div class="stu">
    <!-- 我的宿舍 -->
    <div class="stu-header">
      <MyRoom />
    </div>
    <div class="stu-main">
      <!-- 左边布局 -->
      <div class="stu-msg">
        <!-- 近15日用电量 -->
        <Electric />
        <!-- 常见问题 -->
        <CommonPro />
      </div>
      <!-- 右边布局 -->
      <div class="stu-apply">
        <!-- 快捷导航 -->
        <ShortCut />
        <!-- 最新动态 -->
        <Todo />
      </div>
    </div>
  </div>
</template>

<script>
import MyRoom from "../components/index/myRoom";
import Electric from "../components/index/Electric";
import ShortCut from "../components/index/Shorcut";
import Todo from "../components/index/Todo";
import CommonPro from "../components/index/CommonPro";
export default {
  components: {
    Electric,
    MyRoom,
    ShortCut,
    Todo,
    CommonPro,
  },
  created() {
    if (!localStorage.getItem('token')) {
      this.$router.push('/login')
    }
  }
};
</script>

<style lang="less" scoped>
.stu {
  width: 100%;
  .stu-header {
    width: 100%;
    margin-bottom: 30px;
  }
  .stu-main {
    width: 100%;
    display: flex;
    justify-content: space-between;

    // 左边布局
    .stu-msg {
      width: 65%;
      margin-right: 15px;
    }

    // 右边布局
    .stu-apply {
      width: 35%;
    }
  }
}
</style>