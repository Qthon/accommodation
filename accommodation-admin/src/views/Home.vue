<template>
  <div class="home">
    <div class="home-row">
      <div
        v-for="(item, index) in boxmsg"
        :key="item + index"
        class="appaly"
        @click="$router.push(item.route)"
      >
        <img :src="item.bg" alt="加载失败" />
        <div class="box-msg">{{ item.msg }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boxmsg: [
        {
          bg: require("@/assets/home/信息查询.png"),
          msg: "信息查询",
          route: "/search?type=basemsg",
        },
        {
          bg: require("@/assets/home/水卡补办.png"),
          msg: "水卡补办",
          route: "/watercard",
        },
        {
          bg: require("@/assets/home/换.png"),
          msg: "退 换 宿",
          route: "/checkout",
        },
        {
          bg: require("@/assets/home/消 息.png"),
          msg: "消息中心",
          route: "/message",
        },
        {
          bg: require("@/assets/home/问题反馈.png"),
          msg: "问答反馈",
          route: "/feedback",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
  .home-row {
    display: flex;
  }
  .appaly {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-color: #fff;
    height: 150px;
    width: 180px;
    margin-left: 30px;
    border-radius: 8px;
    box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    img {
      width: 45px;
      height: 45px;
      display: block;
    }
    .box-msg {
      margin-top: 15px;
      font-size: 13px;
      letter-spacing: 0.1em;
    }
  }
}
</style>