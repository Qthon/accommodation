<template>
  <div class="admin">
    <div class="admin-title-box">
      <span class="admin-title">基本资料</span>
    </div>
    <form-info />
  </div>
</template>

<script>
import formInfo from 'components/admin/form-info';
export default {
  components: {
    formInfo,
  },
  data() {
    return {}
  },

};
</script>

<style lang="less" scoped>
@import url("~@/untils/form-common.less");
.admin {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #fff;
  margin: 0 auto;
  padding: 20px 30px 8px;
  font-size: 14px;

  .admin-title-box {
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  .admin-title {
    font-size: 14px;
    font-weight: normal;
    color: #666;
    padding: 0 5px 10px;
    margin: 0 5px;
    box-sizing: border-box;
    cursor: pointer;
  }
}
</style>