<template>
  <div id="app">
    <Menu />

    <Header />

    <RouterView />

  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
import Header from "@/components/Header.vue";
export default {
  components: {
    Menu,
    Header
  },
};
</script>
<style lang="less">
</style>
