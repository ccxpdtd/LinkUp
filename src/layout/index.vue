<template>
  <div class="chat-layout">
    <!-- 左侧滑块 -->
    <ChatSlider :chatList="chatList" :activeChatId="activeChatId" @selectChat="handleSelectChat" />

    <!-- 中间聊天主组件 -->
    <ChatMain :currentChat="currentChat" :messages="currentChat.messages" @sendMessage="handleSendMessage" />

    <!-- 右侧信息面板 -->
    <ChatAside :currentChat="currentChat" />
  </div>
</template>

<script setup lang="ts">
import ChatSlider from './slider/index.vue';
import ChatMain from './main/index.vue';
import ChatAside from './aside/index.vue';
import { ref, computed, watch } from 'vue';
import { type ChatItem, type Message } from '../utils/type';

const chatList = ref<ChatItem[]>([
  {
    id: 1,
    name: '综合讨论',
    avatar: 'https://picsum.photos/id/20/36/36',
    preview: '团队周会安排已更新',
    memberCount: 12,
    messages: [
      {
        id: '1-1',
        sender: '李娜',
        avatar: 'https://picsum.photos/id/1005/40/40',
        text: '各位上午好，本周的部门例会将在周五下午2点举行，请大家提前准备好项目进展报告。',
        time: '09:32'
      },
      {
        id: '1-2',
        sender: '你',
        avatar: 'https://picsum.photos/id/1012/40/40',
        text: '收到，请问需要准备PPT演示吗？',
        time: '09:35',
        isSelf: true
      },
      {
        id: '1-3',
        sender: '李娜',
        avatar: 'https://picsum.photos/id/1005/40/40',
        text: '是的，简要的PPT即可，主要突出关键进展和遇到的问题。',
        time: '09:37'
      }
    ],
    onlineMembers: [
      { name: '李娜', avatar: 'https://picsum.photos/id/1005/40/40', status: 'online' },
      { name: '你', avatar: 'https://picsum.photos/id/1012/40/40', status: 'online' },
      { name: '张明', avatar: 'https://picsum.photos/id/1025/40/40', status: 'online' }
    ],
    offlineMembers: [
      { name: '王丽', avatar: 'https://picsum.photos/id/1027/40/40', status: 'offline' },
      { name: '赵强', avatar: 'https://picsum.photos/id/1074/40/40', status: 'offline' }
    ],
    groupFiles: [
      { name: 'Q3季度计划.pdf', size: '2.4MB', iconClass: 'fas fa-file-pdf' },
      { name: '项目进度跟踪.xlsx', size: '1.8MB', iconClass: 'fas fa-file-excel' }
    ]
  },
  {
    id: 2,
    name: '产品研发组',
    avatar: 'https://picsum.photos/id/21/36/36',
    preview: '新功能原型已上传',
    memberCount: 8,
    messages: [],
    onlineMembers: [
      { name: '技术总监', avatar: 'https://picsum.photos/id/1025/40/40', status: 'online' }
    ],
    offlineMembers: [
      { name: '前端开发', avatar: 'https://picsum.photos/id/1074/40/40', status: 'offline' }
    ],
    groupFiles: [
      { name: '新功能原型图.sketch', size: '3.2MB', iconClass: 'fas fa-file-image' }
    ]
  }
]);

const activeChatId = ref<number>(1);

const currentChat = computed<ChatItem>(() => {
  const found = chatList.value.find(chat => chat.id === activeChatId.value);
  if (!found) {
    throw new Error(`聊天会话 ID ${activeChatId.value} 不存在`);
  }
  return found;
});

watch(currentChat, () => {
  setTimeout(() => {
    const messagesContainer = document.querySelector('.main-messages');
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }, 0);
}, { immediate: true });

const handleSelectChat = (chatId: number) => {
  activeChatId.value = chatId;
};

const handleSendMessage = (messageText: string) => {
  const newMessage: Message = {
    id: `${currentChat.value.id}-${Date.now()}`,
    sender: '你',
    avatar: 'https://picsum.photos/id/1012/40/40',
    text: messageText,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    isSelf: true
  };

  currentChat.value.messages.push(newMessage);

  const chatIndex = chatList.value.findIndex(chat => chat.id === currentChat.value.id);
  if (chatIndex !== -1) {
    chatList.value[chatIndex].preview = messageText.length > 20
      ? `${messageText.slice(0, 20)}...`
      : messageText;
  }
};
</script>

<style scoped>
.chat-layout {
  display: grid;
  grid-template-columns: 280px 1fr 300px;
  height: 100vh;
  background: #ededed;
  color: #000;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Microsoft Yahei", sans-serif;
  overflow: hidden;
}
</style>