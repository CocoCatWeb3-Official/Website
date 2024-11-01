<script setup>
import { toRefs } from 'vue';


const openUrl = (item) => {
  if (item.type == 'link') {
    window.open(item.path);
  } else if (item.type == 'email') {
    window.location.href = `mailto:${item.path} `;
  }
};


const props = defineProps({
  item: {
    type: Object,
  },
  children: {
    type: [Array, Boolean],
    default: () => {
      return false;
    },
  },
});
const { perNft } = toRefs(props);
</script>

<template>
  <div class="tooltip">
    <slot></slot>
    <div class="tooltipPop">
      <div v-if="children" class="children flex">
        <div v-for="(it, index) in children" :key="index">
          <BaseLink>
            <div class="child flex" @click="openUrl(it)">
              <span :class="`iconfont icon-${it.img}`"></span>
              <span>{{ it.name }}</span>
            </div>
          </BaseLink>
        </div>
      </div>
      <span v-else @click="copy()">{{ item.name }}</span>
    </div>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/style/base';
.tooltip {
  position: relative;
  .tooltipPop {
    border-radius: (3 / 16rem);
    position: absolute;
    bottom: 100%;
    left: 80%;
    transform: translateX(-50%) scale(0);
    background-color: #fff;
    color: #000;
    padding: (8 / 16rem) (15 / 16rem);
    opacity: 0;
    transition: all 0.2s ease 0.1s;
    display: flex;
    align-items: center;
    span {
      white-space: nowrap;
      font-size: 1.2rem;
    }
    .children {
      flex-direction: column;
      align-items: flex-start;
      .child {
        width: 100%;
        // text-align: center;
        justify-content: start;
        align-items: center;
        line-height: normal;

        margin: 0 (10 / 16rem);
        .iconfont {
          font-size: (36 / 16rem);
          margin-right: (10 / 16rem);
        }
      }
    }
  }
}
.tooltip:hover .tooltipPop {
  // .tooltip .tooltipPop {
  transform: scale(1.05);
  opacity: 1;
  transform: translateX(-50%) scale(1);
}
</style>
