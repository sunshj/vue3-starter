<template>
  <el-container class="layout_container">
    <!-- header -->
    <el-header class="layout_header">
      <div class="logo_title_wrap">
        <img src="@/assets/logo.svg" />
        <span>{{ dashTitle }}</span>
      </div>
    </el-header>
    <!-- main container -->
    <el-container>
      <!-- left aside -->
      <el-aside :width="isCollapse ? '64px' : '200px'" class="layout_aside">
        <!-- 导航菜单 -->
        <Menu :is-collaspe="isCollapse"></Menu>
        <!-- 底部控制侧边栏折叠区域 -->
        <div class="toggle_collapse" @click="toggleCollapse">
          <i
            :class="['iconfont', isCollapse ? 'icon-arrow-double-right' : 'icon-arrow-double-left']"
          ></i>
          <span>{{ isCollapse ? '' : '折叠边栏' }}</span>
        </div>
      </el-aside>
      <!-- main -->
      <el-main class="layout_main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Menu from './Menu.vue'

import { ref, onBeforeMount, computed } from 'vue'

const dashTitle = ref('这是网站的标题')
const isCollapse = ref(false)

const collapseWidth = computed(() => {
  return isCollapse.value ? '64px' : '200px'
})

// 切换侧边栏折叠/展开
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
  sessionStorage.setItem('isCollapse', isCollapse.value)
}

// 移动端默认设置
const mobileOptimization = () => {
  dashTitle.value = '短标题'
  isCollapse.value = true
}

onBeforeMount(() => {
  isCollapse.value = sessionStorage.getItem('isCollapse') === 'true' ? true : false
  if (Reflect.has(window, 'ontouchstart')) mobileOptimization()
})
</script>

<style lang="scss" scoped>
@import '../styles/layout.scss';

.layout_main {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: v-bind(collapseWidth);
  overflow-y: auto;
  padding-top: 80px;
  background-color: #e9edf1;
}
</style>
