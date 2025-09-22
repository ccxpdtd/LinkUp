<template>
  <div class="aside-container">
    <div class="aside-header"></div>
    <div class="aside-main">aside</div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style>
.aside-container {
  height: 100%;
}

.aside-header {
  width: 100%;
  height: 45px;
  border-left: 1px solid rgb(214, 214, 214);

}

.aside-main {
  border-left: 1px solid rgb(214, 214, 214);
  /* height: 540px; */
  height: calc(100% - 45px);
}
</style>