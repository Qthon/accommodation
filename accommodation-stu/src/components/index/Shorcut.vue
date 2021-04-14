<template>
    <div class="shortcut">
        <h2 class="Level-2-title">快捷导航</h2>
        <div class="shorcut-content">
            <ul>
                <li @click="$router.push('/notice')">
                    <img src="../../assets/notice.png" alt="加载图片失败">
                    <span> 入学须知</span>
                </li>
                <li @click="$router.push('/senior')">
                    <img src="../../assets/trade.png" alt="加载图片失败">
                    <span>换宿申请</span>
                </li>
                <li @click="$router.push('/guarantee')">
                    <img src="../../assets/baoxiu.png" alt="加载图片失败">
                    <span>宿舍报修</span>
                </li>
                <li @click="$router.push('/forum')">
                    <img src="../../assets/luntan.png" alt="加载图片失败">
                    <span>住宿论坛</span>
                </li>
                <li @click="$router.push('/watercard')">
                    <img src="../../assets/chaxun.png" alt="加载图片失败">
                    <span>水卡补办</span>
                </li>
                <li @click="$router.push('/admin')">
                    <img src="../../assets/admin.png" alt="加载图片失败">
                    <span>个人中心</span>
                </li>
                <li @click="handleMore">
                    <img class="more" src="../../assets/more.png" alt="加载图片失败">
                    <span>更多</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleMore(){
            this.$message({
                type: 'info',
                message: '更多内容正在更新中...'
            })
        }
    }
};
</script>

<style lang="less" scoped>
.shortcut {
    background-color: #fff;
    border-radius: 5px;
    // 标题
    .Level-2-title {
        color: #666;
        font-size: 14px;
        letter-spacing: 0.09em;
        margin-bottom: 10px;
        padding: 15px 15px;
        font-weight: normal;
        border-bottom: 1px solid #f1f1f1;
    }

    .shorcut-content {
        width: 100%;
        height: 150px;
        box-sizing: border-box;
        padding: 0px 15px 15px;
        ul {
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            align-content: space-between;
            // justify-content: space-between;
            li {
                text-align: center;
                font-size: 14px;
                color: #333;
                width: 25%;
                font-size: 12px;
                padding-top: 10px;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: center;
                img {
                    width: 26%;
                    margin-bottom: 10px;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>