<template>
  <mavon-editor
    v-model="editor.value"
    :boxShadow="false"
    :subfield="false"
    defaultOpen="preview"
    :toolbarsFlag="false"
  />
</template>

<script setup>
import { reactive } from 'vue'

const editor = reactive({
  value: `
  ## 任务列表

- [x] 已完成任务
- [ ] 未完成任务
  `
})
</script>

<style lang="scss" scoped></style>
