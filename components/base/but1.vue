<script setup>
import downloadImg from '@/assets/images/home/download.png';
</script>

<template>
  <!-- <a href="javascript:;"> -->
  <div class="but">
    <slot></slot>
    <!-- <img :src="downloadImg" alt="Download" /> -->

    <!-- /data-gl/asset/starfield.jpg   -->
    <span :class="`iconfont icon-youshang`"></span>
  </div>
  <!-- </a> -->
</template>

<style scoped lang="less">
@import '@/assets/style/base';
.but {
  cursor: pointer;
  min-width: (240 / 16rem);
  height: (84 / 16rem);
  padding: 0 (28 / 16rem);
  display: inline-block;
  border-radius: (42 / 16rem);
  background-image: linear-gradient(180deg, #72abff 0%, #0068e6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  font-size: (24 / 16rem);
  font-weight: 500;
}
.but:hover {
  // transform: scale(1.05);
  background-image: linear-gradient(180deg, #0068e6 0%, #0068e6 100%);
}
@media @max768 {
  .but {
    cursor: auto;
    min-width: (184 / 3.9vw);
    height: (64 / 3.9vw);
    padding: 0 (28 / 3.9vw);
    border-radius: (32 / 3.9vw);
    font-size: (20 / 3.9vw);
    font-weight: 600;
  }
}
</style>
