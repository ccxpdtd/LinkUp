<template>
  <div class="layout-container">

    <div class="slider">
      <Slider></Slider>
    </div>

    <div class="list-panel">
      <ListPanel></ListPanel>
    </div>

    <div class="main">
      <Main></Main>
    </div>

    <div class="chatAside">
      <Aside></Aside>
    </div>

  </div>
</template>

<script setup lang='ts'>
import Slider from './siderbar/index.vue'
import ListPanel from './ListPanel/index.vue'
// import ChatArea from './chatArea/index.vue'
import Main from './main/index.vue'
import Aside from './aside/index.vue'


</script>

<style>
.layout-container {
  display: flex;
  flex-direction: row;
  height: 600px;
  /* height: 100vh; */
  /* width: 100vw; */
  border: 1px solid rgb(185, 185, 185);
  border-radius: 10px;

}

.slider {
  width: 55px;
  /* width: 5%; */
  height: 100%;
  border-right: 1px solid rgb(185, 185, 185);
  background-color: #ededed;
  border-radius: 10px 0 0 10px;

  padding-top: 15px;
}

.list-panel {
  width: 200px;
  /* width: 18%; */
  height: 100%;
  border-right: 1px solid rgb(214, 214, 214);
  background-color: #f7f7f7;
  padding-top: 15px;

}

.main {
  width: 640px;
  /* width: 77%; */
  height: 100%;
  background-color: #ededed;
  padding-top: 15px;

}

.chatAside {
  width: 230px;
  border-radius: 0 10px 10px 0;
  background-color: #ededed;
  /* padding-top: 15px; */
}
</style>