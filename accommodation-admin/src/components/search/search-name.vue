<template>
  <div class="search-name-wrapper">
    <el-form ref="form" class="from-msg" label-position="left">
      <!-- 基本信息 -->
      <el-row>
        <!-- 姓名 -->
        <el-col :span="8">
          <el-form-item
            :label="'姓' + '\xa0\xa0\xa0\xa0\xa0\xa0' + '名'"
            label-width="80px"
          >
            <el-input placeholder="请输入姓名" size="medium" v-model="name">
            </el-input>
          </el-form-item>
        </el-col>
        <!-- 学号/工号查询 -->
        <el-col :span="8">
          <el-form-item label="学号/工号" label-width="85px">
            <el-input
              placeholder="请输入学号/工号"
              size="mediumu"
              v-model="userNum"
            >
            </el-input>
          </el-form-item>
        </el-col>
        <!-- 按钮 -->
        <el-col :span="8">
          <el-button type="primary" @click="onSubmit" size="medium"
            >查询</el-button
          >
          <el-button @click="handleReset" size="medium">清空</el-button>
        </el-col>
      </el-row>
    </el-form>

    <!-- 表格 -->
    <el-table
      :data="tableData"
      border
      height="470"
      style="width: 100%"
      class="table"
    >
      <!-- 学号 -->
      <el-table-column prop="user_id" label="学号"> </el-table-column>
      <!-- 姓名 -->
      <el-table-column prop="truename" label="姓名"> </el-table-column>
      <!-- 性别 -->
      <el-table-column prop="gender" label="性别"> </el-table-column>
      <!-- 手机号 -->
      <el-table-column prop="telphone" label="手机号" width="130">
      </el-table-column>
      <!-- 学院名称 -->
      <el-table-column prop="institution" label="学院名称"> </el-table-column>
      <!-- 专业班级 -->
      <el-table-column prop="profession" label="专业班级"> </el-table-column>
      <!-- 入学年份 -->
      <el-table-column prop="grade" label="入学年份"> </el-table-column>
      <!-- 操作 -->
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            plain
            @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDel(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 编辑弹框 -->
    <edit-dialog
      ref="editDialog"
      :info="formInfo"
      @handleConfirm="handleConfirm"
    />
  </div>
</template>

<script>
import editDialog from "./edit-dialog.vue";
export default {
  components: {
    editDialog,
  },
  data() {
    return {
      name: "",
      userNum: "",
      tableData: [],
      formInfo: {},
    };
  },
  async mounted() {
    const data = await this.$axios({
      methods: 'get',
      url: '/api/admin/getinfo',
    })
    this.tableData = data.data.data
  },

  methods: {
    // 查询
    async onSubmit() {
      const data = await this.$axios({
        method: "get",
        url: "/api/admin/getinfo",
        params: {
          user_id: this.userNum,
          truename: this.name,
        },
      });
      // console.log(data.data);
      if (data.data.code === 400) {
        this.$message({
          type: "warning",
          message: `${data.data.msg}`,
        });
        return
      }
      this.tableData = data.data.data
    },
    handleReset() {
      // 重置
      this.name = "";
      this.userNum = "";
    },
    // 编辑
    handleEdit(index, e) {
      this.formInfo = { data: e, index };
      this.$refs.editDialog.show();
    },
    // 确认修改
    handleConfirm(e) {
      this.$set(this.tableData, e.index, e.data);
    },
    // 删除
    handleDel(index, e) {
      this.$confirm("确认删除?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios({
            method: "get",
            url: "/api/admin/deleteInfo",
            params: {
              user_id: e.user_id,
            },
          });
          // 发送请求删除
          this.tableData.splice(index, 1);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style lang="less" scoped>
@import url("../../untils/form-common.less");
.search-name-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.tabel {
  flex: 1;
}

.from-msg {
  .el-form-item {
    margin-right: 30px;
  }
}
.illustrate {
  display: flex;
  margin-bottom: 15px;
  .hd {
    letter-spacing: 2em;
  }
  .bd {
    p {
      margin-bottom: 15px;
    }
  }
}

/deep/ .el-table th,
.el-table tr {
  background-color: #f5f7fa !important;
}
</style>