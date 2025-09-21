<template>
  <main class="main">

    <header class="main-header">
      <div class="chat-title">{{ currentChat.name }}</div>
    </header>

    <section class="main-messages">
      <div v-for="msg in messages" :key="msg.id" class="message" :class="{ self: msg.isSelf }">
        <img :src="msg.avatar" :alt="msg.sender + '头像'" class="avatar" />
        <div class="message-content">
          <div class="message-header">
            <span class="sender">{{ msg.sender }}</span>
            <span class="time">{{ msg.time }}</span>
          </div>
          <p class="text">{{ msg.text }}</p>
        </div>
      </div>
    </section>

    <footer class="main-input">
      <input type="text" placeholder="输入消息..." v-model="inputText" @keyup.enter="handleSend" />
      <button class="send-btn" @click="handleSend">发送</button>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { type ChatItem, type Message } from '../../utils/type';

// 定义组件接收的属性类型
const props = defineProps<{
  currentChat: ChatItem;
  messages: Message[];
}>();

// 定义组件触发的事件类型
const emit = defineEmits<{
  (e: 'sendMessage', messageText: string): void;
}>();

// 输入框绑定
const inputText = ref('');

// 发送消息处理
const handleSend = () => {
  const trimmedText = inputText.value.trim();
  if (trimmedText) {
    emit('sendMessage', trimmedText);
    inputText.value = '';
  }
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-right: 1px solid #dadce0;
  width: 580px;
}

.main-header {
  padding: 18px 24px;
  border-bottom: 1px solid #dadce0;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-actions {
  display: flex;
  gap: 12px;
}

.action-btn {
  color: #5f6368;
  background: #ffffff;
}

.action-btn:hover {
  background: #f1f3f4;
  color: #202124;
}

.main-messages {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  background-color: #f8f9fa;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 1px);
  background-size: 20px 20px;
}

.message {
  margin-bottom: 20px;
  max-width: 70%;
  display: flex;
  gap: 12px;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message .avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
}

.message-content {
  flex: 1;
}

.message-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
}

.sender {
  font-weight: 500;
  color: #202124;
}

.time {
  font-size: 12px;
  color: #5f6368;
}

.message .text {
  padding: 12px 16px;
  border-radius: 18px;
  line-height: 1.4;
  font-size: 14px;
}

.message:not(.self) .text {
  background: #e9ecef;
  color: #202124;
  border-top-left-radius: 4px;
}

.message.self {
  margin-left: auto;
  flex-direction: row-reverse;
}

.message.self .text {
  background: #3f51b5;
  color: #ffffff;
  border-top-right-radius: 4px;
}

.main-input {
  display: flex;
  align-items: center;
  padding: 16px 24px;
  border-top: 1px solid #dadce0;
  background: #ffffff;
  gap: 12px;
}

.input-actions {
  display: flex;
  gap: 8px;
}

.input-btn {
  background: transparent;
  border: none;
  color: #5f6368;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.input-btn:hover {
  background: #f1f3f4;
  color: #202124;
}

.main-input input {
  flex: 1;
  padding: 14px 18px;
  border-radius: 24px;
  border: 1px solid #dadce0;
  outline: none;
  font-size: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.main-input input:focus {
  border-color: #3f51b5;
  box-shadow: 0 0 0 2px rgba(63, 81, 181, 0.2);
}

.send-btn {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: #3f51b5;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, transform 0.1s;
}

.send-btn:hover {
  background: #303f9f;
}

.send-btn:active {
  transform: scale(0.95);
}
</style>
