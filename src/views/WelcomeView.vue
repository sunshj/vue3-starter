<template>
  <custom-breadcrumb :path-list="pathList"></custom-breadcrumb>
  <el-row :gutter="20">
    <el-col :span="12" :xs="24">
      <custom-card :title="title">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias unde perspiciatis
          eligendi, debitis esse dolor velit aliquam mollitia vitae magni quos sequi in tempora
          adipisci doloribus accusamus, consequatur animi id?
        </p>
        <el-divider />
        <el-button type="success" @click="showMessage('success')">success</el-button>
        <el-button type="warning" @click="showMessage('warning')">warning</el-button>
        <el-button type="danger" @click="showMessage('error')">error</el-button>
        <el-button type="info" @click="showMessage('info')">info</el-button>
      </custom-card>
    </el-col>

    <el-col :span="12" :xs="24">
      <custom-card>
        <!-- 使用具名插槽 -->
        <template #title>
          <p>{{ title }}</p>
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias unde perspiciatis
            eligendi, debitis esse dolor velit aliquam mollitia vitae magni quos sequi in tempora
            adipisci doloribus accusamus, consequatur animi id?
          </p>
          <el-divider />
          <el-button type="success" @click="showMessage('success')">success</el-button>
          <el-button type="warning" @click="showMessage('warning')">warning</el-button>
          <el-button type="danger" @click="showMessage('error')">error</el-button>
          <el-button type="info" @click="showMessage('info')">info</el-button>
        </template>
      </custom-card>
    </el-col>
  </el-row>

  <!-- echarts -->
  <el-row :gutter="20">
    <el-col :span="12" :xs="24">
      <custom-card :title="title">
        <pie-chart></pie-chart>
      </custom-card>
    </el-col>

    <el-col :span="12" :xs="24">
      <custom-card :title="title">
        <template #content>
          <pie-chart></pie-chart>
        </template>
      </custom-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage as $message } from 'element-plus'
import CustomCard from '../components/CustomCard.vue'
import CustomBreadcrumb from '../components/CustomBreadcrumb.vue'
import PieChart from '../components/PieChart.vue'

const title = ref('这是卡片')

const pathList = [
  {
    path: '/welcome',
    title: '欢迎页',
    isLink: false
  }
]
const showMessage = (value) => {
  $message({
    type: value,
    message: value,
    grouping: true
  })
}
</script>

<style lang="scss" scoped></style>
