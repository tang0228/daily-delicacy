<template>
  <div class="trade-list-container">
    <Search @search="handleSearch" :category="categoryList" />
    <Table
      :tableData="data"
      :pageData="page"
      @pageChange="change"
      @edit="editProduct"
      @remove="removeProduct"
    />
  </div>
</template>

<script>
import Search from "./Search.vue";
import Table from "./Table.vue";
import product from "@/api/product";
import category from "@/api/category";
export default {
  data() {
    return {
      data: [], // 传递给表格数据
      searchForm: {
        // 搜索的信息
        category: "",
        searchWord: "",
      },
      page: {
        // 分页的信息
        total: 1,
        current: 1,
        pageSize: 10,
        showSizeChanger: true,
      },
      categoryList: [], // 商品类目下拉内容
      categoryObj: {},
    };
  },
  created() {
    //   获取所有商品类目
    category.getAllCategory().then((resp) => {
      this.categoryList = resp.data.data;
      resp.data.data.forEach((i) => {
        this.categoryObj[i.id] = i.name;
      });
    });
    this.getTableData();
  },
  components: {
    Search,
    Table,
  },
  methods: {
    handleSearch(value) {
      this.searchForm = value;
      this.getTableData();
    },
    getTableData() {
      product
        .getAllProducts({
          page: this.page.current,
          size: this.page.pageSize,
          ...this.searchForm,
        })
        .then((resp) => {
          this.page.total = resp.data.total;
          this.data = resp.data.data.map((item) => {
            return {
              ...item,
              categoryName: this.categoryObj[item.category],
            };
          });
        });
    },
    change(page) {
      this.page = page;
      this.getTableData();
    },
    editProduct(record) {
      this.$router.push({
          name: 'productEdit',
          params: {
              id: record.id
          }
      })
    },
    removeProduct(record) {
        this.$confirm({
        title: '确认删除',
        content: () => <div style="color:red;">确认删除标题为${record.title}的商品吗？</div>,
        onOk: () => {
          product.deleteProduct({
              id: record.id
          }).then(() => {
              this.getTableData();
          })
        },
        onCancel() {
          return;
        },
        class: 'confirm-box',
      });
    }
  },
};
</script>
