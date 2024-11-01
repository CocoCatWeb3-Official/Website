<script setup>
import item1Img from '@/assets/images/home/box6/item1.png';
import downImg from '@/assets/images/home/box6/down.png';
const router = useRouter();
import { ref } from 'vue';

const goPath = (item) => {
  router.push(item.path);
};
const actID = ref(0);
const changeHight = () => {
  var els = document.getElementsByClassName('faq-q');
  for (let i = 0; i < els.length; i++) {
    els[i].style.height = 0;
  }
  if (actID.value == 0) {
    return;
  }
  els[actID.value - 1].style.height = els[actID.value - 1].scrollHeight + 'px';
  // scrollToSection();
  let offset = 60; 

  const element = document.getElementById('box6');
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top +
      window.pageYOffset +
      (actID.value - 1) * 100;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
  }
};

const faqList = ref([
  {
    id: 1,
    f: 'What is Cococat‘s mission？',
    q: 'CocoCat.io aims to spread and promote the development of the CocoCat Network, which, through the CocoApp Framework and self-service protocol, provides a complete infrastructure for the deployment and distribution of large-scale Web3 applications. Building Web3 applications with a Web3 mindset, everything starts from CocoCat.io.',
    img: item1Img,
  },
  {
    id: 2,
    f: 'What is a DePIN and how does CocoCat.io fit?',
    q: 'DePIN, short for Decentralized Physical Infrastructure Network, operates through the expansion of physical devices and uses economic incentives based on blockchain assets to provide a runtime environment for large-scale Web3 applications. CocoCat, through its underlying P2P network (CocoCat Network), offers a completely decentralized Web3 application framework (CocoApp) and the capability for backend services to be node-based (self-service protocol). It enables access and calling through peer-to-peer messaging, with no need for domain names or links. This saves on cloud server costs while also guarding against phishing and DDoS attacks.',
    img: item1Img,
  },
  {
    id: 3,
    f: 'What are CocoCat‘s main features？',
    q: `There are 3 main features of CocoCat:`,
    img: item1Img,
    children: [
      {
        t: '1. High-performance, secure P2P communication system',
        b: [
          '- Identity Privacy: Authentication without account logins or wallet connections.',
          '- Data Privacy: Asymmetric encryption ensures data decryption by rightful owners.',
          '- Relationship Privacy: Secretly established private channels ensure secure communications.',
        ],
      },
      {
        t: '2. Peer-to-peer "friend" trust system',
        b: [
          '- Facilitates trusted communication across devices or applications via private channels in the CAT network.',
        ],
      },
      {
        t: '3. Borderless network application system',
        b: [
          '- Serverless Deployment: Removes reliance on traditional servers, with applications broadcasting directly on the CAT network.',
          '- BTC Address as Application: Uses BTC addresses for direct application access, replacing conventional domains.',
          '- Global Barrier-Free Access: Provides instant, delay-free access worldwide, overcoming geographic limitations.',
        ],
      },
    ],
  },
  {
    id: 4,
    f: 'How can I run a normal CocoCat Nodes？',
    q: `Step1: Download CocoCat from Apple Store or Google Play 
<br/>
Step2: Open CocoCat`,
    img: item1Img,
  },
  {
    id: 5,
    f: 'What is CocoApp？',
    q: 'The CocoApp framework, part of the CocoCat infrastructure, uses BTC addresses to streamline user experience, replacing traditional domain names or IPs. Developers can directly broadcast applications on the CAT network, bypassing conventional cloud services. This approach lowers entry barriers and boosts application decentralization, providing more freedom and flexibility for developers and users',
    img: item1Img,
  },
]);
const actItem = (id) => {
  if (actID.value != id) {
    actID.value = id;
  } else {
    actID.value = 0;
  }
};
const scrollToSection = (id) => {
  let offset = 60;
  if (window.innerWidth > 700) {
    offset = 0;
  }

  const element = document.getElementById(id);
  //  + window.pageYOffset
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
  }
};
onMounted(() => {
  changeHight();
});
watch(
  () => [actID.value],
  () => {
    changeHight();
  }
);
</script>

