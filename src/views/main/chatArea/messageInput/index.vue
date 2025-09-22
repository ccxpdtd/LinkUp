<template>
  <div class="chat-input-wrapper">
    <!-- 工具栏 -->
    <!-- <div class="toolbar-area">
      <el-button type="text" class="toolbar-btn">😊</el-button>
      <el-button type="text" class="toolbar-btn">📎</el-button>
    </div> -->

    <!-- 输入框 -->
    <div class="input-area">
      <el-input v-model="message" type="textarea" :autosize="{ minRows: 3, maxRows: 8 }" placeholder="请输入消息..."
        class="wechat-textarea" />
    </div>

    <!-- 按钮 -->
    <div class="button-area">
      <el-button type="primary" class="send-btn">发送</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref('')
</script>

<style scoped>
.chat-input-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 6px;
  box-sizing: border-box;
  padding: 6px;
}

/* 工具栏区域，高度固定 */
.toolbar-area {
  flex-shrink: 0;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 6px;
}

/* 工具栏按钮样式 */
.toolbar-btn {
  padding: 4px 8px;
  font-size: 20px;
  color: #606266;
}

/* 输入框区域：占剩余空间 */
.input-area {
  flex: 1;
  overflow: hidden;
}

/* 按钮区域 */
.button-area {
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

/* 微信风输入框 */
.wechat-textarea :deep(.el-textarea__inner) {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  background: transparent !important;

  padding: 8px !important;
  font-size: 16px !important;
  line-height: 1.5 !important;
  box-sizing: border-box !important;

  height: 100% !important;
  max-height: 200px !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;

  resize: none !important;
}

/* 自定义滚动条 */
.wechat-textarea :deep(.el-textarea__inner::-webkit-scrollbar) {
  width: 6px;
}

.wechat-textarea :deep(.el-textarea__inner::-webkit-scrollbar-thumb) {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
}
</style>
