<template>
  <el-menu
    class="layout_menu"
    :collapse="isCollaspe"
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
</template>

<script setup>
import { ref, onBeforeMount, onMounted, defineProps, toRefs } from 'vue'
import axios from '../utils/axios'

const props = defineProps(['isCollaspe'])
const { isCollaspe } = toRefs(props)

const activePath = ref('')
const menusList = ref([])

// 获取菜单-模拟请求
const getMenus = async () => {
  const { data: res } = await axios.get('/mock/menus.json')
  menusList.value = res
}

// 保存导航路径状态
const saveNavState = (path) => {
  activePath.value = path
  sessionStorage.setItem('activePath', activePath.value)
}

onBeforeMount(() => {
  activePath.value = sessionStorage.getItem('activePath')
})

onMounted(() => {
  getMenus()
})
</script>

<style lang="scss" scoped>
.layout_menu {
  border-right: none;

  i {
    color: #0051c3;
  }
}

.el-menu-item {
  i {
    color: #0051c3;
  }

  &.is-active {
    background-color: #f2f2f2 !important;

    i {
      color: #0051c3;
    }
  }
}
</style>
