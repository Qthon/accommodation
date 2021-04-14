<template>
    <div class="common-problem">
        <h2 class="Level-2-title">宿舍热点话题</h2>
        <div class="problem-connent">
            <ul>
                <li>Q：水卡丢了该怎么办</li>
                <li>Q：报装网络</li>
                <li>Q：宿舍东西坏了，来看看怎么保修吧</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.common-problem {
    margin-top: 15px;
    background-color: #fff;
    .Level-2-title {
        color: #666;
        font-size: 14px;
        letter-spacing: 0.09em;
        margin-bottom: 10px;
        padding: 15px 15px;
        font-weight: normal;
        border-bottom: 1px solid #f1f1f1;
    }
    .problem-connent {
        ul {
            padding: 0px 15px;
            li {
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: #999;
                font-size: 14px;
                margin-bottom: 10px;
                padding-bottom: 10px;
                border-bottom: 1px solid #eee;
                .release-time {
                    font-size: 12px;
                    color: #ccc;
                    letter-spacing: 0.05em;
                }
            }
        }
    }
}
</style>