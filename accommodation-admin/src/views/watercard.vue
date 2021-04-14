<template>
    <div class="watercard-wrapper">
        <h3 class="watercard-title">水卡补办</h3>

        <div class="operation-box">
            <span>批量操作:</span>
            <el-button @click="handlerOperation('pass')"  plain size="mini" :disabled="selectAll.pass">通过</el-button>
            <el-button @click="handlerOperation('nopass')"  plain size="mini" :disabled="selectAll.nopass">不通过</el-button>
            <el-button @click="handlerOperation('delete')"  plain size="mini" :disabled="selectAll.delete">删除</el-button>
        </div>

    <!-- 表格 -->
        <el-table
          :data="tableData"
          border
          height="500"
          style="width: 100%"
          ref="tableData"
          class="table"
          @selection-change="handleSelectionChange">

          <el-table-column
            type="selection"
            width="55">
          </el-table-column>

          <el-table-column
            prop="date"
            label="日期"
            sortable>
          </el-table-column>

          <el-table-column
            prop="number"
            label="编号"
            width="130">
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
            prop="college"
            label="院系">
          </el-table-column>

          <el-table-column
            prop="mobile"
            label="联系电话">
          </el-table-column>

          <el-table-column
            prop="reason"
            label="申请原因"
            width="200">
          </el-table-column>

          <el-table-column
            prop="state"
            label="补办进度"
            :filters="[{ text: '审核中', value: '审核中' }, { text: '通过', value: '通过' }, { text: '不通过', value: '不通过' }]"
            :filter-method="filterState">
          </el-table-column>

          <el-table-column
            fixed="right"
            label="操作"
            width="160">
            <template slot-scope="scope">

              <div v-if="tableData[scope.$index].state === '审核中'">
                <el-button
                @click.native.prevent="deleteRow(scope.$index,'pass')"
                type="primary"
                size="mini">
                通过
              </el-button>
              <el-button
                @click.native.prevent="deleteRow(scope.$index,'nopass')"
                type="warning"
                size="mini">
                不通过
              </el-button>
              </div>

              <div v-else>
                <el-button
                @click.native.prevent="deleteRow(scope.$index,'delete')"
                type="danger"
                size="mini">
                删除
              </el-button>
              </div>

            </template>
          </el-table-column>

        </el-table>

    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            userNum: '',
            tableData: [{
                date: '2021-03-01',
                number: 2021030300065,
                name: '林俊杰',
                stuNum: 123456,
                college: 'text1',
                mobile: 13800000000,
                reason: '丢了！',
                state: '审核中'
            },
            {
                date: '2021-03-02',
                number: 2021030300065,
                name: '林俊杰',
                stuNum: 123456,
                college: 'text1',
                mobile: 13800000000,
                reason: '丢了！',
                state: '审核中'
            },{
                date: '2021-03-03',
                number: 2021030300065,
                name: '林俊杰',
                stuNum: 123456,
                college: 'text1',
                mobile: 13800000000,
                reason: '丢了！',
                state: '不通过'
            },{
                date: '2021-03-04',
                number: 2021030300065,
                name: '林俊杰',
                stuNum: 123456,
                college: 'text1',
                mobile: 13800000000,
                reason: '丢了！真的丢了丢了！真的丢了丢了！真的丢了丢了！真的丢了丢了！真的丢了丢了！真的丢了丢了！真的丢了丢了！真的丢了丢了！真的丢了丢了！真的丢了丢了！真的丢了',
                state: '通过'
            },{
                date: '2021-03-05',
                number: 2021030300065,
                name: '林俊杰',
                stuNum: 123456,
                college: 'text1',
                mobile: 13800000000,
                reason: '丢了！',
                state: '通过'
            }],
            selectList: [],
            selectAll: {
              pass: true,
              nopass: true,
              delete: true
            }
        };
    },
    mounted() {},

    methods: {
        // 单个操作
        deleteRow(index,text){
            switch(text){
              case 'pass':
                this.tableData[index].state = '通过'
                break
              case 'nopass':
                this.tableData[index].state = '不通过'
                break
              case 'delete':
                this.tableData.splice(index,1)
                break
              default:
                break
            }
            this.handleSelectionChange('no')
        },

        // 选中项发生变化
        handleSelectionChange(e){
            if(e !== 'no'){
                this.selectList = e
            }

            this.selectAll = {
                pass: false,
                nopass: false,
                delete: false
            }

            if(!this.selectList.length){
                this.selectAll = {
                pass: true,
                nopass: true,
                delete: true
            }
            }
            
            this.selectList.forEach(item => {
                if(item.state === '审核中'){
                    this.selectAll.delete = true
                }else{
                    this.selectAll.pass = true
                    this.selectAll.nopass = true
                }

            })
        },

        // 批量操作
        handlerOperation(text){

            this.selectList.forEach(item => {
                let index = this.tableData.indexOf(item)

                switch(text){
                    case 'pass':
                      this.tableData[index].state = '通过'
                      break
                    case 'nopass':
                      this.tableData[index].state = '不通过'
                      break
                    case 'delete':
                      this.tableData.splice(index,1)
                      break
                    default:
                      break
                }

            })
            this.$refs.tableData.clearSelection()
            this.handleSelectionChange('no')

        },

        filterState(value,row){
            if(row.state === value) return true
        }

    },
};
</script>

<style lang="less" scoped>
@import url("../untils/form-common.less");
.watercard-wrapper {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20px 30px;
    border-radius: 8px;
    height: 100%;
    box-sizing: border-box;

    .table {
      flex: 1;
    }
}

.watercard-title {
    font-size: 14px;
    font-weight: normal;
    color: #666;
    margin: 0 0 14px;
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

/deep/ .el-table th, .el-table tr {
    background-color: #f5f7fa !important;
}

/deep/ .el-table .cell {
  display: flex;
  align-items: center;
}

.operation-box {
  display: flex;
  align-items: center;
  margin-bottom: 14px;

  & > span {
    font-size: 13px;
    margin-right: 20px;
  }
}
</style>