<template>
  <custom-breadcrumb :path-list="pathList"></custom-breadcrumb>
  <custom-card :title="title">
    <template #content>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias unde perspiciatis eligendi,
        debitis esse dolor velit aliquam mollitia vitae magni quos sequi in tempora adipisci
        doloribus accusamus, consequatur animi id?
      </p>
      <el-divider />
      <el-button type="success" @click="showMessage('success')">success</el-button>
      <el-button type="warning" @click="showMessage('warning')">warning</el-button>
      <el-button type="danger" @click="showMessage('error')">error</el-button>
      <el-button type="info" @click="showMessage('info')">info</el-button>
    </template>
  </custom-card>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import CustomCard from '../components/CustomCard.vue'
import CustomBreadcrumb from '../components/CustomBreadcrumb.vue'

const title = ref('这是卡片')

const pathList = [
  {
    path: '/welcome',
    title: '欢迎页',
    isLink: false
  }
]
const showMessage = (value) => {
  ElMessage[value](value)
}
</script>

<style lang="scss" scoped></style>
