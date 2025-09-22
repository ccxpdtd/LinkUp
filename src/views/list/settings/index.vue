<template>
  <div class="setting-container">

    <ul>
      <li v-for="route in mySettingsRoutes" class="setting-item">
        <router-link :to="{ name: route.name }">
          <p>{{ route.meta.title }}</p>
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { myRoutes } from '../../../router/routes'
let mySettingsRoutes = ref<any[]>([])
onMounted(() => {
  const layoutRoute = myRoutes.find(r => r.name === 'myLayout')
  const settingsRoute = layoutRoute?.children?.find(c => c.name === 'mySettingsList')
  mySettingsRoutes.value = settingsRoute?.children || []

})
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.setting-item {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgb(239, 239, 239);
  text-align: center;
  line-height: 60px;
  color: rgb(97, 97, 97);
  font-size: 15px;
  cursor: pointer;
}

.setting-item a {
  display: block;
  /* 让 a 标签和 li 同宽 */
  width: 100%;
  height: 100%;
  padding: 0;
  text-decoration: none;
  /* 去掉下划线 */
  color: inherit;
  /* 继承文字颜色 */
}
</style>