<template>
    <div class="feedback">
        <div class="btn">
            <el-button type="primary" @click="dialogFormVisible = true" size="mini" icon="el-icon-position">
                反馈
            </el-button>
        </div>
        <el-dialog title="问题反馈" :visible.sync="dialogFormVisible" width="50%">
            <div class="feedback-form">
                <!-- 内容框 -->
                <el-input type="textarea" placeholder="问题反馈..." v-model="descText" resize="none" :autosize="{minRows:6,maxRows:10}">
                </el-input>
                <!-- 按钮 -->
                <div class="form-btn">
                    <el-checkbox-group v-model="anonymous">
                        <el-checkbox>匿名</el-checkbox>
                    </el-checkbox-group>
                    <el-button type="primary" @click="onSubmit" size="medium" style="margin-left:20px" icon="el-icon-s-promotion">发送</el-button>
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                </div>
            </div>
        </el-dialog>
        <div class="feedback-state">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="date" label="日期" width="150" align="center">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="contnet" label="反馈内容" align="left" header-align="center">
                </el-table-column>
                <el-table-column prop="state" label="管理员状态" width="120" align="center">
                    <template slot-scope="scope">
                        <el-tag size="medium" :type="scope.row.state==1?'':'warning'">{{ scope.row.state==1?'已读':'未读' }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="remark" label="批注" width="400" align="left" header-align="center">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            dialogTableVisible: false,
            dialogFormVisible: false,
            descText: "",
            // 匿名
            anonymous: "",
            tableData: [
                {
                    date: "2016-05-02",
                    contnet:
                        "老师，我的原密码忘记了，可以麻烦您帮我重置一下密码吗？",
                    state: 1,
                    remark: "重置好啦，现在密码是123456，不要在忘了",
                },
                {
                    date: "2016-05-04",
                    contnet: "老师，水卡去哪补办啊",
                    state: 0,
                    remark: "",
                },
                {
                    date: "2016-05-01",
                    contnet: "为什么老师迟迟没有给我退宿办理吖",
                    state: 1,
                    remark: "很抱歉，这就给你办",
                },
                {
                    date: "2016-05-03",
                    contnet: "老师，我的学号是错误的，正确的是172018001",
                    state: 1,
                    remark: "好，我核对一下",
                },
                {
                    date: "2016-05-02",
                    contnet:
                        "老师，我的原密码忘记了，可以麻烦您帮我重置一下密码吗？",
                    state: 1,
                    remark: "重置好啦，现在密码是123456，不要在忘了",
                },
                {
                    date: "2016-05-04",
                    contnet: "老师，水卡去哪补办啊",
                    state: 0,
                    remark: "",
                },
                {
                    date: "2016-05-01",
                    contnet: "为什么老师迟迟没有给我退宿办理吖",
                    state: 1,
                    remark: "很抱歉，这就给你办",
                },
                {
                    date: "2016-05-03",
                    contnet: "老师，我的学号是错误的，正确的是172018001",
                    state: 1,
                    remark: "好，我核对一下",
                },
            ],
        };
    },
    methods: {
        onSubmit() {
            this.dialogFormVisible = false;
        },
    },
};
</script>

<style lang="less" scoped>
@import url("../untils/form-common.less");
.feedback {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    min-height: 100%;
    .feedback-state {
        background-color: #fff;
        margin-top: 15px;
        border-radius: 5px;
        overflow: hidden;
        padding: 10px 0px 0px;
        height: 100%;
        flex: 1;
    }
    .form-btn {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 20px 0px 0px;
        text-align: right;
    }
    .btn {
        text-align: right;
        margin-right: 10px;
    }
    /deep/ .el-button--primary {
        font-size: 13px;
        color: #eee;
    }
}
</style>