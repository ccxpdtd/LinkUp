<template>
  <div>
    <ul class="my-list">
      <li v-for="route in myMenuRoutes">
        <router-link :to="{ name: route.name }" class="my-icon" active-class="active">
          <el-icon :size="25">
            <component :is="route.meta.icon" />
          </el-icon>
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script setup lang="ts">
// import { ChatDotRound, User, Setting } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue';
import { myRoutes } from '../../../router/routes'
let myMenuRoutes = ref<any[]>([])
onMounted(() => {
  const MenuToListRoute = myRoutes.find(r => r.name === 'myLayout')
  myMenuRoutes.value = MenuToListRoute?.children || []
})
</script>

<style scoped>
.my-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

ul li {
  margin-bottom: 10px;
}

.my-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.my-icon svg {
  color: #333435;
  fill: currentColor;
  transition: all 0.2s;
}

/* ✅ 路由激活时 */
.my-icon.active svg {
  color: #409EFF;
  transform: scale(1.1);
}
</style>
