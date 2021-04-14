<template>
    <div class="process">
        <div class="process-img">
            <img src="../../assets/wactercard/watercard.svg" alt="图片加载失败">
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
        border-radius: 10px;
        background-color: #fafafa;
        margin-bottom: 20px;
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