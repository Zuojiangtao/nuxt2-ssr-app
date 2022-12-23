<template>
  <div>
    <!-- content S -->
    <div class="main">
      <!-- section-ribbon -->
      <section class="homepage-section" data-analytics-region="ribbon">
        <div id="shop-online" class="module-content">
          <div class="section-content-shop-online">
            <div class="ribbon-shop-online">
              <span class="covid-ribbon-copy">
                把握良机，为亲朋好友挑选压轴好礼。
              </span>
              <a href="https://www.apple.com.cn/shop/gifts">
                节日好礼精选这边来 >
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- section-heroes -->
      <section class="homepage-section" data-analytics-region="heroes">
        <!-- iphone-14 -->
        <div id="iphone-14" class="module-content">
          <div class="unit-wrapper">
            <a class="unit-link" href="https://www.apple.com.cn/iphone-14/"></a>
            <div class="unit-copy-wrapper">
              <h2 class="headline">iPhone 14</h2>
              <h3 class="subhead">玩大玩超大</h3>
              <div class="cta-links">
                <a href="https://www.apple.com.cn/iphone-14/">进一步了解 ></a>
                <a
                  style="margin-left: 35px"
                  href="https://www.apple.com.cn/shop/buy-iphone/iphone-14"
                >
                  购买 ></a
                >
              </div>
            </div>
            <div class="unit-image-wrapper">
              <figure
                class="unit-image unit-image-iphone-14-hero-iphone14"
              ></figure>
            </div>
          </div>
        </div>

        <!-- holiday-2022 -->
        <div id="holiday-2022" class="module-content">
          <div class="unit-wrapper theme-dark">
            <a class="unit-link" href="https://www.apple.com.cn/shop/gifts"></a>
            <div class="unit-copy-wrapper">
              <h2 class="headline">
                送个心花怒放， <br />
                时机别放过。
              </h2>
              <h3 class="subhead">
                抓住时机挑选压轴好礼，让你的心意久久难忘。
              </h3>
              <div class="cta-links">
                <a
                  style="margin-left: 35px"
                  href="https://www.apple.com.cn/shop/gifts"
                >
                  节日好礼精选这边来 ></a
                >
              </div>
            </div>
            <div class="unit-image-wrapper">
              <video
                id="promo-video"
                autoplay
                muted
                aria-hidden="true"
                src="https://www.apple.com.cn/105/media/us/home/2022/85449b20-a1fc-4234-ab63-32e595b20f2a/anim/memoji-1/largetall_2x.mp4"
              ></video>
              <!--              <figure-->
              <!--                class="inline-video-frame-start unit-image-start-frame"-->
              <!--              ></figure>-->
              <!--              <figure-->
              <!--                class="inline-video-frame-end unit-image-end-frame"-->
              <!--              ></figure>-->
            </div>
          </div>
        </div>

        <!-- ipad-pro -->
        <div id="ipad-pro" class="module-content">
          <div class="unit-wrapper theme-dark">
            <a class="unit-link" href="https://www.apple.com.cn/ipad-pro/"></a>
            <div class="unit-copy-wrapper">
              <h2 class="headline">iPad Pro</h2>
              <h3 class="subhead">
                由 M2 强势驱动
                <span class="logo logo-image-ipad-pro-hero-m2-chip"></span>
              </h3>
              <div class="cta-links">
                <a href="https://www.apple.com.cn/ipad-pro/">进一步了解 ></a>
                <a
                  style="margin-left: 35px"
                  href="https://www.apple.com.cn/ipad-pro/"
                >
                  购买 ></a
                >
              </div>
            </div>
            <div class="unit-image-wrapper">
              <figure
                class="unit-image unit-image-ipad-pro-hero-ipadpro-order"
              ></figure>
            </div>
          </div>
        </div>
      </section>

      <!-- section-promos -->
      <section class="homepage-section" data-analytics-region="promo">
        <div v-for="item in promosList" :key="item.id" class="module-content">
          <div
            class="unit-wrapper"
            :class="item.isDarkMode ? 'theme-dark' : ''"
          >
            <a :href="item.path" class="unit-link"></a>
            <div class="unit-copy-wrapper">
              <h2 class="headline">{{ item.title }}</h2>
              <h3 class="subhead">{{ item.subTitle }}</h3>
              <div class="cta-links">
                <a :href="item.path">进一步了解 ></a>
                <a style="margin-left: 35px" :href="item.path">购买 ></a>
              </div>
            </div>
            <div class="unit-image-wrapper">
              <figure
                class="unit-image"
                :class="`unit-image-${item.dynamicClassName}`"
              ></figure>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- content E -->
  </div>
</template>

<script>
export default {
  name: 'Apple',
  data() {
    return {
      promosList: [], // 产品列表数据
    }
  },
  created() {
    this.getProductData()
  },
  methods: {
    // 获取产品数据
    getProductData() {
      this.promosList = [
        {
          title: 'iPhone 14 Pro',
          subTitle: '强力出圈',
          path: 'https://www.apple.com.cn/iphone-14-pro/',
          dynamicClassName: 'iphone-14-pro-promo-iphone14pro',
          isDarkMode: true,
        },
        {
          title: 'iPad',
          subTitle: '可圈可点可画心',
          path: 'https://www.apple.com.cn/ipad-10.9/',
          dynamicClassName: 'ipad-promo-ipad',
          isDarkMode: false,
        },
        {
          title: 'AirPods Pro',
          subTitle: '重塑新声',
          path: 'https://www.apple.com.cn/iphone-14-pro/',
          dynamicClassName: 'airpods-pro-promo-airpods-pro-avail',
          isDarkMode: true,
        },
        {
          title: 'Apple Watch Series 8',
          subTitle: '健康的一大步',
          path: 'https://www.apple.com.cn/apple-watch-series-8/',
          dynamicClassName: 'apple-watch-series-8-promo-apple-watch-series-8',
          isDarkMode: true,
        },
        {
          title: 'Apple Watch Ultra',
          subTitle: '越野越心驰',
          path: 'https://www.apple.com.cn/apple-watch-ultra/',
          dynamicClassName: 'apple-watch-ultra-promo-apple-watch-ultra',
          isDarkMode: false,
        },
        {
          title: 'HomePod mini',
          subTitle: '',
          path: 'https://www.apple.com.cn/homepod-mini/',
          dynamicClassName: 'homepod-mini-tile-homepod-mini',
          isDarkMode: false,
        },
      ]
    },
  },
}
</script>

<style lang="less" scoped>
@import '~/assets/css/apple/apple-home.less';
</style>
