<script setup>
import downloadImg from '@/assets/images/home/download.png';
import storeImg from '@/assets/images/home/store.png';
import playImg from '@/assets/images/home/play.png';
import phoneImg from '@/assets/images/home/box4/phone.png';
import leftImg from '@/assets/images/home/box4/left.png';
import footImg from '@/assets/images/home/box4/foot.png';
import tipsImg from '@/assets/images/home/box4/tips.png';
const router = useRouter();
import { ref } from 'vue';

const goPath = (item) => {
  router.push(item.path);
};

const devList = ref([
  {
    text: 'CocoPay',
    path: '/',
    type: 'path',
  },
  {
    text: 'CocoApp Market',
    path: '/',
    type: 'path',
  },
  {
    text: 'NFT Emoji',
    path: '/',
    type: 'path',
  },
  {
    text: 'Web3 Red Packet',
    path: '/',
    type: 'path',
  },
  {
    text: 'Magic Voice',
    path: '/',
    type: 'path',
  },
  {
    text: 'Self Destruct System',
    path: '/',
    type: 'path',
  },
  {
    text: 'Doppelganger',
    path: '/',
    type: 'path',
  },
  {
    text: 'P2P Instant Messaging',
    path: '/',
    type: 'path',
  },
]);
const change = () => {
  menuList.value[0].text = '14444444444';
};
onMounted(() => {});
</script>

<template>
  <div class="wBox" id="box4">
    <div class="w">
      <div class="box flex">
        <div class="l">
          <img class="phone" :src="phoneImg" alt="phone" />
          <!-- <img :src="footImg" alt="star" class="star" /> -->
        </div>
        <div class="title-box">
          <div class="home-title" v-aos="'fade-up'">CocoCat Platform</div>
          <div class="home-subTitle" data-aos="fade-up">
            The first application on cat network & The best Web3 social platform
            ever!
          </div>
        </div>
        <div class="dev-box">
          <div
            class="dev flex"
            data-aos="fade-up"
            v-aos="'fade-up'"
            v-for="(item, index) in devList"
            :key="index"
          >
            <img :src="tipsImg" alt="diamond" class="dev-l" />
            <div class="dev-r">
              <span>{{ item.text }}</span>
            </div>
          </div>
          <div class="but" v-aos="'fade-up'" v-if="false">
            <BaseBut1>Learn More</BaseBut1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/style/base';
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
  background-position: calc(50% - @rban) (0 / 16rem),
    calc(50% + @rban) (-300 / 16rem), calc(70%) (700 / 16rem);
  .w {
    max-width: (1814 / 16rem);
    // width: (1814 / 16rem);
    padding: (56 / 16rem) (147 / 16rem);
    background-color: rgba(255, 255, 255, 0.397);
    backdrop-filter: blur(15px);
  }
}
.box {
  align-items: flex-start;

  display: grid;
  grid-template-columns: (600 / 16rem) 1fr;
  grid-template-rows: auto 1fr;

  grid-column-gap: (58 / 16rem);
  grid-template-areas:
    'a b'
    'a c';
  .l {
    grid-area: a;
    width: (600 / 16rem);
    .phone {
      width: 100%;
      transition: 0.2s;
    }
    .phone:hover {
      transform: scale(1.03);
    }
  }
  .title-box {
    grid-area: b;
    // padding-top: (120 / 16rem);
    .home-title {
      // white-space: nowrap;
      font-size: (72 / 16rem);
    }
    .home-subTitle {
      width: (680 / 16rem);
      margin-top: (20 / 16rem);
      margin-bottom: (40 / 16rem);
    }
  }
  .dev-box {
    grid-area: c;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto;
    .dev {
      margin-bottom: (8 / 16rem);

      .dev-l {
        width: (48 / 16rem);
        margin-right: (18 / 16rem);
      }

      .dev-r {
        font-family: Roboto;
        font-size: (24 / 16rem);
        font-weight: 400;
        line-height: (36 / 16rem);
        border-bottom: (1 / 16rem) solid red;
        flex: 1;
        padding: (18 / 16rem) 0;
        border-image: linear-gradient(
            90deg,
            #74abfe 0%,
            rgba(5, 107, 231, 0) 100%
          )
          1;
        opacity: 0.6;
        cursor: pointer;
        white-space: nowrap;
      }
      .dev-r:hover {
        opacity: 1;
        // font-weight: 600;
      }
    }
    .but {
      color: #fff;
      width: (240 / 16rem);
      margin-top: (30 / 16rem);
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
      calc(50% - @rban) (200 / 3.9vw), calc(70%) (120%);
    .w {
      // width: (1814 / 16rem);
      padding: (40 / 3.9vw) (10 / 3.9vw);
      background-color: rgba(255, 255, 255, 0.397);
      border: 1px solid #ffffff99;
      backdrop-filter: blur(15px);
    }
  }
  .box {
    align-items: flex-start;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      'b'
      'a'
      'c';
    .l {
      grid-area: a;
      width: 100%;
      text-align: center;
      .phone {
        width: (314 / 3.9vw);
      }
    }
    .title-box {
      grid-area: b;
      padding-top: (0 / 3.9vw);
      margin-top: -0px;

      .home-title {
        // white-space: nowrap;
        font-size: (24 / 3.9vw);
        text-align: center;
      }
      .home-subTitle {
        width: 100%;
        margin-top: (36 / 3.9vw);
        margin-bottom: (72 / 3.9vw);
      }
    }
    .dev-box {
      grid-area: c;
      margin-top: (50 / 3.9vw);
      .dev {
        margin-bottom: (8 / 3.9vw);
        align-items: flex-start;
        .dev-l {
          width: (18 / 3.9vw);
          margin-right: (6 / 3.9vw);
        }

        .dev-r {
          font-family: Roboto;
          cursor: auto;
          font-size: (14 / 3.9vw);
          font-weight: 400;
          line-height: (20 / 3.9vw);
          border-bottom: (1 / 3.9vw) solid red;
          flex: 1;
          padding: 0 0 (10 / 3.9vw);
          margin-bottom: (14 / 3.9vw);
          border-image: linear-gradient(
              90deg,
              #74abfe 0%,
              rgba(5, 107, 231, 0) 100%
            )
            1;
        }
      }
      .but {
        width: (220 / 3.9vw);
        margin: (60 / 3.9vw) auto 0;
      }
    }
  }
}
</style>
