<script setup>
import { useMainStore } from '@/stores/useMainStore';
const mainStore = useMainStore();
// require('./assets/fonts/iconfont/iconfont.cjs');

useSeoMeta({
  title: 'CocoCat',
  ogTitle: 'CocoCat',
  description:
    'CocoCat Is A Comprehensive Platform Centered On Decentralized Privacy Social Platform, Dedicated To Creating An All-In-One App For Web3 Users, Integrating Wallet, Social, Finance, Media, Gaming, Etc.',
  ogDescription:
    'CocoCat Is A Comprehensive Platform Centered On Decentralized Privacy Social Platform, Dedicated To Creating An All-In-One App For Web3 Users, Integrating Wallet, Social, Finance, Media, Gaming, Etc.',
});
onMounted(() => {});
</script>
<template>
  <div id="app" @click="mainStore.downloadShow = false">
    <WlHeader></WlHeader>
    <NuxtPage />
    <WlFooter></WlFooter>
    <BaseSoon></BaseSoon>
    <!-- <NuxtWelcome /> -->
  </div>
</template>
<style lang="less">
@import url('@/assets/style/base.less');
@import url('@/assets/fonts/iconfont/iconfont.css');
// .icon {
//   width: 1em;
//   height: 1em;
//   vertical-align: -0.15em;
//   fill: currentColor;
//   overflow: hidden;
// }
</style>
