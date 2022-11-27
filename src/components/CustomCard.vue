<template>
  <el-card shadow="hover" class="custom-card">
    <div class="custom-card__title">
      <slot name="title">{{ title }}</slot>
    </div>

    <div class="custom-card__content">
      <slot name="content"></slot>
    </div>
  </el-card>
</template>

<script setup>
defineProps({
  title: String
})
</script>

<style lang="scss" scoped>
:deep(.el-card__body) {
  padding: 0 !important;
}

.custom-card {
  margin-top: 15px;

  &__title {
    padding: 15px;
    background-color: #f7f9fb;
    font-size: 24px;
    font-weight: bold;
  }

  &__content {
    padding: 10px;
  }
}
</style>
