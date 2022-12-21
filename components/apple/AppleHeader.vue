<template>
  <nav id="global-nav">
    <ul class="menu-list">
      <li class="menu-item">
        <span class="menu-link-text"><img :src="iconSrc" /></span>
      </li>
      <li v-for="(item, index) in navList" :key="index" class="menu-item">
        <span class="menu-link-text" @click="goAnchor(item.path)">
          {{ item.name }}
        </span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NuxtHeader',
  data() {
    return {
      navList: [], // nav列表数据
      iconSrc: require('~/assets/icon/apple_large.svg'),
    }
  },
  created() {
    this.navList = [
      {
        name: '商店',
        path: 'https://www.apple.com.cn/store',
      },
      {
        name: 'Mac',
        path: 'https://www.apple.com.cn/mac/',
      },
      {
        name: 'iPad',
        path: 'https://www.apple.com.cn/ipad/',
      },
      {
        name: 'iPhone',
        path: 'https://www.apple.com.cn/iphone/',
      },
      {
        name: 'Watch',
        path: 'https://www.apple.com.cn/watch/',
      },
      {
        name: 'AirPods',
        path: 'https://www.apple.com.cn/watch/',
      },
      {
        name: '家居',
        path: 'https://www.apple.com.cn/apple-home/',
      },
      {
        name: 'Apple 独家',
        path: 'https://www.apple.com.cn/services/',
      },
      {
        name: '配件',
        path: 'https://www.apple.com.cn/shop/accessories/all',
      },
      {
        name: '技术支持',
        path: 'https://support.apple.com/zh-cn',
      },
    ]
  },
  methods: {
    goAnchor(path) {
      window.location.href = path
    },
  },
}
</script>

<style lang="less" scoped>
@import '~/assets/css/apple/apple-header.less';
</style>
