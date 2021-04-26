<template>
  <div class="product-add-container">
    <a-steps :current="current" class="step-container">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <BasicInfo @next="next" v-if="current === 0" :form="form"/>

      <SaleInfo @prev="prev" v-else-if="current === 1" :form="form" @submit="submit" />
    </div>
  </div>
</template>

<script>
import BasicInfo from "./BasicInfo.vue";
import SaleInfo from "./SaleInfo.vue";
import porduct from "@/api/product";
export default {
  components: {
    BasicInfo,
    SaleInfo,
  },
  data() {
    return {
      form: {
        title: "",
        desc: "",
        category: "",
        c_items: [],
        tags: [],
        price: 0,
        price_off: 0,
        inventory: 0,
        unit: "",
        images: [],
      },
      current: 0,
      steps: [
        {
          title: "填写商品基本信息",
          content: "First-content",
        },
        {
          title: "填写商品销售信息",
          content: "Second-content",
        }, 
      ],
    };
  },
  methods: {
    next(form) {
      this.form = {
        ...this.form,
        ...form
      }
      this.current++;
    },
    prev() {
      this.current--;
    },
    submit(form) {
      this.form = {
        ...this.form,
        ...form
      };
      porduct.addProduct(this.form).then(() => {
        this.$message.success("新增成功");
        this.$router.push({
          name: "productList"
        })
      })

    },
  },
};
</script>
<style scoped lang="less">
.product-add-container {
  .step-container {
    width: 50%;
    margin: 20px auto;
  }
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
}
</style>