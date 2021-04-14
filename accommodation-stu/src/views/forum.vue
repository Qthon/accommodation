<template>
  <div class="forum">
    <el-row class="publish-btn-box">
      <el-col :span="4">
        <div class="forum-left">
          <el-button type="warning" @click="console.log('我的发布')" size="medium" icon="el-icon-s-promotion" class="btn">我的发布</el-button>
        </div>
        <div class="forum-left">
          <el-button type="primary" @click="dialogFormVisible = true" size="medium" icon="el-icon-s-promotion" class="btn">发表</el-button>
        </div>
      </el-col>
      <el-col :span="18" class="forum-list">
        <!-- 动态列表 -->
        <ForumList />
        <ForumList />
      </el-col>
    </el-row>
    <!-- 富文本 -->
    <el-dialog title="发表动态" :visible.sync="dialogFormVisible" width="50%">
      <Vue-editor v-model="content" />

      <!-- 上传 -->
      <div class="upload" style="display: flex; justify-content: flex-end;text-align:right">
        <el-upload class="upload-demo" style="width:400px" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" list-type="picture">
          <el-button size="small" type="primary">上传图片</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
      <!-- 多选框 -->
      <div class="radio">
        <el-checkbox-group v-model="type">
          <el-checkbox v-for="(item,index) in tags" :label="item" :key="index"></el-checkbox>
        </el-checkbox-group>
      </div>
      <!-- 按钮 -->
      <div class="upload-btn">
        <el-button type="primary">发布</el-button>
        <el-button>清空</el-button>
      </div>
    </el-dialog>

    <!-- 返回顶部 -->
    <el-backtop target=".forum">
      
   <i class="el-icon-caret-top"></i>
    </el-backtop>
  </div>
</template>

<script>
import ForumList from "components/forum/forumList";
import { VueEditor } from "vue2-editor";
export default {
  components: {
    ForumList,
    VueEditor,
  },
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      descText: "",
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
      type: [],
      tags: ["# 吐槽", "# 挂失", "# 问答", "# 转手"],
      content: "<h1>Some initial content</h1>",
    };
  },
  computed: {},

  methods: {
    // 发表动态
    onSubmit() {
      this.dialogFormVisible = false;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/untils/form-common.less");
.forum {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  &::-webkit-scrollbar { width: 0 !important }
  .forum-left {
    background-color: #fff;
    padding: 8px;
    box-sizing: border-box;
    overflow: hidden;
    .btn {
      width: 100%;
    }
  }
  .forum-list {
    margin: 0px 20px;
  }
  .upload {
    margin: 15px 0px;
  }
  .radio {
    text-align: right;
    margin: 15px 0px;
  }
  .upload-btn {
    text-align: right;
  }
}

.el-icon-caret-top {
  color: #009999;
}
</style>