<template>
  <div class="home-container">
    <Menu />

    <Header />

    <div class="content-container" :class="{ml: collapsed}">
      <RouterView />
    </div>
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
import Header from "@/components/Header.vue";
import { mapState } from "vuex";
export default {
  components: {
    Menu,
    Header,
  },
  computed: {
    ...mapState("collapsed", ["collapsed"])
  }
};
</script>
<style lang="less" scoped>
.content-container {
  margin-left: 180px;
  transition: all .3s cubic-bezier(0.2, 0, 0, 1);
  &.ml {
    margin-left: 80px;
  }
}
</style>
