<template>
  <div class="trade-list-container">
      <Search @search="handleSearch"/>
  </div>
</template>

<script>
import Search from "./Search.vue";
export default {
    components: {
        Search
    },
    methods: {
        handleSearch(value) {
            console.log(value);
        }
    }

}
</script>

<style>

</style>