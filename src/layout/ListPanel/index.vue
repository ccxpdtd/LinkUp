<template>
  <div>
    <div class="header">
      <Searchbar></Searchbar>
    </div>
    <List></List>
  </div>
</template>

<script setup lang='ts'>
import Searchbar from './searchBar/index.vue'
import List from './List/index.vue'

</script>

<style>
.header {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid rgb(214, 214, 214);
}
</style>