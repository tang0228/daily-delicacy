<template>
  <div class="header-container" :class="{ml: $store.state.collapsed.collapsed}">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="handleClick"
    >
      <a-icon :type="$store.state.collapsed.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-breadcrumb>
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
    </a-breadcrumb>
    <ul class="user-info">
      <li>欢迎您，{{$store.state.user.user.username}}</li>
      <li @click="handleLogout">退出</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    handleClick() {
      this.$store.dispatch("collapsed/changeCollapsed");
    },
    handleLogout() {
      this.$store.dispatch("user/setLogout")
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped lang="less">
.header-container {
  margin-left: 180px;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  border: 1px solid #eee;
  transition: all .3s cubic-bezier(0.2, 0, 0, 1);
  &.ml {
    margin-left: 80px;
  }
  .ant-breadcrumb {
    display: inline-block;
    margin-left: 20px;
  }
  .user-info {
    float: right;
    text-align: center;
    li:not(:nth-child(1)) {
      display: none;
    }
    li {
      padding: 0 20px;
      cursor: pointer;
    }
    &:hover li:not(:nth-child(1)) {
      display: block;
      font-weight: 700;
      background-color: #eee;
    }
  }
}
</style>