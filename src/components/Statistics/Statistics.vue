<template>
  <div class="statistics-container">
    <Card />

    <Chart />
  </div>
</template>

<script>
import Card from "./Card.vue";
import Chart from '@/components/statistics/Chart.vue';
export default {
  components: {
    Card,
    Chart
  },
};
</script>

<style lang="less" scoped>

</style>