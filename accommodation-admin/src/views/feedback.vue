<template>
  <div class="feedback-wrapper">
    <h3 class="feedback-title">问答反馈</h3>
    <!-- 表格 -->
    <Form :tableData="tableData" @handleCheck="handleCheck" @handlePostil="handlePostil" @handleFilter="handleFilter" />

    <!-- 分页 -->
    <el-pagination
        background 
		    layout="prev, pager, next, sizes, total, jumper"
		    :page-sizes="[5, 10, 15, 20]"
		    :page-size="pagesize"
		    :total="tabAllDate.length"
		    @current-change="handleCurrentChange"
		    @size-change="handleSizeChange"
    />

    <!-- 查看对话框表单 -->
    <Dialog-form ref="dialogForm" :info="formInfo" />

    <!-- 批注对话框表单 -->
    <Dialog-postil ref="dialogPostil" :info="postilInfo" />

  </div>
</template>

<script>
import Form from '@/components/feedback/Form'
import DialogForm from '@/components/feedback/Dialog-form'
import DialogPostil from '@/components/feedback/Dialog-postil'
export default {
  components: {
      Form,
      DialogForm,
      DialogPostil
  },
  data() {
    return {
      pagesize: 5,
      currentPage: 1,
      tableData: [],
      tabAllDate: [],
      formInfo: {},
      postilInfo: {}
    };
  },
  created(){
      this.getList()
  },
  mounted() {},

  methods: {
    // 表单点击查看
    handleCheck(e){
      this.formInfo = e.content
      this.$refs.dialogForm.show()
    },
    // 表单点击批注
    handlePostil(e){
      this.postilInfo = e
      this.$refs.dialogPostil.show()
    },
    // 当前页发生变化
    handleCurrentChange(current){
      this.currentPage = current
      this.getList()
    },
    // 每页显示条数发生变化
    handleSizeChange(pagesSize){
      this.pagesize = pagesSize
      this.getList()
    },
    // 反馈进度筛选
    handleFilter(state){
      // let tableList = this.tabAllDate
      // this.tabAllDate = []
      // if(state.length) {
      //     state.forEach(item => {
      //       tableList.forEach(e => {
      //         if(e.state == item){
      //           console.log(e)
      //           this.tabAllDate.push(e)
      //         }
      //       })
      //     })
      // }
      // console.log(this.tabAllDate)
      // this.tableData = []
      // this.tabAllDate.forEach((item,index) => {
      //   if(this.pagesize * (this.currentPage - 1) <= index && index < this.pagesize * this.currentPage) {
      //     this.tableData.push(item)
      //   }
      // })
      
      // console.log(this.tableData)
    },
    // 获取问答反馈列表数据
    getList(){
      // 发起请求获取数据
      this.tableData = []
      this.tabAllDate = [
        {
          date: "2021-03-01",
          name: "林俊杰",
          stuNum: 123456,
          mobile: 13800000000,
          reason: "丢了！",
          state: "未读",
        },{
          date: "2021-03-01",
          name: "林俊杰",
          stuNum: 123456,
          mobile: 13800000000,
          reason: "丢了！",
          state: "未读",
        },{
          date: "2021-03-01",
          name: "已匿名",
          stuNum: 123456,
          mobile: 13800000000,
          reason: "丢了！",
          state: "未读",
        },
        {
          date: "2021-03-02",
          name: "林俊杰",
          stuNum: 123456,
          mobile: 13800000000,
          reason: "丢了！",
          state: "未读",
        },
        {
          date: "2021-03-03",
          name: "林俊杰",
          stuNum: 123456,
          mobile: 13800000000,
          reason: "丢了！",
          state: "已读",
        },
        {
          date: "2021-03-04",
          name: "林俊杰",
          stuNum: 123456,
          mobile: 13800000000,
          reason:
            "丢了！真的丢了丢了！真的丢了丢了！真的丢了丢了！真的丢了丢了！真的丢了丢了！真的丢了丢了！真的丢了丢了！真的丢了丢了！真的丢了丢了！真的丢了丢了！真的丢了",
          state: "已批注",
        },
        {
          date: "2021-03-05",
          name: "林俊杰",
          stuNum: 123456,
          mobile: 13800000000,
          reason: "丢了！",
          state: "已批注",
        },
      ]
      this.tabAllDate.forEach((item,index) => {
        if(this.pagesize * (this.currentPage - 1) <= index && index < this.pagesize * this.currentPage) {
          this.tableData.push(item)
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../untils/form-common.less");
.feedback-wrapper {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px 30px;
  border-radius: 8px;
  box-sizing: border-box;
  height: 100%;
}

.feedback-title {
  font-size: 14px;
  font-weight: normal;
  color: #666;
  margin: 0 0 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
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
</style>
