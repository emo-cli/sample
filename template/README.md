# sample 示例

> 技术栈：Vue 2、Vue Router、Vuex、rem适配的配置（ flexible & postcss-pxtorem ）、EZM CLI

## 该示例示范了如何引用和使用"易动"框架，包含如下功能：
- 框架引入
- 基于 vue-router 的单页面应用
- 监听框架准备完毕 `deviceready` 事件
- 基于 vuex 全局管理 `deviceready` 状态

## 目录结构说明

- public
    - index.html (框架引入；rem适配的部分配置【viewport】)
- src
    - src (资源文件夹)
    - ezm
        - index.js (监听`deviceready`事件，并在事件触发成功后通过 vuex 修改`deviceready`状态值)  
    - router: 页面路由
    - store: vuex
    - views: 页面
    - main.js (引入`flexible`【 rem 适配，自动修改根字体值】等)    
- vue.config.js (配置 `postcss-pxtorem` )
