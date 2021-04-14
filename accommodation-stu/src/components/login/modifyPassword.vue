<template>
  <div class="modify-password">
    <el-form ref="form" :model="form" label-width="80px" size="medium">
      <el-form-item label="原密码" required>
        <el-input
          v-model="form.oldPwd"
          type="password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="新密码" required>
        <el-input
          v-model="form.newPwd"
          type="password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" required>
        <el-input v-model="form.pwd" type="password" show-password></el-input>
      </el-form-item>
      <el-form-item class="form-btn">
        <el-button type="primary" size="medium" @click="onSubmit"
          >确认</el-button
        >
        <el-button size="medium" @click="onSubmit">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        oldPwd: '',
        newPwd: '',
        pwd: '',
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('OK');
    }
  }
}
</script>

<style lang="less" scoped>
@import url("~@/untils/form-common.less");

/deep/ .el-form-item {
  margin-bottom: 20px;
}
</style>