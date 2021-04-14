<template>
  <!-- 宿舍基本信息 -->
  <div class="base-msg">
    <h2 class="Level-2-title">我的宿舍</h2>
    <div class="base-msg-content">
      <div class="room-num">
        <span class="num">407</span>
        <span class="room-location">东区29栋四楼407</span>
      </div>
      <ul class="roommate">
        <!-- A -->
        <li class="roomate-item">
          <div class="roomate-img">
            <img src="~@/assets/roomate.png" alt="加载失败" />
            <p class="roomate-bed">A床</p>
          </div>
          <div class="roomate-msg">
            <p>姓 名：周杰伦</p>
            <p>学 号：171011026</p>
            <p>年 级：大一</p>
            <p>专 业：计算机类</p>
          </div>
        </li>
        <!-- B -->
        <li class="roomate-item">
          <div class="roomate-img">
            <img src="~@/assets/roomate.png" alt="加载失败" />
            <p class="roomate-bed">B床</p>
          </div>
          <div class="roomate-msg">
            <p>姓 名：林俊杰</p>
            <p>学 号：171011026</p>
            <p>年 级：大二</p>
            <p>专 业：软件工程</p>
          </div>
        </li>
        <!-- C -->
        <li class="roomate-item">
          <div class="roomate-img">
            <img src="~@/assets/roomate.png" alt="加载失败" />
            <p class="roomate-bed">C床</p>
          </div>
          <div class="roomate-msg">
            <p>姓 名：刘德华</p>
            <p>学 号：171011026</p>
            <p>年 级：大三</p>
            <p>专 业：计算机科学与技术</p>
          </div>
        </li>
        <!-- D -->
        <li class="roomate-item">
          <div class="roomate-img">
            <img src="~@/assets/roomate.png" alt="加载失败" />
            <p class="roomate-bed">D床</p>
          </div>
          <div class="roomate-msg">
            <p>姓 名：张学友</p>
            <p>学 号：171011026</p>
            <p>年 级：大四</p>
            <p>专 业：电子信息</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.base-msg {
  // 标题
  .Level-2-title {
    color: #666;
    font-size: 14px;
    letter-spacing: 0.12em;
    padding: 0px 0px 15px;
    // font-weight: normal;
  }

  .base-msg-content {
    display: flex;
    width: 100%;
    // 房号
    .room-num {
      width: 15%;
      height: 120px;
      box-sizing: border-box;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      .num {
        color: #003366;
        font-size: 35px;
        font-weight: bold;
      }
      .room-location {
        font-size: 12px;
        font-weight: normal;
        color: #999;
        letter-spacing: 0.1em;
      }
    }
    // 室友信息
    .roommate {
      width: 85%;
      height: 120px;
      display: flex;
      .roomate-item {
        height: 100%;
        width: 25%;
        background-color: #ffffff;
        padding: 15px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border-radius: 5px;
        margin-left: 15px;
        // 头像图片
        .roomate-img {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 30%;
          height: 100%;
          overflow: hidden;
          padding-right: 10px;
          img {
            width: 70%;
            height: 50%;
            object-fit: cover;
            margin-bottom: 6px;
          }
          .roomate-bed {
            font-size: 12px;
            color: #999;
          }
        }
        // 个人信息
        .roomate-msg {
          height: 90%;
          width: 70%;
          color: #999;
          font-size: 12px;
          border-left: 1px solid #eee;
          padding-left: 25px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          p {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>