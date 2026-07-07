<script setup lang="ts">
import Topbar from '@/components/Topbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Canvas from '@/components/Canvas.vue'
</script>

<template>
  <div class="editor-layout">
    <Topbar />

    <div class="main-content">
      <Sidebar />
      <Canvas />
    </div>
  </div>
</template>

<style scoped>
.editor-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  display: flex;
  overflow: hidden;
}
</style>