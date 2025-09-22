<template>
  <div class="chat-area">
    <div class="chat-area-header">
      <ChatHeader></ChatHeader>
    </div>
    <div class="chat-area-message-list">
      <MessageList></MessageList>
    </div>
    <div class="chat-area-message-input">
      <MessageInput></MessageInput>
    </div>

  </div>
</template>

<script setup lang='ts'>
import ChatHeader from './chatHeader/index.vue'
import MessageList from './messageList/index.vue'
import MessageInput from './messageInput/index.vue'

</script>

<style>
.chat-area {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.chat-area-header {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid rgb(214, 214, 214);
  flex-shrink: 0;
  /* 防止压缩 */
}



.chat-area-message-list {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.chat-area-message-input {
  height: 160px;
  border-top: 1px solid #ddd;
  padding: 10px;
  flex-shrink: 0;
}
</style>