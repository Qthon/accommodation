<template>
    <el-form ref="form" :model="form" class="from-msg" label-position="left">
        <!-- 编号 -->
        <el-row>
            <el-form-item :label="'编'+'\xa0\xa0\xa0\xa0\xa0\xa0'+'号'" label-width="80px" required>
                <el-input :placeholder="form.formID" :disabled="true" size="medium">
                </el-input>
            </el-form-item>
        </el-row>

        <!-- 基本信息 -->
        <el-row>
            <!-- 姓名+院系+联系电话 -->
            <el-col :span="8">
                <el-form-item :label="'姓'+'\xa0\xa0\xa0\xa0\xa0\xa0'+'名'" label-width="80px" required>
                    <el-input :placeholder="form.stu_name" :disabled="true" size="medium">
                    </el-input>
                </el-form-item>
                <el-form-item label="联系电话" label-width="80px" required>
                    <el-input placeholder="请输入手机号" v-model="form.telPhone" size="medium">
                    </el-input>
                </el-form-item>
            </el-col>
            <!-- 学号+专业+换宿时间 -->
            <el-col :span="8">
                <el-form-item label="学号/工号" label-width="85px" required>
                    <el-input :placeholder="form.stu_id" :disabled="true" size="mediumu">
                    </el-input>
                </el-form-item>
                <el-form-item label="短号(如有)" label-width="80px">
                    <el-input placeholder="短号" size="medium">
                    </el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item :label="'院'+'\xa0\xa0\xa0\xa0\xa0\xa0'+'系'" label-width="80px" required>
                    <el-input :placeholder="form.departments" :disabled="true" size="medium">
                    </el-input>
                </el-form-item>
            </el-col>
        </el-row>

        <!-- 调宿理由 -->
        <el-row>
            <div>
                <el-form-item label="申请原因" label-position="top" label-width="85px" required>
                    <el-input type="textarea" show-word-limit maxlength="50" placeholder="请做50字以内的简单说明" v-model="form.descTextValue" resize="none">
                    </el-input>
                </el-form-item>
            </div>
        </el-row>

        <!-- 说明 -->
        <el-row>
            <div class="illustrate">
                <div class="hd">说明</div>
                <div class="bd">
                    <p>1、聚9、聚10教工宿舍热水卡工本费为20/张，其他教工宿舍及学生宿舍热水卡工本费为10/张。</p>
                    <p>2、办理热水卡时使用校园卡在校园服务中心（A2-101室）进行扣费。</p>
                </div>
            </div>
        </el-row>

        <!-- 按钮 -->
        <el-form-item style="text-align:center">
            <el-button type="primary" @click="onSubmit" style="margin-right:20px" size="medium">提交申请</el-button>
            <el-button size="medium">暂存</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            form: {
                // 编号
                formID: 2021030700065,
                // 姓名
                stu_name: "林俊杰",
                // 学号
                stu_id: "171011026",
                // 联系电话
                telPhone: "13184667778",
                // 补办水卡
                changeTime: "",
                // 院系
                departments: "电气与计算机工程学院",
                descTextValue: "",
            },
        };
    },
    mounted() {},

    methods: {
        // 提交申请
        onSubmit() {
            this.$confirm("确认提交申请?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            })
                .then(() => {
                    console.log("OK");
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消提交",
                    });
                });
        },
    },
};
</script>

<style lang="less" scoped>
@import url("../../untils/form-common.less");
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