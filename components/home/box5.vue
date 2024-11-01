<script setup>
import downloadImg from '@/assets/images/home/download.png';
import storeImg from '@/assets/images/home/store.png';
import playImg from '@/assets/images/home/play.png';
import bgImg from '@/assets/images/home/box5/bg1.png';
import { Notification } from '@arco-design/web-vue';
const router = useRouter();
import { ref } from 'vue';
import { useMainStore } from '@/stores/useMainStore';
const mainStore = useMainStore();
const openSoon = () => {
  mainStore.soonShow = true;
};

</script>

<template>
  <div class="wBox" id="box5">
    <!-- <img class="bg" :src="bgImg" alt="" /> -->
    <div class="w">
      <div class="box">
        <div class="l">
          <div class="home-title" v-aos="'fade-up'">
            <!-- <span>50+</span>CocoApps! -->
            CocoApp
          </div>
          <div class="home-subTitle" v-aos="'fade-up'">
            Exploring Web3 Application with just BTC address！Activate your
            silent assets！
          </div>
          <div class="but" data-aos="fade-up">
            <BaseBut1 @click="openSoon()">Exploring</BaseBut1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/style/base';
.w {
  overflow: hidden;
}
@ban: (370 / 16rem);
.wBox {
  background-repeat: no-repeat;
  background-image: url('@/assets/images/home/box5/bg1.png');
  background-position: calc(50% + @ban) center;
  height: (1080 / 16rem);
  background-size: auto (1080 / 16rem);
  margin-bottom: (400 / 16rem);
  margin: auto;
  overflow: hidden;
  .box {
    padding-top: (200 / 16rem);
    .home-title {
      span {
        color: #297ff3;
      }
    }
    .home-subTitle {
      width: (750 / 16rem);
      margin-top: (40 / 16rem);
      margin-bottom: (40 / 16rem);
    }
    .but {
      width: (240 / 16rem);
    }
  }
}
@media @max768 {
  .wBox {
    height: auto;
    margin-top: (60 / 3.9vw);
    margin-bottom: (70 / 3.9vw);
    padding-bottom: (20 / 3.9vw);
    background-size: auto (298 / 3.9vw);
    background-position: right center;
    .box {
      padding-top: (0 / 3.9vw);
      .home-subTitle {
        width: 100%;
        margin-top: (10 / 3.9vw);
      }
      .but {
        margin: 0 auto;
        width: (184 / 3.9vw);
        margin-top: (370 / 3.9vw);
      }
    }
  }
}
</style>
