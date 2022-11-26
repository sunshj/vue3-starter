<template>
  <el-container class="home_container">
    <!-- header -->
    <el-header class="home_header">
      <div class="logo_title_wrap">
        <img src="@/assets/logo.svg" />
        <span>{{ dashTitle }}</span>
      </div>
    </el-header>
    <!-- main container -->
    <el-container>
      <!-- left aside -->
      <el-aside :width="isCollapse ? '64px' : '200px'" class="home_aside">
        <!-- 导航菜单 -->
        <el-menu
          class="home_menu"
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          text-color="#000"
          active-text-color="#000"
          :default-active="activePath"
        >
          <!-- 菜单项 -->
          <template v-for="item in menusList">
            <!-- 有子菜单时渲染submenu -->
            <template v-if="item.children && item.children.length > 0">
              <el-sub-menu :index="item.path" :key="item.path">
                <template #title>
                  <i :class="item.icon"></i>
                  <span>{{ item.authName }}</span>
                </template>
                <el-menu-item
                  :index="subItem.path"
                  v-for="subItem in item.children"
                  :key="subItem.path"
                  @click="saveNavState(subItem.path)"
                >
                  <template #title>
                    <i :class="subItem.icon"></i>
                    <span>{{ subItem.authName }}</span>
                  </template>
                </el-menu-item>
              </el-sub-menu>
            </template>
            <!-- 没有子菜单直接作为一级菜单 -->
            <template v-else>
              <el-menu-item :index="item.path" :key="item.path" @click="saveNavState(item.path)">
                <i :class="item.icon"></i>
                <template #title>
                  <span>{{ item.authName }}</span>
                </template>
              </el-menu-item>
            </template>
          </template>
        </el-menu>

        <!-- 底部控制侧边栏折叠区域 -->
        <div class="toggle_collapse" @click="toggleCollapse">
          <i
            class="iconfont"
            :class="isCollapse ? 'icon-arrow-double-right' : 'icon-arrow-double-left'"
          ></i>
          <span>{{ isCollapse ? '' : '折叠边栏' }}</span>
        </div>
      </el-aside>
      <!-- main -->
      <el-main class="home_main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, computed } from 'vue'
import axios from '../utils/axios'

const dashTitle = ref('这是网站的标题')
const isCollapse = ref(false)
const activePath = ref('')
const menusList = ref([])

const collapseWidth = computed(() => {
  return isCollapse.value ? '64px' : '200px'
})

// 获取菜单-模拟请求
const getMenus = async () => {
  const { data: res } = await axios.get('/mock/menus.json')
  menusList.value = res
}

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

// 保存导航路径状态
const saveNavState = (path) => {
  activePath.value = path
  sessionStorage.setItem('activePath', activePath.value)
}

onBeforeMount(() => {
  activePath.value = sessionStorage.getItem('activePath')
  isCollapse.value = sessionStorage.getItem('isCollapse') === 'true' ? true : false
})

onMounted(() => {
  getMenus()
  if (Reflect.has(window, 'ontouchstart')) mobileOptimization()
})
</script>

<style lang="scss" scoped>
@import '../styles/home.scss';

.home_main {
  position: absolute;
  top: 60px;
  right: 0;
  bottom: 0;
  left: v-bind(collapseWidth);
  overflow-y: auto;
  background-color: #e9edf1;
}
</style>
