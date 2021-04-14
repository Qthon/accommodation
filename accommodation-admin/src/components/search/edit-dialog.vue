<template>
  <el-dialog :visible.sync="dialogVisible">
    <el-form ref="form" :model="form" label-width="100px">
      <!-- 基础信息 -->
      <el-row>
        <el-col :span="16">
          <!-- 姓名 -->
          <el-form-item :label="format('姓', '名')">
            <el-input v-model="form.truename" size="medium" />
          </el-form-item>
          <!-- 性别 -->
          <el-form-item :label="format('性', '别')">
            <el-radio-group v-model="form.gender" size="medium">
              <el-radio label="男">男</el-radio>
              <el-radio label="女">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <!-- 学院 -->
          <el-form-item :label="format('学', '院')">
            <el-input v-model="form.institution" />
          </el-form-item>
          <!-- 专业班级 -->
          <el-form-item label="专业班级">
            <el-input v-model="form.profession" />
          </el-form-item>
          <!-- 学号 -->
          <el-form-item :label="format('学', '号')">
            <el-input v-model="form.user_id" />
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 手机号码 -->
      <el-row>
        <el-col :span="16">
          <!-- 手机号码 -->
          <el-form-item label="手机号码" label-width="100px">
            <el-input v-model="form.telphone" />
          </el-form-item>
        </el-col>
      </el-row>

      <!-- 按钮 -->
      <el-form-item>
        <el-button type="primary" @click="handleConfirm" size="medium"
          >确认修改</el-button
        >
        <el-button size="medium" @click="handleEmpty">全部清空</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  props: {
    info: Object,
  },
  data() {
    return {
      dialogVisible: false,
      postil: "",
      form: {},
    };
  },
  computed: {
    format() {
      return (a, b) => {
        return `${a}\xa0\xa0\xa0\xa0\xa0${b}\xa0\xa0`;
      };
    },
  },
  methods: {
    show() {
      this.dialogVisible = true;
    },
    hide() {
      this.dialogVisible = false;
    },
    // 确认修改
    handleConfirm() {
      this.$axios({
        method: "post",
        url: "/api/admin/update",
        data: {
          user_id: this.form.user_id,
          truename: this.form.truename,
          gender: this.form.gender,
          class: this.form.class,
          telphone: this.form.telphone,
          institution: this.form.institution,
        },
      });
      this.$emit("handleConfirm", { data: this.form, index: this.info.index });
      this.dialogVisible = false;
    },
    // 清空
    handleEmpty() {
      this.form = {};
    },
  },
  watch: {
    dialogVisible(is) {
      if (is) {
        // console.log(this.info);
        this.form = this.info.data
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import url("../../untils/form-common.less");
/deep/ .el-dialog {
  width: 40%;
}
</style>