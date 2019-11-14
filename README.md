# devweb

这是一个vue多页面的项目，主要技术栈为webpack + vue全家桶 + sass + es6

## 开始todo

1. 安装依赖
```
    npm i 
```

2.文件目录
```
├─build
│      dev-server.js         // 使用webpack-dev-server搭建的本地服务器
│      utils.js   			 
│      webpack.config.js 	// webpack配置文件
│      
├─mock
│  │  api.js 			// 通过webpack-api-mocker插件使用本地数据进行模拟请求
│  │  
│  └─data
│          manage.json 	// 本地模拟数据
│          weather.json
│          
└─src
    ├─asset
    │  │  base.css
    │  │  
    │  └─images
    ├─page
    │  └─manage
    │      │  App.vue 	  // 最外层父级组件
    │      │  index.html  // 组件模版
    │      │  main.js     // webpack打包入口文件
    │      │  
    │      ├─components
    │      │  └─home
    │      │      │  home.css
    │      │      │  home.vue // 子组件的容器组件
    │      │      │  
    │      │      ├─dataview
    │      │      │      dataview.vue  // 子组件中的组件
    │      │      │      
    │      │      ├─formlist
    │      │      │      formlist.vue
    │      │      │      
    │      │      └─menu
    │      │              menu.vue
    │      │              
    │      └─router
    │              index.js
    │              
    ├─store   // 状态管理器
    │  │  index.js
    │  │  
    │  └─module
    │          test.js
    │          
    └─utils  // 一些常用的工具方法
            index.js
```
3.mock与联调数据
```
通过package.json文件中的devmock和devproxy命令去模拟数据或联调后端接口
```