<script setup>
import downloadImg from '@/assets/images/home/download.png';
import storeImg from '@/assets/images/home/store.png';
import playImg from '@/assets/images/home/play.png';
import ballImg from '@/assets/images/home/box2/ball.png';
import lineImg from '@/assets/images/home/box2/line.png';
import diamondImg from '@/assets/images/home/box2/diamond.png';
const router = useRouter();
import { ref } from 'vue';

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
      <div class="box flex">
        <div class="title-box">
          <div class="home-title">Node Distribution</div>
          <div class="home-subTitle">
            We have detected 15000+ CocoCat Nodes around 30+ Countries!
          </div>
        </div>
        <div class="dev-box">
          <div class="dev">
            <div class="dev-t">
              <img :src="diamondImg" alt="diamond" class="diamond" />
              Nodes Detected
            </div>
            <div class="dev-d">15000+</div>
          </div>
          <div class="dev">
            <div class="dev-t">
              <img :src="diamondImg" alt="diamond" class="diamond" />
              Countries
            </div>
            <div class="dev-d dev-d2">30+</div>
          </div>
          <div class="but" v-if="false">
            <BaseBut1>Join</BaseBut1>
          </div>
        </div>
        <div class="r">
          <!-- <HomeBoll></HomeBoll> -->
          <!-- <img :src="ballImg" alt="" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/style/base';
.wBox {
  background-repeat: no-repeat;
  background-image: url('@/assets/images/home/box2/star.png'),
    url('@/assets/images/home/box2/star.png');
  background-position: right center, left center;
  background-size: auto (750 / 16rem);
  margin-top: (120 / 16rem);
  overflow: hidden;
  .box {
    position: relative;
    display: grid;
    grid-template-columns: 37fr 63fr;
    grid-template-rows: 1fr 3fr;
    grid-template-areas:
      'a c'
      'b c';
    .title-box {
      grid-area: a;
      overflow: hidden;
      position: absolute;
      top: 40%;
      z-index: 1;
      pointer-events: none;
      .home-title {
        white-space: nowrap;
      }
      .home-subTitle {
        margin-top: (32 / 16rem);
        margin-bottom: (96 / 16rem);
      }
    }
    .dev-box {
      grid-area: b;
      .dev {
        margin-bottom: (20 / 16rem);
        width: (454 / 16rem);
        .dev-t {
          background-repeat: no-repeat;
          background-image: url('@/assets/images/home/box2/line.png');
          background-position: -10px bottom;
          background-size: 100% (15 / 16rem);
          padding-bottom: (15 / 16rem);
          font-size: (18 / 16rem);
          font-weight: 600;
          line-height: (36 / 16rem);
          img {
            width: (13 / 16rem);
            margin-right: (16 / 16rem);
          }
        }
        .dev-d {
          height: (72 / 16rem);
          line-height: (72 / 16rem);
          background-repeat: no-repeat;
          background-image: url('@/assets/images/home/box2/dev1.png');
          background-position: left center;
          background-size: (217 / 16rem) (52 / 16rem);
          font-family: Roboto;
          font-size: (48 / 16rem);
          font-weight: 700;
          line-height: (72 / 16rem);
          padding-left: (72 / 16rem);
          margin-left: (22 / 16rem);

          img {
            width: (13 / 16rem);
            margin-right: (16 / 16rem);
          }
        }
        .dev-d2 {
          background-image: url('@/assets/images/home/box2/dev2.png');
        }
      }
      .but {
        width: (240 / 16rem);
        margin-top: (60 / 16rem);
      }
    }
    .r {
      grid-area: c;
      img {
        width: 100%;
      }
    }
  }
}
@media @max768 {
  .wBox {
    background: none;
    margin-top: (50 / 3.9vw);
    .box {
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: auto auto auto;
      grid-template-areas:
        'a'
        'c'
        'b';
      .title-box {
        pointer-events: none;
        grid-area: a;
        position: relative;
        .home-title {
          white-space: normal;
          font-size: (33 / 3.9vw);
        }
        .home-subTitle {
          width: 100%;
          margin-top: (10 / 3.9vw);
          margin-bottom: (90 / 3.9vw);
        }
      }
      .dev-box {
        grid-area: b;
        .dev {
          margin-bottom: (20 / 3.9vw);
          width: 100%;
          .dev-t {
            background-repeat: no-repeat;
            background-image: url('@/assets/images/home/box2/line.png');
            background-position: -10px bottom;
            background-size: 100% (15 / 3.9vw);
            padding-bottom: (15 / 3.9vw);
            font-size: (18 / 3.9vw);
            font-weight: 600;
            line-height: (36 / 3.9vw);
            img {
              width: (13 / 3.9vw);
              margin-right: (16 / 3.9vw);
            }
          }
          .dev-d {
            height: (72 / 3.9vw);
            line-height: (72 / 3.9vw);
            background-repeat: no-repeat;
            background-image: url('@/assets/images/home/box2/dev1.png');
            background-position: left center;
            background-size: (217 / 3.9vw) (52 / 3.9vw);
            font-family: Roboto;
            font-size: (48 / 3.9vw);
            font-weight: 700;
            line-height: (72 / 3.9vw);
            padding-left: (72 / 3.9vw);
            margin-left: (22 / 3.9vw);

            img {
              width: (13 / 3.9vw);
              margin-right: (16 / 3.9vw);
            }
          }
          .dev-d2 {
            background-image: url('@/assets/images/home/box2/dev2.png');
          }
        }
        .but {
          width: (240 / 3.9vw);
          margin: (60 / 3.9vw) auto 0;
        }
      }
      .r {
        width: 100%;
        img {
          margin-left: -20px;
          width: 100vw;
        }
      }
    }
  }
}
</style>
