<template>
    <!-- 表格 -->
    <el-table :data="tableData" height="500" style="width: 100%" class="table" @filter-change="filterTagTable" border>

      <el-table-column
        prop="date"
        label="日期"
        sortable>
      </el-table-column>
      
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>

      <el-table-column
        prop="stuNum"
        label="学号/工号">
      </el-table-column>

      <el-table-column
        prop="mobile"
        label="联系电话">
      </el-table-column>

      <el-table-column
        prop="reason"
        label="反馈内容"
        show-overflow-tooltip
        width="200">
      </el-table-column>

      <el-table-column
        prop="state"
        label="反馈进度"
        :filters="[{ text: '未读', value: '未读' }, { text: '已读', value: '已读' }, { text: '已批注', value: '已批注' }]"
        column-key="aStatus">
      </el-table-column>

      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="mini" plain @click="handleCheck(scope.$index, scope.row)"
            >查看</el-button>
          <el-button
            size="mini"
            type="primary"
            @click="handlePostil(scope.$index, scope.row)"
            >批注</el-button>
        </template>
      </el-table-column>

    </el-table>
</template>

<script>
export default {
    props: {
        tableData: Array
    },
    data() {
      return {

      };
    },
    mounted() {},
    methods: {
      // 反馈进度筛选
      filterTagTable(e){
        this.$emit('handleFilter',e.aStatus)
      },
      // 查看
      handleCheck(index,e){
          this.$emit('handleCheck',{index,content: e})
      },
      // 批注
      handlePostil(index,e){
          this.$emit('handlePostil',{index,content: e})
      }
      
    },
};
</script>

<style lang="less" scoped>
@import url("../../untils/form-common.less");
.table {
    flex: 1;
    margin-bottom: 14px;
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

/deep/ .el-table .cell {
  display: flex;
  align-items: center;
}

.operation-box {
  display: flex;
  align-items: center;
  margin-top: 10px;

  & > span {
    font-size: 14px;
    margin-right: 20px;
  }
}
</style>
