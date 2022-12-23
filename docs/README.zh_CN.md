![](../static/logo.svg)

# nuxt2-ssr-app

[English](../README.md) | 中文

## 简介

项目开发中有一些场景需要 SSR，如需要 SEO 的官网、对性能要求更高的商城类和活动页面等。因此学习下 Nuxt，顺便做个 demo。

本项目是基于 Nuxt2 仿照 [Apple 中国](https://www.apple.com.cn/) 的学习项目。苹果中国兼具官网和商城 2 种场景，并且 UI 风格和交互均为顶级，所以选择作为学习项目。

## 构建设置

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

更多详细信息请看 [官网](https://www.nuxtjs.cn/).

## 目录结构

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

## 项目效果

### 首页效果

![](../assets/image/apple/apple_home.gif)

## 开发指引

[开发指引](./Guide.zh-CN.md)
