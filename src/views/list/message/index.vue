<template>
  <div>
    <ul>
      <li class="chat-item">
        <div class="chat-item-img">
          <img src="../../../../public/img/img_test.jpg"></img>
        </div>

        <div class="chat-item-detail">
          <p class="chat-item-detail-name">群名</p>
          <p class="chat-item-detail-meta">消息</p>
        </div>
        <div class="chat-item-info">
          <p class="chat-item-info-time">时间</p>
          <!-- <p class="chat-item-info-icon">免</p> -->
        </div>

      </li>
      <li class="chat-item">
        <div class="chat-item-img">
          <img src="../../../../public/img/img_test.jpg"></img>
        </div>

        <div class="chat-item-detail">
          <p class="chat-item-detail-name">群名</p>
          <p class="chat-item-detail-meta">消息</p>
        </div>
        <div class="chat-item-info">
          <p class="chat-item-info-time">时间</p>
          <!-- <p class="chat-item-info-icon">免</p> -->
        </div>

      </li>
      <li class="chat-item">
        <div class="chat-item-img">
          <img src="../../../../public/img/img_test.jpg"></img>
        </div>

        <div class="chat-item-detail">
          <p class="chat-item-detail-name">群名</p>
          <p class="chat-item-detail-meta">消息</p>
        </div>
        <div class="chat-item-info">
          <p class="chat-item-info-time">时间</p>
          <!-- <p class="chat-item-info-icon">免</p> -->
        </div>

      </li>
    </ul>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped>
.chat-item:hover {
  background-color: rgb(210, 210, 210);
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
  /* 移除默认内边距 */
  margin: 0;
  /* 移除默认外边距 */
}

.chat-item {
  width: 100%;
  /*200px*/
  height: 60px;
  /* background-color: green; */
  display: flex;
  flex-direction: row;
  padding: 13px 0;
  margin: 0;
  border-bottom: 1px solid rgb(239, 239, 239);
}

.chat-item-img {
  margin-left: 10px;
  flex: 0.2;
}

.chat-item-img img {
  width: 34px;
  height: 34px;
  border-radius: 5px;
}

.chat-item-detail {
  flex: 0.6;
  font-size: 14px;
  margin-left: 10px;

}

.chat-item-detail-name {
  line-height: 20px;
}

.chat-item-detail-meta {
  font-size: 11px;
  line-height: 17px;
}

.chat-item-info {
  flex: 0.2;
  font-size: 11px;
  text-align: right;
  margin: 0 10px 0 10px;
}
</style>