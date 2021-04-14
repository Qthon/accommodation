<template>
    <div class="aside">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo aside" style="height:100%" active-text-color="#74c4d6" router>
            <!-- 首页 -->
            <el-menu-item index="/">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <!-- 信息查询 -->
            <el-menu-item index="/search">
                <i class="el-icon-search"></i>
                <span slot="title">信息查询</span>
            </el-menu-item>
            <!-- 水卡补办 -->
            <el-menu-item index="/watercard">
                <i class="el-icon-document"></i>
                <span slot="title">水卡补办</span>
            </el-menu-item>
            <!-- 问答反馈 -->
            <el-menu-item index="/feedback">
                <i class="el-icon-s-help"></i>
                <span slot="title">问答反馈</span>
            </el-menu-item>
            <!-- 学生退换宿 -->
            <el-menu-item index="/checkout">
                <i class="el-icon-sort"></i>
                <span slot="title">退宿换宿</span>
            </el-menu-item>
            <!-- 学生退换宿 -->
            <el-menu-item index="/message">
                <div class="menu-item-box">
                    <i class="el-icon-message"></i>
                    <span slot="title">消息中心</span>
                    <div class="message-num">
                        <span>{{ $store.state.numMessage }}</span>
                    </div>
                </div>
            </el-menu-item>
            <!-- 学生宿舍 -->
            <!-- <el-submenu index="live">
                <template slot="title">
                    <i class="el-icon-s-management"></i>
                    <span>办事大厅</span>
                </template>
                <el-menu-item index="/senior">学生换宿</el-menu-item>
                <el-menu-item index="/checkout">学生退宿</el-menu-item>
                <el-menu-item index="/watercard">水卡补办</el-menu-item>
            </el-submenu> -->
        </el-menu>
    </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
.aside {
    height: 100%;
    .iconfont {
        margin-left: 4px;
        margin-right: 5px;
        font-size: 18px;
        color: #909399;
    }
}

.el-menu {
    height: 100%;
    box-sizing: border-box;
    border: none !important ;
}

.el-menu-item.is-active {
    background-color: #ecf5ff !important;
    color: #009999 !important;
}

.menu-item-box {
    display: flex;
    align-items: center;
}

.message-num {
    flex: 1;
    text-align: right;

    & > span {
        padding: 2px 6px;
        background-color: #009999;
        border-radius: 4px;
        font-size: 12px;
        z-index: 9999;
        color: #fff;
    }
}
</style>