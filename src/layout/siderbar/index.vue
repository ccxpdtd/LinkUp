<template>
  <div class="sliderbar-container">
    <div class="siderbar-avatar-header">
      <AvatarHeader></AvatarHeader>
    </div>
    <NavMenu></NavMenu>
  </div>
</template>

<script setup lang='ts'>
import AvatarHeader from './avatarHeader/index.vue'
import NavMenu from './navMenu/index.vue'
</script>

<style>
.sliderbar-container {}
</style>