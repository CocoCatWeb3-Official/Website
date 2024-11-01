<script setup>
import downloadImg from '@/assets/images/home/download.png';
import storeImg from '@/assets/images/home/store.png';
import playImg from '@/assets/images/home/play.png';
import apkImg from '@/assets/images/home/apk.png';
const router = useRouter();
import { ref } from 'vue';
import { useMainStore } from '@/stores/useMainStore';
const mainStore = useMainStore();

const openUrl = (url) => {
  window.open(url);
  downloadShow.value = false;
};

const downList = ref([
  {
    name: 'Store',
    img: 'shangdian',
    url: 'https://apps.apple.com/us/app/cococat/id6449736050?l=en-GB',
  },
  {
    name: 'Play',
    img: 'googleplay',
    url: 'https://play.google.com/store/apps/details?id=com.coco.cat',
  },
  {
    name: 'Apk',
    img: 'apk',
    // url: 'https://android.cococat.io/cococat.apk',
    url: '/cococat.apk',
  },
]);

const starList = ref([]);

onMounted(() => {
  window.innerWidth;
  const h = window.innerWidth > 700 ? 800 : 450;
  for (let i = 0; i < 10; i++) {
    starList.value.push({
      top: Math.random() * h + 'px',
      left: Math.random() * 14 + 's',
      v: Math.random() * 5 + 9 + 's',
    });
  }
});
const downloadShow = ref(false);
</script>

<template>
  <div class="wBox" id="box1">
    <div class="w">
      <div class="box">
        {{ mainStore.counter }}

        <div class="t-box wow bounce" v-aos="'fade-up'">
          The Network For Web3 <br />
          <span> Application</span>
        </div>
        <div class="sub-box" v-aos="'fade-up'">
          Leverage the power of CocoCat to create groundbreaking Web3 projects
          that <br />
          captivate and engage <br />
          a global community of decentralized network enthusiasts.
        </div>
        <div class="but-box">
          <BaseBut1
            v-aos="'fade-up'"
            @click.stop="mainStore.downloadShow = !mainStore.downloadShow"
            >Download</BaseBut1
          >
          <div class="downPopBox" v-if="mainStore.downloadShow">
            <div class="l" v-for="(item, index) in downList" :key="index">

              <span
                :class="`iconfont icon-${item.img}`"
                @click="openUrl(item.url)"
              ></span>
            </div>
          </div>
        </div>
        <div class="cookie" v-if="false">
          <div class="l">
            Cococat uses cookies on site to enhance your user experience,
            understand site usage, and assist in our marketing efforts.
          </div>
          <div class="r">
            <BaseBut1>I Agree</BaseBut1>
          </div>
        </div>
      </div>
    </div>

    <div class="wBox-bg">
      <div
        class="star"
        v-for="item in starList"
        :key="item"
        :style="{
          top: item.top,
          animationDelay: item.left,
          animationDuration: item.v,
        }"
      ></div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/style/base';
.box {
  padding: (100 / 16rem) 0 (100 / 16rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  .t-box {
    font-family: Montserrat;
    font-size: (100 / 16rem);
    font-weight: bold;
    line-height: (108 / 16rem);
    text-align: center;
    height: (300 / 16rem);
    // width: 80%;
    span {
      color: #297ff3;
    }
  }
  .sub-box {
    margin-top: (18 / 16rem);
    width: (825 / 16rem);
    text-align: center;
    font-family: Roboto;
    font-size: (24 / 16rem);
    font-weight: 400;
    line-height: (36 / 16rem);
    opacity: 0.8;
  }

  .but-box {
    margin-top: (72 / 16rem);
    position: relative;
    .downPopBox {
      top: (90 / 16rem);
      left: 50%;
      width: (320 / 16rem);
      padding: 0 (20 / 16rem);
      height: (101 / 16rem);
      position: absolute;
      display: flex;
      border-radius: (50 / 16rem);
      border: (1 / 16rem) solid #444;
      background-color: #1f1f1f;
      align-items: center;
      justify-content: space-around;
      transform: translate(-50%, (0 / 16rem));
      transition: all 0.2s ease 0.1s;
      .iconfont {
        font-size: (40 / 16rem);
        color: rgb(207, 226, 255);
        cursor: pointer;
      }
      .iconfont:hover {
        color: #297ff3;
      }
    }
    .downPopBox::after {
      content: '';
      width: (25 / 16rem);
      height: (25 / 16rem);
      background-color: #1f1f1f;
      position: absolute;
      left: 50%;
      top: 0;
      // border: ( 1 / 16rem) solid #fff;
      border-top: (1 / 16rem) solid #444;
      border-left: (1 / 16rem) solid #444;
      transform: translate(-50%, -50%) rotate(45deg);
      border-radius: (8 / 16rem) 0 0 0;
    }
  }
  .cookie {
    height: (148 / 16rem);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: (72 / 16rem);
  }
}

.wBox-bg {
  position: absolute;
  width: 100%;
  height: (100 / 16rem);
  top: (100 / 16rem);
  // top: 0;
  left: 0;
  height: (1080 / 16rem);
  z-index: 1;
  // background-color: blue;
  pointer-events: none;
  overflow: hidden;

  .star {
    position: absolute;
    top: (400 / 16rem);
    width: (204 / 16rem);
    height: (1 / 16rem);
    background: linear-gradient(
      90deg,
      rgba(67, 155, 244, 0) 0%,
      rgba(67, 155, 244, 0.6) 100%
    );
    left: -204px;
    animation: goright 20s linear infinite;
  }
  @keyframes goright {
    to {
      left: 100%;
    }
  }
}
@media (min-width: 1520px) {
  .box {
    @top: (100 / 16rem);
    height: calc(100vh - @top);
  }
}
@media @max768 {
  .box {
    padding: (100 / 3.9vw) 0 (100 / 3.9vw);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    .t-box {
      height: (150 / 3.9vw);
      font-family: Montserrat;
      font-size: (30 / 3.9vw);
      font-weight: bold;
      line-height: (50 / 3.9vw);
      text-align: center;
      span {
        color: #297ff3;
      }
    }
    .sub-box {
      margin-top: (18 / 3.9vw);
      width: 100%;
      text-align: center;
      font-family: Roboto;
      font-size: (14 / 3.9vw);
      font-weight: 400;
      line-height: (36 / 3.9vw);
      opacity: 0.8;
    }

    .but-box {
      margin-top: (62 / 3.9vw);
      position: relative;
      .downPopBox {
        top: (60 / 3.9vw);
        left: 50%;
        width: (260 / 3.9vw);
        padding: 0 (20 / 3.9vw);
        height: (71 / 3.9vw);
        .iconfont {
          cursor: auto;
        }
      }
    }
  }
  .wBox-bg {
    height: (800 / 3.9vw);
    top: (70 / 3.9vw);
    .star {
      position: absolute;
      top: (100 / 3.9vw);
      width: (204 / 3.9vw);
      height: (1 / 3.9vw);
      background: linear-gradient(
        90deg,
        rgba(67, 155, 244, 0) 0%,
        rgba(67, 155, 244, 0.6) 100%
      );
      left: -204px;
      animation: goright 20s linear infinite;
    }
  }
}
</style>
