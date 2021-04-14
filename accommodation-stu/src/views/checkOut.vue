<template>
    <div class="checkout">
        <h2 class="checkout_title">
            <span :class="{active:toggle == 0}" @click="toggle=0">退宿办理</span>|
            <span :class="{active:toggle == 1}" @click="toggle=1">流程信息</span>
        </h2>
        <Form v-show="toggle == 0" />
        <Process v-show="toggle == 1" />
    </div>
</template>

<script>
import Form from "../components/checkout/Form";
import Process from "../components/checkout/Process";
export default {
    components: {
        Form,
        Process,
    },
    data() {
        return {
            // 切换类名
            toggle: 0,
        };
    },
    methods: {},
};
</script>

<style lang="less" scoped>
.checkout {
    width: 80%;
    background-color: #fff;
    padding: 20px 30px 8px;
    margin: 0px auto;
    color: #666;
    font-size: 14px;
    .active {
        color: #009999;
        border-bottom: 2px solid #009999;
    }

    .checkout_title {
        font-size: 14px;
        padding-bottom: 10px;
        font-weight: normal;
        margin-bottom: 20px;
        letter-spacing: 0.1em;
        border-bottom: 1px solid #eee;
        & > span {
            padding: 10px 5px;
            margin: 0px 5px;
            cursor: pointer;
            box-sizing: border-box;
        }
    }
}
</style>