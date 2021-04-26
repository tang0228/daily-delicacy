<template>
  <div class="basic-info-container">
    <a-form-model
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-form-model-item label="标题" prop="title" required>
        <a-input v-model="form.title" />
      </a-form-model-item>
      <a-form-model-item label="商品描述" prop="desc">
        <a-input v-model="form.desc" />
      </a-form-model-item>
      <a-form-model-item label="商品类目" required prop="category">
        <a-select
          v-model="form.category"
          placeholder="请选择商品类目"
          @change="handleChange"
        >
          <a-select-option
            v-for="c in categoryList"
            :key="c.id"
            :value="c.id"
            >{{ c.name }}
            </a-select-option>
        </a-select>
        <a-select v-model="form.c_item" placeholder="请选择子类目">
          <a-select-option
            v-for="c in categoryItems"
            :key="c"
            :value="c"
            >{{ c }}</a-select-option
          >
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="选择标签" prop="tags">
        <a-select
          mode="tags"
          placeholder="请选择标签"
          :default-value="['包邮，下单次日达']"
          v-model="form.tags"
        >
          <a-select-option value="包邮，下单次日达">
            包邮，下单次日达
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 20 }">
        <a-button type="primary" @click="next">下一步</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import category from "@/api/category";
export default {
  props: ["form"],
  data() {
    return {
      categoryList: [],
      categoryItems: [],
      rules: {},
    };
  },
  created() {
    category.getAllCategory().then((resp) => {
      this.categoryList = resp.data.data;
    });
  },
  methods: {
    handleChange(v) {
      for (let i = 0; i < this.categoryList.length; i++) {
        if(this.categoryList[i].id == v) {
          this.categoryItems = this.categoryList[i].c_items;
        }
      }
    },
    next() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$emit("next", this.form);
          return true;
        } else {
          return false;
        }
      });
    }
  },
};
</script>
