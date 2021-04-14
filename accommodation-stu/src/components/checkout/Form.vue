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
                <el-form-item :label="'院'+'\xa0\xa0\xa0\xa0\xa0\xa0'+'系'" label-width="80px" required>
                    <el-input :placeholder="form.departments" :disabled="true" size="medium">
                    </el-input>
                </el-form-item>
                <el-form-item label="联系电话" label-width="80px" required>
                    <el-input :placeholder="form.telPhone" :disabled="true" size="medium">
                    </el-input>
                </el-form-item>
            </el-col>
            <!-- 学号+专业+换宿时间 -->
            <el-col :span="8">
                <el-form-item :label="'学'+'\xa0\xa0\xa0\xa0\xa0\xa0'+'号'" label-width="80px" required>
                    <el-input :placeholder="form.stu_id" :disabled="true" size="mediumu">
                    </el-input>
                </el-form-item>
                <el-form-item :label="'专'+'\xa0\xa0\xa0\xa0\xa0\xa0'+'业'" label-width="80px" required>
                    <el-input :placeholder="form.professional" :disabled="true" size="medium">
                    </el-input>
                </el-form-item>
                <el-form-item label="退宿时间" label-width="85px">
                    <el-date-picker v-model="form.changeTime" type="date" placeholder="选择日期" size="medium">
                    </el-date-picker>
                </el-form-item>
            </el-col>
            <!-- 性别+年级专业 -->
            <el-col :span="8">
                <el-form-item :label="'性'+'\xa0\xa0\xa0\xa0\xa0\xa0'+'别'" label-width="80px" required>
                    <el-input :placeholder="form.professional" :disabled="true" size="medium">
                    </el-input>
                </el-form-item>
                <el-form-item label="年级专业" label-width="80px" required>
                    <el-input :placeholder="form.grade" :disabled="true" size="medium">
                    </el-input>
                </el-form-item>
            </el-col>
        </el-row>

        <!-- 宿舍信息+退宿事由 -->
        <el-row>
            <!-- 原宿舍-->
            <el-col :span="11">
                <el-form-item label="原宿舍楼号" label-position="top" label-width="100px" required>
                    <el-input :placeholder="form.oldTower" :disabled="true" size="medium">
                    </el-input>
                </el-form-item>
                <el-form-item label="原床位号" label-position="top" label-width="100px" required>
                    <el-input :placeholder="form.oldBedNum" :disabled="true" size="medium">
                    </el-input>
                </el-form-item>
            </el-col>
            <el-col :span="11">
                <el-form-item label="原房间号" label-position="top" label-width="100px" required>
                    <el-input :placeholder="form.oldRoom" :disabled="true" size="medium">
                    </el-input>
                </el-form-item>
                <el-form-item label="退宿事由" label-position="top" label-width="100px" required>
                    <el-select v-model="form.descValue" placeholder="请填写退宿事由" popper-class="select-option">
                        <el-option v-for="item in form.desc" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
        </el-row>

        <!-- 注意事项 -->
        <el-row>
            <el-form-item>
                <el-checkbox-group v-model="form.noticeState">
                    <el-checkbox>本人承诺，流程发起后，3天内完成所有换宿事项，清理干净原住宿舍内个人物品，不遗留任何个人物品包括废弃物品和垃圾在原住宿舍。</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
        </el-row>

        <!-- 按钮 -->
        <el-form-item style="text-align:center">
            <el-button type="primary" @click="onSubmit" style="margin-right:15px" size="medium">提交申请</el-button>
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
                // 性别
                gender: "男",
                // 联系电话
                telPhone: "13184667778",
                // 换宿时间
                changeTime: "",
                // 院系
                departments: "电气与计算机工程学院",
                // 年级专业
                grade: "17级计算机8班",
                // 专业
                professional: "计算机科学与技术",
                // 原宿舍楼栋号
                oldTower: "东学楼29号",
                // 原宿舍房间号
                oldRoom: "407",
                // 原床位号
                oldBedNum: "B床",
                // 退宿事由
                desc: [
                    { value: "1", label: "休学" },
                    { value: "2", label: "退学" },
                    { value: "3", label: "保留学籍（参军入伍）" },
                    { value: "4", label: "转学（转出）" },
                    { value: "5", label: "毕业离校（非6月集中批次）" },
                    { value: "6", label: "中外联合培养出国学习" },
                ],
                descValue: "",
                // 注意事项
                noticeState: "",
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
</style>