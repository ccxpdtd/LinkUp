<template>
  <aside class="slider">
    <div class="slider-header">
      <h2>LinkUp</h2>
    </div>
    <div class="slider-search">
      <input type="text" placeholder="搜索对话或联系人" v-model="searchText" />
    </div>
    <ul class="chat-list">
      <li v-for="chat in filteredChatList" :key="chat.id" class="chat-item"
        :class="{ active: chat.id === activeChatId }" @click="$emit('selectChat', chat.id)">
        <img :src="chat.avatar" :alt="chat.name + '头像'" class="chat-avatar" />
        <div class="chat-item-content">
          <span class="chat-name">{{ chat.name }}</span>
          <span class="chat-preview">{{ chat.preview }}</span>
        </div>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { type ChatItem } from '../../utils/type';

// 定义组件接收的属性类型
const props = defineProps<{
  chatList: ChatItem[];
  activeChatId: number;
}>();

// 定义组件触发的事件类型
const emit = defineEmits<{
  (e: 'selectChat', chatId: number): void;
}>();

// 搜索功能
const searchText = ref('');

const filteredChatList = computed<ChatItem[]>(() => {
  const lowerSearchText = searchText.value.toLowerCase();
  return props.chatList.filter(chat =>
    chat.name.toLowerCase().includes(lowerSearchText) ||
    chat.preview.toLowerCase().includes(lowerSearchText)
  );
});
</script>

<style scoped>
.slider {
  background: #202124;
  color: #e8eaed;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.slider-header {
  padding: 22px 16px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  background: #171717;
  border-bottom: 1px solid #303134;
}

.slider-search {
  padding: 14px 16px;
  border-bottom: 1px solid #303134;
}

.slider-search input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  outline: none;
  background: #303134;
  color: #e8eaed;
  font-size: 13px;
}

.slider-search input::placeholder {
  color: #9aa0a6;
}

.chat-list {
  flex: 1;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
}

.chat-item {
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.2s;
  border-bottom: 1px solid #303134;
  display: flex;
  align-items: center;
  gap: 12px;
}

.chat-item:hover {
  background: #303134;
}

.chat-item.active {
  background: #3f51b5;
  color: #fff;
}

.chat-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  flex-shrink: 0;
}

.chat-item-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  overflow: hidden;
}

.chat-name {
  font-weight: 500;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chat-preview {
  font-size: 12px;
  color: #9aa0a6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chat-item.active .chat-preview {
  color: rgba(255, 255, 255, 0.8);
}
</style>
