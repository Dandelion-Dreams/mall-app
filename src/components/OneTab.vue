<template>
  <div class="one-tab-wrapper" ref="oneTab">
    <div class="tab-item"
      v-for="(item,i) in menuList"
      :key="item.title"
      :class="{ active: index === i }"
      @touchend="scrollTo(i, $event)"
      @touchstart="move = false"
      @touchmove="move = true"
    >
      <div class="img-wrapper">
        <img :src=item.imgURL alt="">
      </div>
      <div class="tab-title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getSideApi } from '../api/index.js'
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
  { title: '时令水果', imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg' },
  { title: '时令水果', imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg' },
  { title: '时令水果', imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg' },
  { title: '时令水果', imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg' },
  { title: '时令水果', imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg' },
])

const index = ref(0)
const oneTab = ref()
const move = ref(false)
const scrollTo = async (i, e) => {
  if (move.value === true) {
    return
  }
  index.value = i
  // 计算移动距离
  const itemWidth = e.target.offsetWidth
  const itemLeft = e.target.getBoundingClientRect().left
  const wrapperWidth = oneTab.value.offsetWidth
  moveTo(oneTab.value.scrollLeft, itemWidth / 2 + itemLeft - wrapperWidth / 2)
  const res = await getSideApi({ appkey: 'w123_1736868207199'})
  console.log(res, 'res')
}

const moveTo = (start, end) => {
  let dis = 0
  let speed = 5
  if(end < 0) {
    speed *= -1
  }
  const t = setInterval(() => {
    dis += speed
    oneTab.value.scrollLeft = start + dis
    if(Math.abs(dis) > Math.abs(end)) {
      oneTab.value.scrollLeft = start + end
      clearInterval(t)
    }
  }, 2);
}

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
      justify-content: center;
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
      color: #fff;
    }
  }
}
.one-tab-wrapper::-webkit-scrollbar{
  width: 0px;
  background: none;
}
</style>
