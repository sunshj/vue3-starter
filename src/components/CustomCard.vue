<template>
  <el-card shadow="hover" class="card_wrap">
    <div class="card_title">
      <slot name="title">{{ title }}</slot>
    </div>

    <div class="card_content">
      <slot name="content"></slot>
    </div>
  </el-card>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String
})
</script>

<style lang="scss" scoped>
:deep(.el-card__body) {
  padding: 0 !important;
}

.card_wrap {
  min-width: 300px;
  margin-top: 15px;

  .card_title {
    padding: 15px;
    background-color: #f7f9fb;
    font-size: 24px;
    font-weight: bold;
  }

  .card_content {
    padding: 10px;
  }
}
</style>
