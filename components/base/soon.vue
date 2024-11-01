<script setup>
import cancelImg from '@/assets/images/app/cancel.png';
import { toRefs, ref } from 'vue';
import { useMainStore } from '@/stores/useMainStore';
const mainStore = useMainStore();

const down = () => {
  mainStore.soonShow = false;
};
watch(
  () => [mainStore.soonShow],
  () => {
    if (mainStore.soonShow) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
);
</script>

<template>
  <div class="soon">
    <div class="soonBg" v-if="mainStore.soonShow"></div>
    <Transition>
      <div class="soonBox" v-if="mainStore.soonShow">
        <img class="cancel" @click="down" :src="cancelImg" alt="cancel" />
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/style/base';
.soon {
  .soonBg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
    width: 100vw;
    height: 100vh;
    background-color: #000000a2;
  }
  .soonBox {
    position: fixed;
    z-index: 12;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: (978 / 16rem);
    // height: (520 / 16rem);
    aspect-ratio: 978 / 520;
    // border-radius: (30 / 16rem);
    // background-color: #ffffff00;
    background-image: url('@/assets/images/app/soon.png');
    background-size: 100% 100%;
    .cancel {
      position: absolute;
      right: (24 / 16rem);
      top: (24 / 16rem);
      width: (28 / 16rem);
    }
  }
}
@media @max768 {
  .soon {
    .soonBox {
      width: (375 / 3.9vw);
      // height: (250 / 3.9vw);
      .cancel {
        position: absolute;
        right: (15 / 3.9vw);
        top: (15 / 3.9vw);
        width: (28 / 3.9vw);
      }
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translate(-50%, 0%) scale(0.5);
}
</style>
