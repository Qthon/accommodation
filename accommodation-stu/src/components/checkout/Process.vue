<template>
    <div class="process">
        <div class="process-img">
            <img src="../../assets/checkout/checkoutProcess.svg" alt="图片加载失败">
        </div>
        <div class="process-table">
            <table>
                <tr>
                    <th>办理模式</th>
                    <td>在线办理</td>
                    <th>服务对象</th>
                    <td>学生</td>
                    <th>事项主题</th>
                    <td>学生服务</td>
                </tr>
                <tr>
                    <th rowspan="3">办理对象</th>
                    <td>校园服务中心 (A2-101)</td>
                    <th rowspan="3">负责人</th>
                    <td>林俊杰</td>
                    <th rowspan="3">办理时间</th>
                    <td>8:00 ~ 17:00</td>
                </tr>
                <tr>
                    <td>学工部（A1-110）</td>
                    <td>邓紫棋</td>
                    <td>8:00 ~ 17:00</td>
                </tr>
                <tr>
                    <td>财务部（A1-120）</td>
                    <td>郭麒麟</td>
                    <td>8:00 ~ 12:00</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.process {
    width: 100%;
    margin-bottom: 15px;
    padding: 8px;
    .process-img {
        background-color: #fafafa;
        margin-bottom: 20px;
        border-radius: 10px;

        img {
            display: block;
            width: 70%;
            margin: 0 auto;
        }
    }
    .process-table {
        table,
        th,
        td {
            border-collapse: collapse;
            border: 1px solid #009999;
            padding: 15px;
        }
        table {
            width: 100%;
            margin: 0 auto;
            th {
                font-weight: normal;
                background-color: #e0f2f1;
            }
        }
    }
}
</style>