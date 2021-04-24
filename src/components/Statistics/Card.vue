<template>
  <div style="background:#ECECEC; padding:30px" class="card-container">
    <a-card title="Card title1" :bordered="false">
      <p>Card content</p>
    </a-card>
    <a-card title="Card title2" :bordered="false">
      <p>Card content</p>
    </a-card>
    <a-card title="Card title3" :bordered="false">
      <p>Card content</p>
    </a-card>
  </div>
</template>

<style scoped lang="less">
.card-container {
  display: flex;
  width: 100%;
  .ant-card {
    flex: 1 1 auto;
    margin: 0 20px;
  }
}

</style>
