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
            <el-input
              placeholder="请输入楼号"
              size="medium"
              v-model="floorNum"
            ></el-input>
          </el-form-item>
        </el-col>
        <!-- 宿舍号 -->
        <el-col :span="8">
          <el-form-item
            :label="'宿' + '\xa0' + '舍' + '\xa0' + '号'"
            label-width="85px"
          >
            <el-input
              placeholder="请输入宿舍号"
              size="mediumu"
              v-model="roomNum"
            ></el-input>
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
      <el-table-column prop="floorNum" label="楼号"> </el-table-column>

      <el-table-column prop="roomNum" label="宿舍号"> </el-table-column>

      <el-table-column prop="bedNum" label="床位号"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      floorNum: "",
      roomNum: "",
      tableData: [],
    };
  },
  mounted() {},

  methods: {
    // 查询
    async onSubmit() {
      this.tableData = [];
      // this.tableData = [{
      //     floorNum: '东学楼29号',
      //     roomNum: 407,
      //     bedNum: 'B床'
      // }]

      const data = await this.$axios({
        method: "get",
        url: "/api/user/getDormInfo",
        params: {
          towerNum: this.floorNum,
          roomNum: this.roomNum,
        },
      });

      if (data.data.code != 200) return;

      let table = data.data.data.filter((item) => {
        return !item.user_id;
      });

      if (!table.length) {
        this.$message.warning("暂无搜索结果");
        return;
      }

      this.tableData = table.map((item) => {
        return {
          floorNum: item.towerNum,
          roomNum: item.roomNum,
          bedNum: item.bedNum,
        };
      });
    },
    handleReset() {
      // 重置
      this.name = "";
      this.userNum = "";
      this.tableData = [];
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