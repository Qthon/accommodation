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
                <el-form-item label="换宿时间" label-width="85px">
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

        <!-- 原宿舍 → 目标宿舍 -->
        <el-row>
            <!-- 原宿舍-->
            <el-col :span="11">
                <el-form-item label="原宿舍楼号" label-position="top" label-width="100px" required>
                    <el-input :placeholder="form.oldTower" :disabled="true" size="medium">
                    </el-input>
                </el-form-item>
                <el-form-item label="原房间号" label-position="top" label-width="100px" required>
                    <el-input :placeholder="form.oldRoom" :disabled="true" size="medium">
                    </el-input>
                </el-form-item>
                <el-form-item label="原床位号" label-position="top" label-width="100px" required>
                    <el-input :placeholder="form.oldBedNum" :disabled="true" size="medium">
                    </el-input>
                </el-form-item>
            </el-col>
            <!-- 目标宿舍 -->
            <el-col :span="11">
                <el-form-item label="目标宿舍楼号" label-position="top" label-width="110px" required>
                    <el-select v-model="form.targetTowerValue" placeholder="请选择目标宿舍楼号" size="medium" popper-class="select-option">
                        <el-option v-for="item in form.targetTower" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="目标房间号" label-position="top" label-width="110px" required>
                    <el-select v-model="form.targetRoomValue" placeholder="请选择目标房间号" size="medium" popper-class="select-option">
                        <el-option v-for="item in form.targetRoom" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="目标床位号" label-position="top" label-width="110px" required>
                    <el-select v-model="form.targetBedValue" placeholder="请选择目标房间号" size="medium" popper-class="select-option">
                        <el-option v-for="item in form.targetBed" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
        </el-row>

        <!-- 调宿理由 -->
        <el-row>
            <el-form-item label="换宿事由" label-position="top" label-width="100px" required>
                <el-select v-model="form.descValue" placeholder="请填写换宿事由" popper-class="select-option">
                    <el-option v-for="item in form.desc" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <div v-if="form.descValue === '10'">
                <el-form-item label="换宿事由" label-position="top" label-width="100px" required>
                    <el-input type="textarea" placeholder="请输入内容" v-model="form.descTextValue" resize="none" :autosize="{minRows:3,maxRows:5}">
                    </el-input>
                </el-form-item>
            </div>
        </el-row>

        <!-- 注意事项 -->
        <el-row>
            <el-form-item>
                <el-checkbox-group v-model="form.noticeState" style="color:#afafaf;letter-spacing:0.06em" text-color="#606266" fill="#009999">
                    <el-checkbox>本人承诺，流程发起后，3天内完成所有换宿事项，清理干净原住宿舍内个人物品，不遗留任何个人物品包括废弃物品和垃圾在原住宿舍。</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
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
                // 目标楼栋
                targetTower: [
                    { value: "1", label: "东学楼28号" },
                    { value: "2", label: "聚贤楼8号" },
                ],
                targetTowerValue: "",
                // 目标房间号
                targetRoom: [
                    { value: "1", label: "101" },
                    { value: "2", label: "103" },
                ],
                targetRoomValue: "",
                // 目标床位
                targetBed: [
                    { value: "1", label: "A床" },
                    { value: "2", label: "B床" },
                ],
                targetBedValue: "",
                // 换宿事由
                desc: [
                    { value: "1", label: "想跟同专业学生一起住" },
                    { value: "2", label: "想跟同年级学生一起住" },
                    { value: "3", label: "想跟朋友一起住" },
                    { value: "4", label: "与教学楼相近" },
                    { value: "5", label: "生活习惯不同" },
                    { value: "6", label: "宿舍矛盾、冲突" },
                    { value: "7", label: "宿舍统一规整" },
                    { value: "8", label: "宿舍严重漏水" },
                    { value: "9", label: "宿舍严重损坏" },
                    { value: "10", label: "其他（填写理由）" },
                ],
                descValue: "",
                descTextValue: "",
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