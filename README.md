# nuxt2-ssr-app

English | [中文](./docs/README.zh_CN.md)

## Instruction

There are some scenarios in project development that require SSR, such as official websites that require SEO, malls and event pages that require higher performance, etc. So learn Nuxt and make a demo by the way.

This project is based on the learning project of [Apple China](https://www.apple.com.cn/) based on Nuxt2. Apple China has both the official website and the mall, and the UI style and interaction are top-notch, so I chose it as a learning project.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

```
├─.husky            // Git 提交规范文件
├─assets            // 存放静态资源（如：scss）
├─layouts           // 页面主要布局、自定义错误页面
├─components        // 页面组件
│ ├─business        // 业务组件
│ ├─common          // 公用组件
│
├─docs              // 文档说明
├─middleware        // 应用中间件（如：权限验证）
│
├─mixins            // 公用逻辑抽离（如：触底事件）
│
├─pages             // 页面视图
│
├─plugins           // 插件（如：axios、api）
│
├─server            // 服务端
│ ├─request         // 请求方法封装
│
├─store             // vuex
├─utils             // 工具方法
├─.editorconfig     // 编辑器相关设置
├─.eslintignore     // Eslint 配置忽略文件
├─.eslintrc.js      // Eslint 配置文件
├─.gitignore        // Git 忽略文件
├─.prettierignore   // prettier 忽略文件
├─.prettierrc       // prettier 配置文件
├─commitlint.config.js // Git 提交commit钩子类型设置
├─jsconfig.json     // JS 功能配置文件
├─package.json      // 包依赖文件
├─nuxt.config.js    // Nuxt.js应用配置
├─README.md         // README.md
├─stylelint.config.js  // stylelint配置
└─yarn.lock         // yarn锁定版本文件
```

## Project effect

### home page effect

![](./assets/image/apple/apple_home.gif)

## Guide

[Development Guide](./docs/Guide.md)
