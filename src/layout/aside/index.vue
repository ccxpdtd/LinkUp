<template>
  <aside class="aside">
    <div class="aside-header">
      <h3>{{ currentChat.name }}</h3>
      <p>{{ currentChat.memberCount }}名成员</p>
    </div>

    <div class="aside-section">
      <h4>在线成员</h4>
      <ul class="member-list">
        <li class="member" v-for="(member, index) in currentChat.onlineMembers" :key="index">
          <img :src="member.avatar" :alt="member.name + '头像'" class="member-avatar" />
          <div class="member-info">
            <span class="member-name">{{ member.name }}</span>
            <span class="status-indicator online"></span>
          </div>
        </li>
      </ul>
    </div>

    <div class="aside-section">
      <h4>离线成员</h4>
      <ul class="member-list">
        <li class="member" v-for="(member, index) in currentChat.offlineMembers" :key="index">
          <img :src="member.avatar" :alt="member.name + '头像'" class="member-avatar" />
          <div class="member-info">
            <span class="member-name">{{ member.name }}</span>
            <span class="status-indicator offline"></span>
          </div>
        </li>
      </ul>
    </div>

    <div class="aside-section">
      <h4>群组文件</h4>
      <ul class="file-list">
        <li class="file-item" v-for="(file, index) in currentChat.groupFiles" :key="index">
          <i :class="file.iconClass"></i>
          <div class="file-info">
            <span class="file-name">{{ file.name }}</span>
            <span class="file-size">{{ file.size }}</span>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { type ChatItem } from '../../utils/type';

// 定义组件接收的属性类型 - 明确要求 currentChat
const props = defineProps<{
  currentChat: ChatItem;
}>();
</script>

<style scoped>
.aside {
  background: #ffffff;
  padding: 24px;
  border-left: 1px solid #dadce0;
  overflow-y: auto;
}

.aside-header {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #dadce0;
}

.aside-header h3 {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px 0;
}

.aside-header p {
  color: #5f6368;
  margin: 0;
  font-size: 14px;
}

.aside-section {
  margin-bottom: 30px;
}

.aside-section h4 {
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 600;
  color: #202124;
  display: flex;
  align-items: center;
  gap: 8px;
}

.aside-section h4::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #dadce0;
}

.member-list,
.file-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.member {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.2s;
}

.member:hover {
  background: #f1f3f4;
}

.member-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.member-info {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.member-name {
  font-size: 14px;
}

.status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.status-indicator.online {
  background: #0f9d58;
}

.status-indicator.offline {
  background: #dadce0;
}

.file-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  background: #f8f9fa;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background 0.2s;
}

.file-item:hover {
  background: #f1f3f4;
}

.file-item i {
  color: #5f6368;
  font-size: 14px;
  width: 24px;
  text-align: center;
}

.file-info {
  flex: 1;
}

.file-name {
  display: block;
  font-size: 14px;
  margin-bottom: 4px;
}

.file-size {
  font-size: 12px;
  color: #5f6368;
}
</style>
