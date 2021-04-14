<template>
  <div class="search-name-wrapper">
    <el-form ref="form" class="from-msg" label-position="left">
      <!-- 基本信息 -->
      <el-row>
        <!-- 楼号 -->
        <el-col :span="8">
          <el-form-item
            :label="'楼' + '\xa0\xa0\xa0\xa0\xa0\xa0' + '号'"
            label-width="80px"
          >
            <el-input placeholder="请输入楼号" size="medium" v-model="floorNum">
            </el-input>
          </el-form-item>
        </el-col>
        <!-- 宿舍号 -->
        <el-col :span="8">
          <el-form-item
            :label="'宿' + '\xa0' + '舍' + '\xa0' + '号'"
            label-width="80px"
          >
            <el-input
              placeholder="请输入宿舍号"
              size="mediumu"
              v-model="roomNum"
            >
            </el-input>
          </el-form-item>
        </el-col>
        <!-- 按钮 -->
        <el-col :span="8">
          <el-button type="primary" @click="onSubmit" size="medium"
            >查询</el-button
          >
          <el-button @click="handleReset" size="medium">重置</el-button>
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
      <el-table-column prop="user_id" label="学号">
        <template slot-scope="scope">
          <span>{{
            scope.row.user_id === null ? "空" : scope.row.user_id
          }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="truename" label="姓名"> </el-table-column>

      <el-table-column prop="towerNum" label="楼号"> </el-table-column>

      <el-table-column prop="roomNum" label="宿舍号"> </el-table-column>

      <el-table-column prop="bedNum" label="床位号"> </el-table-column>

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
      floorNum: "",
      roomNum: "",
      tableData: [],
      formInfo: {},
    };
  },
  async mounted() {
    const data = await this.$axios({
      method: "get",
      url: "/api/user/getDormInfo",
    });
    this.tableData = data.data.data
    console.log(data.data.data);
  },

  methods: {
    // 查询
    async onSubmit() {
      const data = await this.$axios({
        method: "get",
        url: "/api/user/getDormInfo",
        params: {
          towerNum: this.towerNum,
          roomNum: this.roomNum,
        },
      });

      this.tableData = data.data.data
    },
    // 重置
    handleReset() {
      this.name = "";
      this.userNum = "";
      this.tableData = [];
    },
    // 编辑
    handleEdit(index, e) {
      this.formInfo = { data: e, index };
      this.$refs.editDialog.show();
    },
    // 删除
    handleDel(index, e) {
      this.$confirm("确认删除?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
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
    // 确认修改
    handleConfirm(e) {
      this.$set(this.tableData, e.index, e.data);
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