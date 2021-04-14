<template>
    <div class="dynamic">
        <!-- <h2 class="Level-2-title">最新动态/话题论坛热点</h2> -->
        <h2 class="Level-2-title">最新通知<span class="red">*</span></h2>
        <div class="dynamic-content">
            <ul>
                <li>
                    <p>放假通知！</p><span class="release-time">2021/01/30</span>
                </li>
                <li>
                    <p>关于假期期间注意事项</p><span class="release-time">刚刚</span>
                </li>
                <li>
                    <p>宿舍管理通知</p><span class="release-time">1小时前</span>
                </li>
                <li>
                    <p>关于新生入住操作指南</p><span class="release-time">2021/01/29</span>
                </li>
                <li>
                    <p>欢迎新同学 😁！</p><span class="release-time">2021/01/28</span>
                </li>
                <li>
                    <p>放假通知！</p><span class="release-time">2021/01/30</span>
                </li>
                <li>
                    <p>关于假期期间注意事项</p><span class="release-time">刚刚</span>
                </li>
                <li>
                    <p>宿舍管理通知</p><span class="release-time">1小时前</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.dynamic {
    margin-top: 15px;
    background-color: #fff;
    border-radius: 5px;
    .Level-2-title {
        color: #666;
        font-size: 14px;
        letter-spacing: 0.09em;
        padding: 15px 15px;
        font-weight: normal;
        border-bottom: 1px solid #f1f1f1;
        .red {
            color: red;
            font-size: 14px;
        }
    }
    .dynamic-content {
        ul {
            padding: 5px 15px;
            li {
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: #999;
                font-size: 14px;
                padding: 10px;
                border-bottom: 1px solid #eee;
                .release-time {
                    font-size: 12px;
                    color: #ccc;
                    letter-spacing: 0.05em;
                }
                p::before {
                    content: "·";
                    font-weight: bold;
                    margin-right: 10px;
                }
            }
        }
    }
}
</style>