<template>
  <el-dialog :visible.sync="dialogVisible" @close="close">
    <el-form >
        <el-row>
          <el-col :span="11">
            <el-form-item label="姓名" label-width="80px">
              <el-input disabled :placeholder="info.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="学号/工号" label-width="120px">
              <el-input disabled :placeholder="info.stuNum"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <el-form-item label="反馈内容" label-width="80px">
              <el-input type="textarea" :placeholder="info.reason" resize="none" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <el-form-item label="批注" label-width="80px">
              <el-input type="textarea" placeholder="请输入批注" v-model="postil" resize="none" show-word-limit maxlength="150"></el-input>
            </el-form-item>
          </el-col>
        </el-row>   

    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false"
        >确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
    props: {
      info: Object
    },
    data(){
        return {
          dialogVisible: false,
          postil: ''
        }
    },
    methods: {
      show(){
        this.dialogVisible = true
      },
      hide(){
        this.dialogVisible = false
      },
      close(){
        this.postil = ''
      }
    }
}
</script>

<style lang="less" scoped>
@import url("../../untils/form-common.less");
</style>