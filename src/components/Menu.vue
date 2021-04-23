<template>
  <div class="menu-container">
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <a-sub-menu key="sub1">
        <span slot="title"
          ><a-icon type="mail" /><span>首页</span></span
        >
        <a-menu-item key="1"><a-icon type="line-chart" />统计</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"
          ><a-icon type="appstore" /><span>商品</span></span
        >
        <a-menu-item key="2"><a-icon type="unordered-list" /> 商品列表 </a-menu-item>
        <a-menu-item key="3"><a-icon type="plus" /> 添加商品 </a-menu-item>
        <a-menu-item key="4" class="admin-role" style="padding-left: 80px" v-if="user.role === 'admin'">商品类目管理</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState("collapsed", ["collapsed"]),
    ...mapState("user", ["user"])
  }
    
};
</script>

<style lang="less" scoped>
.menu-container {
    height: 100%;
    width: 180px;
    position: fixed;
    top: 0;
    left: 0;
    .ant-menu {
        height: 100%;
    }
}

</style>
