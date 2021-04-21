<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>Option 1</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>User</span></span>
          <a-menu-item key="3"> Tom </a-menu-item>
          <a-menu-item key="4"> Bill </a-menu-item>
          <a-menu-item key="5"> Alex </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="team" /><span>Team</span></span>
          <a-menu-item key="6"> Team 1 </a-menu-item>
          <a-menu-item key="8"> Team 2 </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

    <Header @changeCollapsed="handleChange"/>
  </a-layout>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  },
  data() {
    return {
      collapsed: false
    }
  },
  methods: {
    handleChange(e) {
      this.collapsed = e;
    }
  }
  
};
</script>

<style lang="less">
@import "~@/assets/css/topNav.less";
#components-layout-demo-side .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-side .trigger:hover {
  color: #1890ff;
}
</style>
