<template>
  <a-layout>
    <a-layout-header style="background: #fff; padding: 0">
      <div class="header">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="handleClick"
        />
        <a-breadcrumb>
          <a-breadcrumb-item>首页</a-breadcrumb-item>
          <a-breadcrumb-item><a href="">添加商品</a></a-breadcrumb-item>
        </a-breadcrumb>
        <ul class="user">
          <li>欢迎你，tangyuanqing<a-icon type="down" /></li>
          <li>退出</li>
        </ul>
      </div>
    </a-layout-header>
      <router-view />

  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false
    }
  },
  methods: {
    handleClick() {
      this.collapsed = !this.collapsed;
      this.$emit("changeCollapsed", this.collapsed)
    }
  }
 
};
</script>

<style>
</style>