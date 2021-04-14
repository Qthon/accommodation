<template>
    <div class="forum-list">
        <ul>
            <li class="list-item">
                <div class="list-header">
                    <div class="avatar">
                        <img src="~assets/roomate.png" alt="">
                    </div>
                    <div class="header-msg">
                        <p class="msg-title">东学楼29栋<span class="green"> 林俊杰 </span>发表新动态 <span class="green"># 挂失</span></p>
                        <p class="push-time">刚刚</p>
                    </div>
                </div>
                <div class="list-content">
                    <div class="content-msg">
                        <p>在10教捡到一本书，已经放在了楼管处，自己去找楼管拿把，图片👇</p>
                    </div>
                    <div class="content-img">
                        <el-image :style="`width: ${imgWidth}; height: ${imgHeight}`" :src="imgSrc" :preview-src-list="srcList"></el-image>
                    </div>
                </div>
            </li>
            <li class="list-item">
                <div class="list-header">
                    <div class="avatar">
                        <img src="~assets/roomate.png" alt="">
                    </div>
                    <div class="header-msg">
                        <p class="msg-title">东学楼29栋<span class="green"> 林俊杰 </span>发表新动态 <span class="green"># 回答</span></p>
                        <p class="push-time">刚刚</p>
                    </div>
                </div>
                <div class="list-content">
                    <div class="content-msg">
                        <p>东学楼29栋总逃不过学校断电断网的制裁😒</p>
                    </div>
                </div>
            </li>
            <li class="list-item">
                <div class="list-header">
                    <div class="avatar">
                        <img src="~assets/roomate.png" alt="">
                    </div>
                    <div class="header-msg">
                        <p class="msg-title">东学楼29栋<span class="author"> 林俊杰 </span>发表新动态 <span class="green"># 转手</span></p>
                        <p class="push-time">2021-3-19 9:00</p>
                    </div>
                </div>
                <div class="list-content">
                    <div class="content-msg">
                        <p>在图书馆教路上捡到一本书，已经放在了10教楼管处，自己找楼管拿把，图片👇</p>
                    </div>
                    <div class="content-img">
                        <el-image :style="`width: ${imgWidth}; height: ${imgHeight}`" :src="imgSrc" :preview-src-list="srcList"></el-image>
                        <el-image :style="`width: ${imgWidth}; height: ${imgHeight}`" :src="imgSrc" :preview-src-list="srcList"></el-image>
                        <el-image :style="`width: ${imgWidth}; height: ${imgHeight}`" :src="imgSrc" :preview-src-list="srcList"></el-image>
                    </div>
                </div>
            </li>
            <li class="list-item">
                <div class="list-header">
                    <div class="avatar">
                        <img src="~assets/roomate.png" alt="">
                    </div>
                    <div class="header-msg">
                        <p class="msg-title">东学楼29栋<span class="green"> 林俊杰 </span>发表新动态 <span class="green"># 吐槽</span></p>
                        <p class="push-time">刚刚</p>
                    </div>
                </div>
                <div class="list-content">
                    <div class="content-msg">
                        <p>东学楼29栋总逃不过学校断电断网的制裁😒</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgSrc: require("assets/forum/webp.webp"),
            srcList: [require("assets/forum/webp.webp")],
            imgHeight: "120px",
            imgWidth: "120px",
        };
    },
};
</script>

<style lang="less" scoped>
.forum-list {
    width: 100%;
    font-size: 14px;
    border-radius: 5px;
    .list-item {
        margin-bottom: 15px;
        border-radius: 5px;
        padding: 15px;
        background-color: #fff;
        .list-header {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .avatar {
                width: 60px;
                height: 60px;
                margin-right: 15px;
                img {
                    width: 100%;
                }
            }
            .header-msg {
                .msg-title {
                    color: #666;
                    margin-bottom: 5px;
                    font-weight: 600;
                    .green {
                        color: #009999;
                    }
                }
                .push-time {
                    font-size: 12px;
                    color: #aaa;
                }
            }
        }

        .list-content {
            padding-left: 75px;
            color: #666;
            .content-img {
                width: 100%;
                margin-top: 10px;
            }
        }
    }
}
</style>