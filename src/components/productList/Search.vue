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
            v-for="cl in categoryList"
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
    <a-button class="add-btn">新增商品</a-button>
  </div>
</template>
<script>
import category from "@/api/category";
export default {
  data() {
    return {
      searchForm: {
        searchWord: "",
        category: "",
      },
      categoryList: [],
    };
  },
  mounted() {
    category.getAllCategory().then((resp) => {
      this.categoryList = resp.data.data;
    });
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
  margin-top: 15px;
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
