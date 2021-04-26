<template>
  <div class="sale-info-container">
    <a-form-model
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-form-model-item label="商品售价" prop="price" required>
        <a-input v-model="form.price" />
      </a-form-model-item>
      <a-form-model-item label="商品折扣价" prop="price_off" required>
        <a-input v-model="form.price_off" />
      </a-form-model-item>
      <a-form-model-item label="商品库存" prop="inventory" required>
        <a-input v-model="form.inventory" />
      </a-form-model-item>
      <a-form-model-item label="计量单位" prop="unit" required>
        <a-input v-model="form.unit" />
      </a-form-model-item>
      <a-form-model-item label="商品图片">
        <a-upload
          :action="
            'https://mallapi.duyiedu.com/upload/images?appkey=' +
            $store.state.user.user.appkey
          "
          list-type="picture-card"
          :file-list="fileList"
          @preview="handlePreview"
          @change="handleChange"
          name="avatar"
        >
          <div v-if="fileList.length < 8">
            <a-icon type="plus" />
            <div class="ant-upload-text">Upload</div>
          </div>
        </a-upload>
        <a-modal
          :visible="previewVisible"
          :footer="null"
          @cancel="handleCancel"
        >
          <img alt="example" style="width: 100%" :src="previewImage" />
        </a-modal>
      </a-form-model-item>
      <a-form-model-item label="是否上架">
        <a-checkbox @change="onChange">上架</a-checkbox>
      </a-form-model-item>
      <a-form-model-item label="操作">
        <a-button @click="prev">上一步</a-button>
        <a-button type="primary" @click="submit">完成</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  props: ["form"],
  data() {
    return {
      rules: {},
      previewVisible: false,
      previewImage: "",
      fileList: [],
    };
  },
  methods: {
    prev() {
      this.$emit("prev");
    },
    submit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit("submit", this.form);
          return true;
        } else {
          return false;
        }
      });
    },
    onChange() {},
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ fileList, file }) {
      if (file.status === "done") {
        this.form.images.push(file.response.data.url);
      } else if (file.status === "removed") {
        const { url } = file.response.data;
        this.form.images = this.form.images.filter((i) => i !== url);
      }
      this.fileList = fileList;
    },
    handleCancel() {
      this.previewVisible = false;
    },
  },
};
</script>