<template>
  <div id="box6">
    <div class="w">
      <div class="box">
        <div class="title-box">
          <div class="home-title" @click="changeHight()" v-aos="'fade-up'">
            FAQ
          </div>
          <div class="home-subTitle" v-aos="'fade-up'" v-if="false">
            In the digital realm, "Node Distribution" stands as the cornerstone
            of constructing.
          </div>
        </div>
        <div class="faqList">
          <div
            class="faq-item"
            v-aos="'fade-up'"
            v-for="(item, index) in faqList"
            :key="index"
          >
            <BaseLink>
              <div class="title flex" @click="actItem(item.id)">
                <div class="l">{{ `${item.f}` }}</div>
                <div class="r">
                  <img
                    class="type2"
                    v-if="actID == item.id"
                    :src="downImg"
                    alt="Down"
                  />
                  <svg
                    v-else
                    t="1713492575007"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="8198"
                    width="64"
                    height="64"
                  >
                    <path
                      d="M924.549 337.707c-22.553-53.321-54.833-101.202-95.943-142.312-41.11-41.11-88.991-73.39-142.313-95.943-55.221-23.357-113.861-35.2-174.293-35.2S392.928 76.095 337.707 99.451c-53.321 22.553-101.202 54.833-142.312 95.943-41.11 41.11-73.39 88.991-95.943 142.312-23.357 55.222-35.2 113.862-35.2 174.294s11.843 119.072 35.199 174.293c22.553 53.321 54.833 101.202 95.943 142.313 41.11 41.11 88.991 73.391 142.312 95.943 55.221 23.356 113.862 35.199 174.293 35.199s119.072-11.843 174.293-35.199c53.321-22.553 101.202-54.833 142.313-95.943s73.391-88.991 95.943-142.313c23.356-55.221 35.199-113.861 35.199-174.293s-11.842-119.072-35.198-174.293zM512 896.252c-211.877 0-384.252-172.375-384.252-384.252S300.123 127.748 512 127.748 896.252 300.123 896.252 512 723.877 896.252 512 896.252z"
                      p-id="8199"
                    ></path>
                    <path
                      d="M740 480H544V284c0-15.464-14.327-28-32-28s-32 12.536-32 28v196H284c-15.464 0-28 14.327-28 32s12.536 32 28 32h196v196c0 15.464 14.327 28 32 28s32-12.536 32-28V544h196c15.464 0 28-14.327 28-32s-12.536-32-28-32z"
                      p-id="8200"
                    ></path>
                  </svg>
                </div>
              </div>
            </BaseLink>
            <div
              class="faq-q home-subTitle"
              :class="{ actFAQ: item.id == actID }"
            >
              <div class="q" v-html="item.q"></div>
              <div class="q">
                <div v-for="(it, index) in item.children" :key="index">
                  <div class="q-t">{{ it.t }}</div>
                  <div class="q-p" v-for="(ite, index) in it.b" :key="index">
                    {{ ite }}
                  </div>
                </div>
              </div>
              <!-- <img :src="item.img" :alt="item.f" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/style/base';
.w {
  max-width: (1370 / 16rem);
}
.box {
  margin-top: (50 / 16rem);
  .title-box {
    text-align: center;
    .home-subTitle {
      margin-top: (12 / 16rem);
      margin-bottom: (124 / 16rem);
    }
  }
  .faqList {
    text-align: left;
    max-width: (1370 / 16rem);
    .faq-item {
      .title {
        font-family: Roboto;
        font-size: (32 / 16rem);
        font-weight: 500;
        line-height: (48 / 16rem);
        padding: (36 / 16rem) 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: (1 / 16rem) solid;
        border-image: linear-gradient(
            90deg,
            #8ebbfe 0%,
            rgba(3, 106, 230, 0) 100%
          )
          1;
        letter-spacing: -1px; 

        .r {
          background-clip: text;
          width: (36 / 16rem);
          height: (36 / 16rem);
          svg,
          img {
            width: 100%;
            height: 100%;

            fill: currentColor;
          }

          .open1 {
            display: none;
          }
        }
      }
      // .title:hover {
      //   color: #8ebbfe;
      // }
      .faq-q {
        height: 0;
        opacity: 0;
        overflow: hidden;
        transition: 1s;
        padding: (20 / 16rem) 0;
        img {
          // height: ( 200 / 16rem);
          width: 100%;
          margin: (48 / 16rem) 0;
        }
        .q-p {
          padding-left: (20 / 16rem);
        }
      }
      .actFAQ {
        // height: auto;
        opacity: 1;
      }
    }
  }
}

@media @max768 {
  .w {
    width: 100%;
  }
  .box {
    .title-box {
      text-align: left;
      .home-subTitle {
        margin-top: (10 / 3.9vw);
        margin-bottom: (50 / 3.9vw);
      }
    }
    .faqList {
      width: 100%;
      .faq-item {
        .title {
          font-size: (18 / 3.9vw);
          line-height: (30 / 3.9vw);
          align-items: flex-start;
          padding: (20 / 3.9vw) 0;
          // align-items: stretch;
          .r {
            flex: 0 0 auto;
            width: (24 / 3.9vw);
            height: (24 / 3.9vw);
            margin-left: (10 / 3.9vw);
          }
        }
      }
      .faq-q {
        font-size: (14 / 3.9vw);
        font-weight: 400;
        line-height: (30 / 3.9vw);
        padding: (10 / 3.9vw) 0;
        img {
          margin: (20 / 3.9vw) 0;
        }
        .q-p {
          padding-left: (15 / 3.9vw);
        }
      }
    }
  }
}
</style>
