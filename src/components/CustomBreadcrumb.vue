<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item
      :to="item.isLink ? { path: item.path } : ''"
      v-for="(item, index) in pathList"
      :key="index"
    >
      {{ item.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps({
  pathList: Array
})

const { pathList } = toRefs(props)
</script>

<style lang="scss" scoped></style>
