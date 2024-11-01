<script setup>
import downloadImg from '@/assets/images/home/download.png';
import { toRefs, getCurrentInstance } from 'vue';
import { Notification } from '@arco-design/web-vue';
import { useMainStore } from '@/stores/useMainStore';
const mainStore = useMainStore();
const openSoon = () => {
  mainStore.soonShow = true;
};
const that = getCurrentInstance();
const props = defineProps({
  showIcon: {
    type: Boolean,
    default: () => {
      return false;
    },
  },
  item: {
    type: Object,
    default: () => {
      return { type: '', path: '' };
    },
  },
});

const scrollToSection = () => {
  let offset = 60;
  if (window.innerWidth > 700) {
    offset = 0;
  }

  const element = document.getElementById(item.value.path);
  //  + window.pageYOffset
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
  }
};
const openUrl = () => {
  window.open(item.value.url);
};
const onClick1 = () => {
  switch (item.value.type) {
    case 'anchor':
      scrollToSection();
      break;
    case 'url':
    case 'link':
      openUrl();
      break;
    case 'soon':
      openSoon();
      break;
  }
};

const { perNft, item } = toRefs(props);
</script>

<template>
  <div class="base-link flex" @click="onClick1()">
    <div class="slot">
      <slot></slot>
    </div>
    <span v-if="showIcon" :class="`iconfont icon-youshang`"></span>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/style/base';
.base-link {
  transition: 0.2s;
  cursor: pointer;
  .slot {
    flex: 1;
  }
  .icon-youshang {
    width: (34 / 16rem);
    fill: currentColor;
    margin-left: (10 / 16rem);
  }
}
.base-link:hover {
  // transform: scale(1.05);
  color: #89a9f6;
}
@media @max768 {
  .base-link {
    cursor: auto;
    .icon-youshang {
      width: (28 / 3.9vw);
    }
  }
}
</style>
