## 指南

您可以创建以下额外目录，其中一些具有特殊行为。 只需要`pages`； 如果您不想使用它们的功能，可以删除它们。

### `assets`

资源目录 assets 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript, images, or fonts。

[关于 assets 目录的更多信息](https://www.nuxtjs.cn/guide/assets)。

### `components`

组件目录 components 用于组织应用的 Vue.js 组件。Nuxt.js 不会扩展增强该目录下 Vue.js 组件，即这些组件不会像页面组件那样有 asyncData 方法的特性。

[关于 components 目录的更多信息](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

布局目录 layouts 用于组织应用的布局组件。

若无额外配置，该目录不能被重命名。

[关于 布局 的更多信息](https://www.nuxtjs.cn/guide/views#%E5%B8%83%E5%B1%80).

### `middleware`

middleware 目录用于存放应用的中间件。

[关于 中间件 的更多信息](https://www.nuxtjs.cn/guide/routing#%E4%B8%AD%E9%97%B4%E4%BB%B6).

### 'pages'

页面目录 pages 用于组织应用的路由及视图。Nuxt.js 框架读取该目录下所有的 .vue 文件并自动生成对应的路由配置。

若无额外配置，该目录不能被重命名。

[关于 页面目录 的更多信息](https://www.nuxtjs.cn/guide/views)

### `plugins`

plugins 目录包含你想要在实例化根 Vue.js 应用程序之前运行的 JavaScript 插件。 这是添加 Vue 插件和注入函数或常量的地方。 每次需要使用 Vue.use() 时，都应该在 plugins/ 中创建一个文件，并将其路径添加到 nuxt.config.js 中的 plugins。

[关于 插件 的更多信息](https://www.nuxtjs.cn/guide/plugins).

### `static`

静态文件目录 static 用于存放应用的静态文件，此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下。

举个例子: /static/robots.txt 映射至 /robots.txt

若无额外配置，该目录不能被重命名。

[关于 静态文件目录 的更多信息](https://www.nuxtjs.cn/guide/assets#%E9%9D%99%E6%80%81%E6%96%87%E4%BB%B6).

### `store`

store 目录用于组织应用的 Vuex 状态树 文件。 Nuxt.js 框架集成了 Vuex 状态树 的相关功能配置，在 store 目录下创建一个 index.js 文件可激活这些配置。

[关于 store 的更多信息](https://www.nuxtjs.cn/guide/vuex-store).

### 'nuxt.config.js'

nuxt.config.js 文件用于组织 Nuxt.js 应用的个性化配置，以便覆盖默认配置。

若无额外配置，该文件不能被重命名。

[关于 nuxt.config.js 的更多信息](https://www.nuxtjs.cn/guide/configuration)

### 'package.json'

package.json 文件用于描述应用的依赖关系和对外暴露的脚本接口。

该文件不能被重命名。
