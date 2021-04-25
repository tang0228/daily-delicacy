<template>
  <div class="menu-container">
    <a-menu
      :default-selected-keys="[$router.currentRoute.matched[1] ? $router.currentRoute.matched[1].name : '']"
      :default-open-keys="[$router.currentRoute.matched[0] ? $router.currentRoute.matched[0].name : '']"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
    <template v-for="route in menuRoutes"> 
      <a-sub-menu
        v-if="!route.meta.hidden"
        :key="route.name"
      >
        <span slot="title"
          ><a-icon :type="route.meta.icon" /><span>{{
            route.meta.title
          }}</span></span
        >
        <template v-for="children in route.children">
          <a-menu-item  :key="children.name" v-if="!children.meta.hidden">
          <RouterLink :to="{ name: children.name }"
            ><a-icon :type="children.meta.icon" />{{
              children.meta.title
            }}</RouterLink
          >
        </a-menu-item>
        </template>
        
      </a-sub-menu>
    </template>
    </a-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("collapsed", ["collapsed"]),
    ...mapState("user", ["user"]),
    ...mapState("menu",["menuRoutes"])
  },
  created() {
    console.log(this.$router)
  },
  watch: {
    ["$router.currentRoute"]: function() {
      console.log(1)
    }
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
