<template>
  <el-dialog :visible.sync="dialogVisible" @close="close">
    <el-form >
      <el-form-item label="批注" label-width="60px">
        <el-input type="textarea" placeholder="请输入批注" v-model="postil" resize="none" show-word-limit maxlength="150"></el-input>
      </el-form-item>
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
        dialogPostilVisible: Boolean
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