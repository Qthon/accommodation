<template>
  <div class="admin-form">
    <el-form ref="form" :model="form" label-width="80px">
      <!-- 基础信息 -->
      <el-row>
        <el-col :span="9">
          <!-- 姓名 -->
          <el-form-item :label="format('姓', '名')">
            <el-input
              :placeholder="form.name"
              size="medium"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <!-- 呢称 -->
          <el-form-item :label="format('呢', '称')">
            <el-input v-model="form.nickname" size="medium"> </el-input>
          </el-form-item>
          <!-- 性别 -->
          <el-form-item :label="format('性', '别')">
            <el-radio-group v-model="form.gender" size="medium">
              <el-radio disabled :label="1">男</el-radio>
              <el-radio disabled :label="0">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <!-- 学院 -->
          <el-form-item :label="format('学', '院')">
            <el-input
              :placeholder="form.departments"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <!-- 学号 -->
          <el-form-item :label="format('学', '号')">
            <el-input :placeholder="form.stu_id" :disabled="true"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 楼栋信息 -->
      <el-row>
        <el-col :span="6">
          <!-- 楼栋 -->
          <el-form-item :label="format('楼', '栋')" label-width="80px">
            <el-input :placeholder="form.tower" :disabled="true"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <!-- 宿舍号 -->
          <el-form-item label="宿舍号">
            <el-input :placeholder="form.room" :disabled="true"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <!-- 床位号 -->
          <el-form-item label="床位号">
            <el-input :placeholder="form.bedNum" :disabled="true"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 手机号码 -->
      <el-row>
        <el-col :span="7">
          <!-- 手机号码 -->
          <el-form-item label="手机号码" label-width="80px">
            <el-input v-model="form.telephone"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <!-- 按钮 -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit" size="medium"
          >确认修改</el-button
        >
        <el-button size="medium">重新填写</el-button>
      </el-form-item>
    </el-form>
    <div class="admin-avatar">
      <p class="admin-notice">
        部分资料信息不可修改，由管理员统一代为修改，若出现信息错误，可通过反馈，发送正确信息告知管理员。管理员核对完成后会将数据更新。
      </p>
      <img src="~assets/roomate.png" alt="图片加载失败" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "林俊杰",
        // 呢称
        nickname: "Qthon",
        // 性别
        gender: 1,
        // 学号
        stu_id: "171011026",
        // 楼栋
        tower: "东学楼29栋",
        // 学院
        departments: "电气与计算机工程学院",
        // 宿舍号
        room: "407",
        // 床位号
        bedNum: "B",
        // 手机号码
        telephone: "13184667778",
        // 头像
        imageUrl: ''
      },
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
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },

    // 提交申请
    onSubmit() {
      this.$confirm("确认修改?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          console.log("OK");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消提交",
          });
        });
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/untils/form-common.less");
.admin-form {
  padding: 20px 0px 0px 0px;
  position: relative;
  .admin-avatar {
    position: absolute;
    width: 300px;
    height: 200px;
    right: 2%;
    top: 5%;
    img {
      width: 20%;
      overflow: hidden;
      border-radius: 50%;
      margin-top: 10px;
    }
    .admin-notice {
      position: relative;
      color: #999;
      font-size: 13px;
      line-height: 18px;
      text-indent: 2em;
      border: 1px #eee solid;
      padding: 8px;
      border-radius: 5px;
      &::before {
        content: "";
        display: block;
        bottom: -16px;
        left: 25px;
        position: absolute;
        width: 0;
        height: 0;
        line-height: 0;
        font-size: 0;
        border: 8px solid transparent;
        border-top-color: #f0f2f9;
      }
    }
  }
}

/deep/ .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
/deep/ .avatar-uploader .el-upload:hover {
  border-color: #009999;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>