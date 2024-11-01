<script setup>
import logoImg from '@/assets/logo.png';
import telegramImg from '@/assets/images/footer/telegram.png';
import emailImg from '@/assets/images/footer/email.png';
import discordImg from '@/assets/images/footer/discord.png';
import twitterImg from '@/assets/images/footer/twitter.png';
const router = useRouter();
import { ref } from 'vue';

const openUrl = (item) => {
  // router.push(item.path);
  if (item.type == 'link') {
    window.open(item.path);
  } else if (item.type == 'email') {
    window.location.href = `mailto:${item.path} `;
  }
};

const icons = [
  // {
  //   type: 'link',
  //   name: 'Discord',
  //   img: discordImg,
  //   path: 'www.baidu.com',
  // },
  {
    type: 'link',
    name: 'CocoCat_Web3',
    img: 'tuite',
    path: 'https://twitter.com/CocoCat_Web3',
  },
  {
    type: 'link',
    name: 'CocoCatCommunity',
    img: 'telegarm',
    path: 'https://t.me/CocoCatCommunity',
    // children: [
    //   {
    //     type: 'link',
    //     name: 'Community',
    //     img: 'telegarm',
    //     path: 'https://t.me/CocoCatCommunity',
    //   },
    //   {
    //     type: 'link',
    //     name: 'Chinese',
    //     img: 'telegarm',
    //     path: 'https://t.me/CocoCatCommunityCn',
    //   },
    // ],
  },

  {
    type: 'email',
    name: 'cococat.web3@gmail.com',
    img: 'emali',
    path: 'cococat.web3@gmail.com',
  },
];
const menuList = [
  {
    text: 'About',
    url: '/',
    type: 'title',
    children: [
      { text: 'About Us', type: 'soon', path: 'box6' },
      { text: 'Teams', type: 'soon', path: 'box6' },
      { text: 'Github', type: 'soon', path: 'box6' },
    ],
  },
  {
    text: 'Support',
    url: '/',
    type: 'title',
    children: [
      { text: 'Account', type: 'soon', path: 'box6' },
      { text: 'Contact Us', type: 'soon', path: 'box6' },
    ],
  },
  {
    text: 'Documents',
    url: '/',
    type: 'title',
    children: [
      { text: 'FAQ', type: 'anchor', path: 'box6' },
      { text: 'Blog', type: 'soon', path: 'box6' },
    ],
  },
];

const copyright = {
  type: 'link',
  path: 'https://github.com/CocoCatWeb3-Official/Documents',
};
</script>

<template>
  <div>
    <div class="w">
      <div class="wl-header">
        <div class="l">
          <div class="t">
            <img class="logo" :src="logoImg" alt="Logo" />
            Cococat
          </div>
          <div class="text">The DePIN For Web3 Application</div>
          <div class="icons">
            <div class="icon" v-for="(item, index) in icons" :key="index">
              <BaseTooltip :item="item">
                <span
                  :class="`iconfont icon-${item.img}`"
                  @click="openUrl(item)"
                ></span>
              </BaseTooltip>
            </div>
          </div>
        </div>
        <!-- <div class="c">
          © 2022-2024 Particle Labs US Inc.
          <span @click="openUrl(copyright)">&lt;Privacy Policy &gt;</span>
        </div> -->

        <div class="r">
          <div class="menu-item" v-for="(item, index) in menuList" :key="index">
            <div class="t">{{ item.text }}</div>
            <div class="b" v-for="(it, i) in item.children" :key="i">
              <BaseLink :item="it">{{ it.text }}</BaseLink>
              <!-- <a href="javascript:;" @click="goPath(item)">{{ it.text }}</a> -->
            </div>
          </div>
        </div>
      </div>
      <div class="wl-footer flex">
        <div class="l">© 2022-2024 Particle Labs US Inc.</div>
        <div class="r">
          <span @click="openUrl(copyright)">&lt;Privacy Policy &gt;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/style/base';
.wl-header {
  width: 100%;
  margin-top: 8%;
  padding-bottom: (48 / 16rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    'a c'
    'b c';
  .l {
    grid-area: a;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: (490 / 16rem);
    .t {
      display: flex;
      align-items: center;
      .logo {
        // 96
        width: (96 / 16rem);
        margin-right: (14 / 16rem);
      }
      font-size: (48 / 16rem);
      font-weight: 700;
    }
    .text {
      margin: (36 / 16rem) 0;
      font-family: Roboto;
      font-size: (24 / 16rem);
      font-weight: 500;
      color: #ffffffd0;
    }
    .icons {
      display: flex;
      align-items: center;
      .icon {
        margin-right: (44 / 16rem);
        font-size: (40 / 16rem);
      }
    }
  }
  .r {
    grid-area: c;
    // flex: 1;
    display: flex;

    .menu-item {
      margin-left: (60 / 16rem);
      font-size: (24 / 16rem);
      font-weight: 500;
      line-height: 29.26px;
      .t {
        margin-bottom: (48 / 16rem);
        font-weight: 700;
      }
      .b {
        opacity: 0.8;
        margin-top: (28 / 16rem);
      }
    }
    .menu-item:nth-child(1) {
      margin-left: 0;
    }
  }
  .c {
    grid-area: b;
    text-align: left;
    font-size: (20 / 16rem);
    font-weight: 600;
    margin-top: (40 / 16rem);
    span {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
.wl-footer {
  border-top: 1px solid #d9d9d9;
  padding-top: (24 / 16rem);
  font-size: (20 / 16rem);
  font-weight: 700;
  line-height: (24 / 16rem);
  padding-bottom: 9%;
}
@media @max768 {
  .wl-header {
    flex-direction: column;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      'a '
      'c '
      'b ';
    .l {
      margin-right: 0;
      text-align: center;
      width: (350 / 3.9vw);
      .t {
        justify-content: center;
        width: 100%;
        .logo {
          width: (60 / 3.9vw);
          height: (60 / 3.9vw);
        }
        font-size: (24 / 3.9vw);
      }
      .text {
        width: 100%;
        font-size: (14 / 3.9vw);
        font-weight: 600;
        // text-align: center;
      }
      .icons {
        width: 100%;
        justify-content: space-around;
        .icon {
          margin-right: 0;
          font-size: (40 / 3.9vw);
        }
      }
    }
    .r {
      justify-content: space-around;
      width: 100%;

      .menu-item {
        font-size: (14 / 3.9vw);
        line-height: (19 / 3.9vw);
        margin-left: 0;
        .t {
          font-size: (16 / 3.9vw);
          margin-bottom: (20 / 3.9vw);
          margin-top: (60 / 3.9vw);
        }
      }
    }
    .c {
      grid-area: b;
      font-size: (10 / 3.9vw);
      span {
        cursor: auto;
      }
    }
  }
  .wl-footer {
    padding-top: (24 / 3.9vw);
    font-size: (10 / 3.9vw);
    font-weight: 700;
    line-height: (12 / 3.9vw);
    padding-bottom: 9%;
  }
}
</style>
