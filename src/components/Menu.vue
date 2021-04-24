<template>
  <div class="menu-container">
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <a-sub-menu v-for="route in $store.state.menu.menuRoutes" :key="route.name">
        <span slot="title"
          ><a-icon type="mail" /><span>{{route.meta.title}}</span></span
        >
        <a-menu-item v-for="children in route.children" :key="children.name"><a-icon type="line-chart" />{{children.meta.title}}</a-menu-item>
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
