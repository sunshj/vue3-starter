<template>
  <el-switch
    v-model="isDark"
    active-color="#2F2F2F"
    inactive-color="#F1F1F1"
    @change="toggleDarkMode"
  ></el-switch>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'
import { disableDark, enableDark } from '@/common/Dark'

const isDark = ref(false)

const toggleDarkMode = () => {
  if (isDark.value) {
    disableDark()
  } else {
    enableDark()
  }
  sessionStorage.setItem('darkMode', isDark.value.toString())
}

onBeforeMount(() => {
  isDark.value = sessionStorage.getItem('darkMode') === 'true'
})

onMounted(() => {
  toggleDarkMode()
})
</script>

<style lang="scss" scoped>
:deep(.el-switch__core .el-switch__action) {
  background-image: url('../assets/icons/sun.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 75%;
}

.el-switch.is-checked {
  :deep(.el-switch__core .el-switch__action) {
    background-image: url('../assets/icons/moon.png');
  }
}
</style>
