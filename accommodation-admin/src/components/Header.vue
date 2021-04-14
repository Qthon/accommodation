<template>
  <div class="header">
    <h1 class="manage-title" @click="$router.push('/')">Dormitory Manage</h1>
    <div class="user-bd">
      <button class="logout-btn" @click="$router.push('/login')">Logout</button>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .manage-title {
    box-sizing: border-box;
    margin: 0;
    font-size: 16px;
    color: #999;
    background-color: #fff;
    user-select: none;
    cursor: pointer;
  }
  .user-bd {
    display: flex;
    align-items: center;
  }
}

.logout-btn {
  background-color: #009999;
  opacity: 0.9;
  color: #fff;
  font-size: 14px;
  padding: 6px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
}
</style>