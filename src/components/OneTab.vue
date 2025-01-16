<template>
  <div class="one-tab-wrapper">
    <div class="tab-item" v-for="(item,i) in menuList" :key="i">
      <div class="img-wrapper">
        <img :src=item.imgURL alt="">
      </div>
      <div class="tab-title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const menuList = ref([
  { title: '时令水果', imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg' },
  { title: '时令水果', imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg' },
  { title: '时令水果', imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg' },
  { title: '时令水果', imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg' },
  { title: '时令水果', imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg' },
  { title: '时令水果', imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg' },
  { title: '时令水果', imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg' },
  { title: '时令水果', imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg' },
  { title: '时令水果', imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg' },
  { title: '时令水果', imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg' },
  { title: '时令水果', imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg' },
  { title: '时令水果', imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg' },
  { title: '时令水果', imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg' },
  { title: '时令水果', imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg' },
  { title: '时令水果', imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg' },
  { title: '时令水果', imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg' },
])
</script>
<style lang="less">
.one-tab-wrapper {
  width: 375px;
  height: 104px;
  display: flex;
  overflow: auto;
  .tab-item {
    width: 50px;
    height: 50px;
    padding: 10px 5px;
    .img-wrapper {
      width: 50px;
      height: 50px;
      display: flex;
      justify-self: center;
      align-items: center;
      border-width: 2px;
      border-style: solid;
      border-color: #fff;
      border-radius: 23px;
      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        align-self: center;
      }
    }
    .tab-title {
      text-align: center;
      font-size: 12px;
      margin-top: 5px;
      color: #333;
    }
  }
  .active {
    .img-wrapper {
      border-color: #d13193;
    }
    .tab-title {
      background-color: #d13193;
      font-weight: 500;
      border-radius: 30px;
    }
  }
}
.one-tab-wrapper::-webkit-scrollbar{
  width: 0px;
  background: none;
}
</style>
