<script setup>
import logoImg from '@/assets/logo.png';
import menuImg from '@/assets/images/header/menu.png';

const router = useRouter();
import { ref } from 'vue';

const goPath = (item) => {
  router.push(item.path);
};
const menuShow = ref(false);

const menuList = ref([
  {
    text: 'Home',
    path: 'box1',
    type: 'anchor',
  },
  {
    text: 'Node Distribution',
    path: 'box2',
    type: 'anchor',
  },
  {
    text: 'Cat Network',
    path: 'box3',
    type: 'anchor',
  },
  {
    text: 'CocoCat Platform',
    path: 'box4',
    type: 'anchor',
  },
  {
    text: 'CocoApp',
    path: 'box5',
    type: 'anchor',
  },
  {
    text: 'FAQ',
    path: 'box6',
    type: 'anchor',
  },
]);
</script>

<template>
  <div>
    <div class="w">
      <div class="wl-header">
        <div class="l">
          <img class="logo" :src="logoImg" alt="Logo" />
          Cococat
        </div>
        <div class="r">
          <div class="menu-item" v-for="(item, index) in menuList" :key="index">
            <!-- <a href="javascript:;" @click="goPath(item)">{{ item.text }}</a> -->
            <BaseLink :item="item">{{ item.text }}</BaseLink>
          </div>
        </div>
        <div class="menu-icon" @click="menuShow = true">
          <img :src="menuImg" alt="menu" />
        </div>
      </div>
    </div>
    <div class="menuBox">
      <div class="menuBg" v-if="menuShow" @click="menuShow = false"></div>
      <Transition name="fade">
        <div class="menu-list" v-if="menuShow">
          <div class="menu-item menu-title">List</div>
          <div class="menu-item" v-for="(item, index) in menuList" :key="index">
            <!-- <span @click="goPath(item)">{{ item.text }}</span> -->
            <BaseLink @click="menuShow = false" :item="item">{{
              item.text
            }}</BaseLink>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/style/base';
.wl-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: (100 / 16rem);
  border-bottom: (3 / 16rem) solid;
  border-image: linear-gradient(to right, #00000000, #ffffff38, #00000000) 1;

  backdrop-filter: blur(5px);
  // position: fixed;
  // z-index: 3;
  .l {
    display: flex;
    align-items: center;
    font-size: (28 / 16rem);
    font-weight: 700;
    line-height: (34 / 16rem);

    .logo {
      width: (60 / 16rem);
      margin-right: (24 / 16rem);
    }
  }
  .r {
    display: flex;
    align-items: center;
    font-size: (18 / 16rem);
    font-weight: 600;
    line-height: (24 / 16rem);
    opacity: 0.8;
    .menu-item {
      margin-left: (52 / 16rem);
      transition: 0.2s;
    }
    .menu-item:hover {
      color: #297ff3;
    }
  }
  .menu-icon {
    display: none;
  }
}
@media @max768 {
  .wl-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 0 (20 / 3.9vw);
    height: (54 / 3.9vw);
    z-index: 9;
    background: #33333333;

    .l {
      font-size: (14 / 3.9vw);

      .logo {
        width: (34 / 3.9vw);
        height: (34 / 3.9vw);
        margin-right: (14 / 3.9vw);
      }
    }
    .r {
      display: none;
    }
    .menu-icon {
      display: inline-block;
      img {
        width: (24 / 3.9vw);
        height: (24 / 3.9vw);
      }
    }
  }
  .menuBox {
    .menuBg {
      width: 100vw;
      height: 100vh;
      position: fixed !important;
      top: 0;
      left: 0;
      z-index: 10;
      background-color: rgba(0, 0, 0, 0.438);
    }
    .menu-list {
      width: 60vw;
      height: 100vh;
      position: fixed;
      top: (00 / 3.9vw);
      right: 0;
      z-index: 11;
      background: #000814cc;

      box-shadow: (10 / 3.9vw) (0 / 3.9vw) (20 / 3.9vw) (0 / 3.9vw) #0e47b699
        inset;
      backdrop-filter: blur(5px);

      .menu-item {
        padding-right: (20 / 3.9vw);
        transition: 0.2s;
        text-align: right;
        font-size: (18 / 3.9vw);
        font-weight: 600;
        line-height: (24 / 3.9vw);
        margin-bottom: (30 / 3.9vw);
      }
      .menu-title {
        margin-top: (65 / 3.9vw);
        font-size: (30 / 3.9vw);
        font-weight: 800;
      }
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0.2;
    transform: translateX(100%);
  }
}
</style>
