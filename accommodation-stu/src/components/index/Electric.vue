<template>
    <div class="electric">
        <h2 class="Level-2-title">
            <span>宿舍用电统计</span>
            <div class="residue-ele-content" title="剩余电量 80%">
                <div class="usage">
                    <div class="usage-inside" style="width:80%">
                        <i class="iconfont icon-dian ele-icon"></i>
                    </div>
                    <div class="usage-msg">
                        <span>80%</span>
                    </div>
                </div>
            </div>

        </h2>
        <div id="electricChart" auto-resize style="width: 100%;height:350px"></div>
    </div>
</template>

<script>
import moment from "moment";

export default {
    computed: {
        // 获取当前时间
        // timeNow: function () {
        //     return moment().format("YYYY/MM/DD");
        // },
    },
    data() {
        return {};
    },

    mounted() {
        this.drawCharts();
    },

    methods: {
        // 绘制
        drawCharts() {
            let myChart = this.$echarts.init(
                document.getElementById("electricChart")
            );

            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: "宿舍近15日用电量",
                    textStyle: {
                        fontSize: 14,
                    },
                    left: "center",
                },
                grid: {
                    left: "80px",
                    right: "80px",
                    // height: "300px",
                },
                xAxis: {
                    name: "日期",
                    type: "time",
                    splitLine: {
                        show: false,
                    },
                    boundaryGap: true,
                    splitArea: {
                        show: true,
                    },
                    maxInterval: 3600 * 24 * 1000,
                },
                yAxis: {
                    type: "value",
                    name: "用电量/kw·h",
                },
                // 坐标提示
                tooltip: {
                    trigger: "axis",
                    padding: 10,
                    backgroundColor: "rgba(0, 0, 0, 1)",
                    textStyle: {
                        fontFamily: "Microsoft YaHei",
                        fontSize: 12,
                        color: "#fff",
                    },
                },
                series: [
                    {
                        type: "line",
                        // 平滑
                        smooth: true,
                        itemStyle: {
                            normal: {
                                // 折线点颜色
                                color: "#009688",
                                lineStyle: {
                                    // 折线颜色
                                    color: "#009688",
                                },
                            },
                        },
                        data: [
                            {
                                name: "2021/1/1",
                                value: ["2021/1/1", 80],
                            },
                            {
                                name: "2021/1/2",
                                value: ["2021/1/2", 60],
                            },
                            {
                                name: "2021/1/3",
                                value: ["2021/1/3", 90],
                            },
                            {
                                name: "2021/1/4",
                                value: ["2021/1/4", 20],
                            },
                            {
                                name: "2021/1/5",
                                value: ["2021/1/5", 70],
                            },
                            {
                                name: "2021/1/6",
                                value: ["2021/1/6", 30],
                            },
                            {
                                name: "2021/1/7",
                                value: ["2021/1/7", 70],
                            },
                            {
                                name: "2021/1/8",
                                value: ["2021/1/8", 40],
                            },
                            {
                                name: "2021/1/9",
                                value: ["2021/1/9", 80],
                            },
                            {
                                name: "2021/1/10",
                                value: ["2021/1/10", 60],
                            },
                            {
                                name: "2021/1/11",
                                value: ["2021/1/11", 90],
                            },
                            {
                                name: "2021/1/12",
                                value: ["2021/1/12", 20],
                            },
                            {
                                name: "2021/1/13",
                                value: ["2021/1/13", 80],
                            },
                            {
                                name: "2021/1/14",
                                value: ["2021/1/14", 30],
                            },
                            {
                                name: "2021/1/15",
                                value: ["2021/1/15", 70],
                            },
                        ],
                    },
                ],
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        },
    },
};
</script>

<style lang="less" scoped>
.electric {
    background-color: #fff;
    border-radius: 5px;
    height: 400px;
    .Level-2-title {
        display: flex;
        justify-content: space-between;
        color: #666;
        font-size: 14px;
        letter-spacing: 0.09em;
        margin-bottom: 10px;
        padding: 15px 15px;
        font-weight: normal;
        border-bottom: 1px solid #f1f1f1;
        .now-time {
            color: #666;
            letter-spacing: 0.05em;
            font-size: 14px;
            margin-left: 2px;
        }
        .residue-ele-content {
            .usage {
                display: flex;
                width: 30px;
                height: 15px;
                border: 2px solid #cccccc;
                border-radius: 3px;
                padding: 1px;
                box-sizing: border-box;
                position: relative;
                cursor: pointer;
                .usage-inside {
                    height: 100%;
                    border-radius: 2px;
                    background-color: #80cbc4;
                    position: relative;
                    .ele-icon {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%) scale(-0.8);
                        font-size: 10px;
                        color: #666;
                    }
                }
                .usage-msg {
                    color: #999;
                    letter-spacing: 0.05em;
                    font-size: 10px;
                    position: absolute;
                    left: -32px;
                    top: 50%;
                    transform: translateY(-50%) scale(0.9);
                    letter-spacing: 0.07em;
                }
            }
        }
    }
    .my-chart {
        width: 100%;
        box-sizing: border-box;
    }
}
</style>