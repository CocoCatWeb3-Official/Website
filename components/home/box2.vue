<script setup>
import downloadImg from '@/assets/images/home/download.png';
import storeImg from '@/assets/images/home/store.png';
import playImg from '@/assets/images/home/play.png';
import ballImg from '@/assets/images/home/box2/ball.png';
import lineImg from '@/assets/images/home/box2/line.png';
import diamondImg from '@/assets/images/home/box2/diamond.png';
const router = useRouter();
import { ref } from 'vue';

import { useMainStore } from '@/stores/useMainStore';
const mainStore = useMainStore();
const openSoon = () => {
  mainStore.soonShow = true;
};
const goPath = (item) => {
  router.push(item.path);
};

const menuList = ref([
  {
    text: 'Home',
    path: '/',
    type: 'path',
  },
  {
    text: 'Node Distribution',
    path: '/',
    type: 'path',
  },
  {
    text: 'The Cat Network',
    path: '/',
    type: 'path',
  },
  {
    text: 'Cococat',
    path: '/',
    type: 'path',
  },
  {
    text: 'Cococat App',
    path: '/',
    type: 'path',
  },
  {
    text: 'FAQ',
    path: '/home',
    type: 'path',
  },
]);
const change = () => {
  menuList.value[0].text = '14444444444';
};
</script>

<template>
  <div class="wBox" id="box2">
    <div class="w">
      <div class="box">
        <div class="title-box">
          <div class="home-title" v-aos="'fade-up'">
            <span>50000+</span> Nodes
          </div>
          <div class="home-subTitle" v-aos="'fade-up'">
            <span>30+</span> Countries
          </div>
          <div class="but" data-aos="fade-up">
            <BaseBut1 @click="openSoon()">Join</BaseBut1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/style/base';
// .wBox {
//   background-color: #fff;
//   background-repeat: no-repeat;
//   background-image: url('@/assets/images/home/box2/star.png'),
//     url('@/assets/images/home/box2/star.png');
//   background-position: right center, left center;
//   background-size: auto (750 / 16rem);
//   margin-top: (120 / 16rem);
//   overflow: hidden;
// }
@rban: (1000 / 16rem);
.wBox {
  background-color: #fff;
  padding: (39 / 16rem) 0;
  color: #333;
  background-repeat: no-repeat;
  background-image: url('@/assets/images/home/bgY.png'),
    url('@/assets/images/home/bgG.png'), url('@/assets/images/home/bgB.png');
  background-size: (950 / 16rem) (950 / 16rem), (851 / 16rem) (851 / 16rem),
    (851 / 16rem) (851 / 16rem);
  background-position: calc(50% + @rban) (100 / 16rem), calc(50% - @rban) 250%,
    calc(30%) (-350 / 16rem);
  .w {
    height: (980 / 16rem);
    max-width: (1814 / 16rem);
    // width: (1814 / 16rem);
    padding: (56 / 16rem) (147 / 16rem);
    background-color: rgba(255, 255, 255, 0.397);
    border: 1px solid #ffffff99;
    backdrop-filter: blur(15px);
    .title-box {
      text-align: center;
      color: #333;
      .home-title {
        font-family: Roboto;
        font-size: (180 / 16rem);
        font-weight: 700;
        line-height: (210 / 16rem);
        color: #000;
        margin-top: (160 / 16rem);
        span {
          color: #297ff3;
        }
      }
      .home-subTitle {
        font-family: Roboto;
        font-size: (150 / 16rem);
        font-weight: 700;
        line-height: (175 / 16rem);
        color: #000;
        margin-top: (80 / 16rem);
        span {
          color: #6affad;
        }
      }
      .but {
        margin: (120 / 16rem) auto;
        width: (240 / 16rem);
        color: #fff;
      }
    }
  }
}
@media @max768 {
  @rban: (195 / 3.9vw);
  .wBox {
    background-color: #fff;
    padding: (10 / 3.9vw);
    color: #333;
    background-repeat: no-repeat;
    background-image: url('@/assets/images/home/bgY.png'),
      url('@/assets/images/home/bgG.png'), url('@/assets/images/home/bgB.png');
    background-size: (314 / 3.9vw) (314 / 3.9vw), (314 / 3.9vw) (314 / 3.9vw),
      (314 / 3.9vw) (314 / 3.9vw);
    background-position: calc(50% + @rban) (-100 / 3.9vw),
      calc(50% - @rban) (150 / 3.9vw), calc(70%) (120%);
    .w {
      height: auto;
      // width: (1814 / 16rem);
      padding: (50 / 3.9vw) 0 (80 / 3.9vw);

      backdrop-filter: blur(15px);
      .title-box {
        text-align: center;
        color: #333;
        .home-title {
          font-family: Roboto;
          font-size: (40 / 3.9vw);
          font-weight: 700;
          line-height: (40 / 3.9vw);
          color: #000;
          margin-top: (30 / 3.9vw);
          span {
            color: #297ff3;
          }
        }
        .home-subTitle {
          font-family: Roboto;
          font-size: (34 / 3.9vw);
          font-weight: 700;
          line-height: (34 / 3.9vw);
          color: #000;
          margin-top: (20 / 3.9vw);
          span {
            color: #6affad;
          }
        }
        .but {
          margin: (50 / 3.9vw) auto 0;
          width: (178 / 3.9vw);
          color: #fff;
        }
      }
    }
  }
}
</style>
