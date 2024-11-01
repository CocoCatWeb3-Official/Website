<script setup>
</script>

<template>
  <div class="home" >
    <HomeBox1></HomeBox1>
    <HomeBox2></HomeBox2>
    <HomeBox3></HomeBox3>
    <HomeBox4></HomeBox4>
    <HomeBox5></HomeBox5>
    <HomeBox6></HomeBox6>
  </div>
</template>

<style lang="less">
@import '@/assets/style/base';
@rban: (800 / 16rem);
.home {
  // background-repeat: no-repeat;
  // background-image: url('@/assets/images/home/bg1.png'),
  //   url('@/assets/images/home/bg2.png');
  // background-size: (950 / 16rem) (950 / 16rem), (851 / 16rem) (851 / 16rem);
  // background-position: calc(50% - @rban) (370 / 16rem),
  //   calc(50% + @rban) (1750 / 16rem);

  .home-title {
    font-family: Montserrat;
    font-size: (108 / 16rem);
    font-weight: 700;
    line-height: (162 / 16rem);
  }
  .home-subTitle {
    font-family: Roboto;
    font-size: (24 / 16rem);
    font-weight: 400;
    line-height: (48 / 16rem);
    color: #999;
  }
}

@media @max768 {
  .home {
    overflow: hidden;
    // background-repeat: no-repeat;
    // background-image: url('@/assets/images/home/bg1.png'),
    //   url('@/assets/images/home/bg2.png');
    // background-size: (314 / 3.9vw) (650 / 3.9vw), (360 / 3.9vw) (651 / 3.9vw);
    // background-position: left (200 / 3.9vw), right (1400 / 3.9vw);
    .home-title {
      font-size: (24 / 3.9vw);
      line-height: (36 / 3.9vw);
    }
    .home-subTitle {
      font-family: Roboto;
      font-size: (14 / 3.9vw);
      line-height: (20 / 3.9vw);
    }
  }
}
</style>
