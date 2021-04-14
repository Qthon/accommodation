<template>
  <div>
    <!-- username -->
    <div class="input-txt">
      <input
        type="text"
        :class="isUsernamefocus || username ? 'focus' : ''"
        @focus="isUsernamefocus = true"
        @blur="username ? (isUsernamefocus = true) : (isUsernamefocus = false)"
        v-model="username"
      />
      <span data-placeholder="username"></span>
    </div>
    <!-- password -->
    <div class="input-txt">
      <input
        type="password"
        :class="isPasswordfocus || password ? 'focus' : ''"
        @focus="isPasswordfocus = true"
        @blur="password ? (isPasswordfocus = true) : (isPasswordfocus = false)"
        v-model="password"
      />
      <span data-placeholder="password"></span>
    </div>
    <!-- button -->
    <div class="form-btn">
      <button class="logbtn" @click="handleLogin">登录</button>
    </div>
    <!-- notice -->
    <p class="notice">
      用户名为学号（学工号），密码默认为身份证后6位，若密码有误，请联系XX中心：61878607
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "172017001",
      password: "123456",
      isUsernamefocus: false,
      isPasswordfocus: false,
    };
  },
  created() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token')
    }
  },
  methods: {
    async handleLogin() {
      // 发送请求登录
      const res = await this.$axios({
        method: "post",
        url: "api/user/login",
        data: {
          user_id: this.username,
          password: this.password,
          role: 0,
        },
      });
      if (res.data.code == 200) {
        localStorage.setItem("token", res.data.token);
        this.$message({
          message: '登录成功',
          type: 'success'
        });
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.input-txt {
  border-bottom: 1px solid #adadad;
  position: relative;
  margin: 35px 0;

  input {
    font-size: 15px;
    color: #333333;
    border: none;
    width: 100%;
    outline: none;
    background: none;
    padding: 0 5px;
    height: 40px;
  }

  span {
    &::before {
      content: attr(data-placeholder);
      position: absolute;
      top: 50%;
      left: 5px;
      color: #999;
      transform: translateY(-50%);
      z-index: -1;
      transition: 0.5s;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 0%;
      height: 1px;
      background-color: #009999;
      transition: 0.5s;
    }
  }

  .focus + span::before {
    top: -5px;
    font-size: 12px;
  }

  .focus + span::after {
    width: 100%;
  }
}

.form-btn {
  text-align: center;
  margin-bottom: 20px;
  .logbtn {
    background-color: #009999;
    color: #fff;
    padding: 8px 30px;
    border: none;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    font-size: 14px;
    &:hover {
      background-color: #33aba0;
    }
    &:active {
      background-color: #009999;
    }
  }
}

.notice {
  color: #999;
  font-size: 13px;
  line-height: 20px;
  text-indent: 2em;
}
</style>