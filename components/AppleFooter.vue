<template>
  <footer>
    <div class="gf-content">
      <!-- nav S -->
      <nav class="apple-footer-service-list">
        <ul class="section-state-services">
          <li
            v-for="(item, index) in serviceList"
            :key="index"
            class="service-block"
          >
            <label for="">{{ item.serviceLabel }}</label>
            <ul class="section-list">
              <li
                v-for="(service, idx) in item.data"
                :key="idx"
                class="service-item"
              >
                {{ service.name }}
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- nav E -->

      <!-- copyright S -->
      <section class="section-footer">
        <div class="footer-shop">
          更多选购方式：
          <a href="https://locate.apple.com/cn/zh/"
            >查找你附近的 Apple Store 零售店</a
          >
          或者致电 400-666-8800。
        </div>
        <div class="copyright">
          Copyright © 2022 Apple Inc. 保留所有权利. &nbsp;
          <span>隐私政策 | 使用条款 | 销售政策 | 法律信息 | 网站地图</span>
        </div>
        <p style="margin-bottom: 20px; color: #666; font-size: 12px">
          <a
            href="http://beian.miit.gov.cn/"
            target="_blank"
            style="color: #666"
            onclick='s_objectID="http://beian.miit.gov.cn/_1";return this.s_oc?this.s_oc(e):true'
            >京ICP备10214630号</a
          >&nbsp;<a style="color: #666" href="/businesslicense/">营业执照</a
          >&nbsp;<span class="nowrap"
            >无线电发射设备销售备案编号11201910351200</span
          >
        </p>
      </section>
      <!-- copyright E -->
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppleFooter',
  data() {
    return {
      serviceList: [], // footer - nav数据列表
    }
  },
  created() {
    this.getServiceLists()
  },
  methods: {
    getServiceLists() {
      this.serviceList = [
        {
          serviceLabel: '选购及了解',
          data: [
            {
              name: '商店',
              _link: '',
            },
            {
              name: 'Mac',
              _link: '',
            },
            {
              name: 'iPad',
              _link: '',
            },
            {
              name: 'iPhone',
              _link: '',
            },
            {
              name: 'Watch',
              _link: '',
            },
            {
              name: 'AirPods',
              _link: '',
            },
            {
              name: '家居',
              _link: '',
            },
            {
              name: 'AirTag',
              _link: '',
            },
            {
              name: '配件',
              _link: '',
            },
            {
              name: 'App Store 充值卡',
              _link: '',
            },
          ],
        },
        {
          serviceLabel: '服务',
          data: [
            {
              name: 'Apple Music',
              _link: '',
            },
            {
              name: 'iCloud',
              _link: '',
            },
            {
              name: 'Apple Pay',
              _link: '',
            },
            {
              name: 'Apple 播客',
              _link: '',
            },
            {
              name: 'App Store',
              _link: '',
            },
          ],
        },
        {
          serviceLabel: 'Apple Store 商店',
          data: [
            {
              name: '查找零售店',
              _link: '',
            },
            {
              name: 'Genius Bar 天才吧',
              _link: '',
            },
            {
              name: 'Today at Apple',
              _link: '',
            },
            {
              name: 'Apple 夏令营',
              _link: '',
            },
            {
              name: 'Apple Store App',
              _link: '',
            },
            {
              name: '翻新和优惠',
              _link: '',
            },
            {
              name: '分期付款',
              _link: '',
            },
            {
              name: 'Apple Trade In 换购计划',
              _link: '',
            },
            {
              name: '订单状态',
              _link: '',
            },
            {
              name: '选购帮助',
              _link: '',
            },
          ],
        },
        {
          serviceLabel: '商务应用',
          data: [
            {
              name: 'Apple 与商务',
              _link: '',
            },
            {
              name: '商务选购',
              _link: '',
            },
          ],
        },
        {
          serviceLabel: '教育应用',
          data: [
            {
              name: 'Apple 与教育',
              _link: '',
            },
            {
              name: '高校师生选购',
              _link: '',
            },
          ],
        },
        {
          serviceLabel: 'Apple 价值观',
          data: [
            {
              name: '辅助功能',
              _link: '',
            },
            {
              name: '教育',
              _link: '',
            },
            {
              name: '环境责任',
              _link: '',
            },
            {
              name: '隐私',
              _link: '',
            },
            {
              name: '供应商责任',
              _link: '',
            },
          ],
        },
      ]
    },
  },
}
</script>

<style lang="less" scoped>
@import '~~/assets/css/apple/apple-footer.less';
</style>
