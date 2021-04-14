<template>
  <div class="login-wrapper">
    <span class="stu-text">StuAccommodation | Manage</span>

    <el-form size="medium" class="login-box">
      <span class="login-title">管理员登录</span>
      <el-form-item class="form-item">
        <el-input
          type="text"
          placeholder="用户名"
          v-model="username"
        ></el-input>
      </el-form-item>
      <el-form-item class="form-item">
        <el-input
          type="password"
          placeholder="密码"
          v-model="password"
        ></el-input>
      </el-form-item>

      <el-form-item class="form-btn-box">
        <el-button type="primary" @click="handleLogin" class="form-item"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "1001",
      password: "1001",
      fullscreenLoading: false,
    };
  },
  methods: {
    async handleLogin() {
      const loading = this.$loading({
        lock: true,
        text: "loading",
        spinner: "el-icon-loading",
        background: "rgba(255, 255, 255, 0.8)",
        customClass: "create-isLoading",
      });

      const data = await this.$axios({
        method: "post",
        url: "/api/user/login",
        data: {
          user_id: this.username,
          password: this.password,
          role: 1,
        },
      });
      console.log(data.data.code == 200);
      if (data.data.code == 200) {
        localStorage.setItem("token", data.data.token);
        this.$router.push("/home");
      } else {
        this.$message.warning(data.data.msg);
      }
      loading.close();
    },
  },
};
</script>

<style lang="less" scoped>
@import url("../untils/form-common.less");

.login-wrapper {
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
    color: #009999;
    font-size: 20px;
    font-weight: 600;
  }

  .login-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    height: 300px;
    padding: 20px 50px;
    border-radius: 7px;
    box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    box-sizing: border-box;

    .login-title {
      font-size: 20px;
      margin: 10px 0 30px;
    }

    .form-item {
      width: 100%;
    }

    .form-btn-box {
      width: 60%;
    }
  }
}
</style>