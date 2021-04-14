<template>
  <div class="login-wrapper">
    <span class="stu-text">StuAccommodation | Manage</span>
    <div size="medium" class="login-box">
      <!-- 修改密码 -->
      <div v-if="$route.query.type === 'modifyPassword'">
        <h1 class="login-title">修改密码</h1>
        <Modify />
      </div>
      <!-- 用户登录 -->
      <div v-else>
        <h1 class="login-title">用户登录</h1>
        <Login />
      </div>
    </div>
  </div>
</template>

<script>
import Login from 'components/login/login'
import Modify from 'components/login/modifyPassword'

export default {
  components: {
    Login,
    Modify
  },
  data() {
    return {}
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.login-wrapper {
  background-image: url("~assets/login/loginBg.jpg");
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .stu-text {
    position: absolute;
    left: 25px;
    top: 25px;
    color: #f8f8f8;
    font-size: 20px;
    font-weight: 600;
  }

  .login-box {
    width: 450px;
    background: rgba(255, 255, 255, 0.85);
    padding: 20px 50px;
    border-radius: 10px;
    box-sizing: border-box;
    position: absolute;
    box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.1);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .login-title {
      text-align: center;
      font-size: 18px;
      margin: 10px 0 30px;
      font-weight: 700;
      color: #555;
      letter-spacing: 0.1em;
    }
  }
}
</style>