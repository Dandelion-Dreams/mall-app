<template>
  <div class="classify-wrapper">
    <div class="search-btn">
      <van-icon name="search" />
      <div>水果一元一斤</div>
    </div>
    <oneTab></oneTab>
  </div>
</template>
<script setup>
import oneTab from '../components/OneTab.vue'

</script>

<style lang="less">
.classify-wrapper {
  width: 375px;
  .search-btn {
    width: 355px;
    height: 33px;
    line-height: 33px;
    background-color: #eee;
    margin: 11px auto;
    border-radius: 10px;
    font-size: 14px;
    text-align: center;
    >* {
      display: inline-block;
      vertical-align: middle;
    }
  }
}

</style>
