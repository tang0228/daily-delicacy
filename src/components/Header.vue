<template>
  <div class="header-container" :class="{ml: collapsed}">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="handleClick"
    >
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-breadcrumb>
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item><a href="">统计</a></a-breadcrumb-item>
    </a-breadcrumb>
    <ul class="user-info">
      <li>欢迎您，{{user.username}}</li>
      <li @click="handleLogout">退出</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState("user", ["user"]),
    ...mapState("collapsed", ["collapsed"])
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
    position: relative;
    float: right;
    text-align: center;
    li:not(:nth-child(1)) {
      display: none;
      position: absolute;
      width: 100%;
      top: 50px;
      z-index: 10;
    }
    li {
      padding: 0 20px;
      cursor: pointer;
    }
    &:hover li:not(:nth-child(1)) {
      display: block;
      font-weight: 700;
      background-color: #1890ff;
      color: #fff;
    }
  }
}
</style>