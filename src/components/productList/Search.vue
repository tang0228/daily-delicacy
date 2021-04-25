<template>
  <div class="search-container">
    <a-form-model
      layout="inline"
      :model="searchForm"
      @submit="handleSubmit"
      @submit.native.prevent
    >
      <a-form-model-item label="搜索关键字">
        <a-input v-model="searchForm.searchWord" placeholder="输入关键字" />
      </a-form-model-item>
      <a-form-model-item label="商品类目">
        <a-select
          show-search
          placeholder="选择商品类目"
          style="width: 200px"
          @change="handleChange"
          :allowClear="true"
        >
          <a-select-option
            v-for="cl in category"
            :key="cl.id"
            :value="cl.id"
            >{{ cl.name }}</a-select-option
          >
        </a-select>
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" html-type="submit"> 搜索 </a-button>
      </a-form-model-item>
    </a-form-model>
    <a-button class="add-btn">
      <RouterLink :to="{name: 'productAdd'}">新增商品 </RouterLink>
    </a-button>
  </div>
</template>
<script>
export default {
  props: ["category"],
  data() {
    return {
      searchForm: {
        searchWord: "",
        category: "",
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("search", this.searchForm);
    },
    handleChange(value) {
      this.searchForm.category = value;
    },
  },
};
</script>

<style scoped lang="less">
.search-container {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  .ant-form {
    margin: 0 30px;
  }
  .ant-btn {
    margin: 0 30px;
  }
}
</style>
