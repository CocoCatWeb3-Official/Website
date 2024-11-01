<script setup>
import downloadImg from '@/assets/images/home/download.png';
import storeImg from '@/assets/images/home/store.png';
import playImg from '@/assets/images/home/play.png';
import item1Img from '@/assets/images/home/box3/item1.png';
import item2Img from '@/assets/images/home/box3/item2.png';
import item3Img from '@/assets/images/home/box3/item3.png';
import item4Img from '@/assets/images/home/box3/item4.png';
const router = useRouter();
import { ref } from 'vue';

const goPath = (item) => {
  router.push(item.path);
};

const itemList = ref([
  {
    title:
      'A High-performance,<span style="color: #297ff3;">  high-security P2P </span>  communication system',
    img: item1Img,
    type: 'url',
    link: 'Learn More',
    url: 'https://docs.cococat.io/',
  },
  {
    title:
      'A Borderless <span style="color: #297ff3;">  network </span>  application system',
    img: item2Img,
    type: 'url',
    link: 'Learn More',
    url: 'https://docs.cococat.io/',
  },
  {
    title:
      'A <span style="color: #297ff3;">  Peer-to-peer </span>  "friend" trust system',
    img: item3Img,
    type: 'url',
    link: 'Learn More',
    url: 'https://docs.cococat.io/',
  },
  {
    title: 'Learn about <span style="color: #297ff3;"> cococat </span>',
    img: item4Img,
    type: 'url',
    link: 'Learn More',
    url: 'https://docs.cococat.io/',
  },
]);
</script>

<template>
  <div id="box3">
    <div class="w">
      <div class="box">
        <div class="title-box">
          <div class="home-title" v-aos="'fade-up'">Cat Network</div>
          <div class="home-subTitle" v-if="false" v-aos="'fade-up'">
            Leverage the power of CocoCat to create groundbreaking Web3 projects
            that captivate and engage a global community of decentralized
            network enthusiasts.
          </div>
        </div>
        <div class="boxBody flex">
          <div
            class="body-item"
            v-aos="'fade-up'"
            v-for="(item, index) in itemList"
            :key="index"
          >
            <div class="filter"></div>
            <img :src="item.img" :alt="item.title" class="icon" />
            <!-- <div class="bg1"></div>
            <div class="bg2"></div> -->
            <div class="title" v-html="item.title"></div>
            <div class="link">
              <BaseLink :showIcon="true" :item="item">
                {{ item.link }}
              </BaseLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/style/base';
.box {
  background-image: url('@/assets/images/home/box3/bg.png');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: (1207 / 16rem) (1406 / 16rem);
  padding-bottom: (250 / 16rem);
  margin-top: (400 / 16rem);
  .title-box {
    text-align: center;
    .home-subTitle {
      width: (1070 / 16rem);
      margin: (36 / 16rem) auto (72 / 16rem);
    }
  }
  .boxBody {
    flex-wrap: wrap;
    margin-top: (50 / 16rem);
    .body-item {
      // width: ( 712 / 16rem);
      // flex: 1;
      width: 48%;
      aspect-ratio: 712 / 560;
      // height: ( 560 / 16rem);
      // background-color: red;
      margin-bottom: 4%;
      border-radius: (20 / 16rem);
      // margin-right: 5%;
      overflow: hidden;
      position: relative;
      // border: 1px solid #fff;
      background-color: #222;
      background-image: url('@/assets/images/home/box3/itemBg.png');
      background-size: 100%;
      background-repeat: no-repeat;

      .icon {
        position: absolute;
        width: (140 / 16rem);
        left: 50%;
        top: 18%;
        transform: translateX(-50%);
        z-index: 1;
        transition: 0.2s;
      }
      .title {
        z-index: 3;
        position: absolute;
        left: (30 / 16rem);
        top: 60%;
        font-size: (28 / 16rem);
        font-weight: 700;
        line-height: (42 / 16rem);
        span {
          color: #297ff3;
        }
      }
      .link {
        z-index: 3;
        position: absolute;
        left: (30 / 16rem);
        bottom: (50 / 16rem);
        font-size: (24 / 16rem);
        font-weight: 600;
        line-height: (42 / 16rem);
        white-space: nowrap;
      }
    }
    .body-item:hover {
      .icon {
        transform: translateX(-50%) scale(1.1);
      }
    }
  }
}
@media @max768 {
  .box {
    background-image: url('@/assets/images/home/box3/bg.png');
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: (460 / 3.9vw) (360 / 3.9vw);
    padding-bottom: (150 / 3.9vw);
    margin-top: (120 / 3.9vw);
    .title-box {
      text-align: center;
      .home-subTitle {
        width: 100%;
        margin: (10 / 3.9vw) auto (60 / 3.9vw);
      }
    }
    .boxBody {
      flex-wrap: wrap;
      margin-top: (50 / 3.9vw);
      .body-item {
        width: 100%;
        height: (275 / 3.9vw);
        // background-color: red;
        margin-bottom: (20 / 3.9vw);
        border-radius: (20 / 3.9vw);
        overflow: hidden;
        position: relative;
        .title {
          left: (20 / 3.9vw);
          line-height: (19 / 3.9vw);
          font-size: (16 / 3.9vw);
        }
        .icon {
          position: absolute;
          width: (60 / 3.9vw);
          z-index: 1;
          transition: 0.2s;
        }
        .link {
          left: (20 / 3.9vw);
          bottom: (20 / 3.9vw);
          font-size: (12 / 3.9vw);
        }
      }
    }
  }
}
</style>
