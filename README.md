# 1.react脚手架创建项目
```
// https://dvajs.com/guide/getting-started.html#%E5%AE%89%E8%A3%85-dva-cli
npm install dva-cli -g
dva new dva-quickstart

// https://umijs.org/zh-CN/docs/getting-started#%E8%84%9A%E6%89%8B%E6%9E%B6
npm i yarn tyarn -g
mkdir myapp && cd myapp
yarn create @umijs/umi-app

// https://www.html.cn/create-react-app/docs/getting-started/
npx create-react-app myapp
```

# 2.抽离配置文件
--- 如果需要修改配置文件，那么可以操作此步骤
> cnpm run eject

配置一个@，指向src目录, webpack.config.js -> resolve -> alias
```
'@': path.join(__dirname, '../', 'src')
```

如果需要使用 scss  那么先安装  node-sass
> cnpm i node-sass -S

# 3.修改src目录结构，将App.js组件移入布局文件
**入口找布局，布局找页面，页面找组件**

# 4.layouts/App.jsx 确定项目的结构

# 5.抽离页面

# 6.入口文件处配置路由
> cnpm i react-router-dom

# 7.App.jsx中设置路由

# 8.使用 redux + react-redux + redux-thunk 设计页面
> cnpm i redux react-redux redux-thunk -S

## 8.1 创建状态管理器
redux

redux + react-redux

redux + redux-thunk

redux + react-redux + redux-thunk (redux-saga / redux-promise)

mobx + mobx-react
## 8.2 入口改配置

## 8.3 页面组件 --  UI组件 以及 容器组件

## 8.4 创建页面的状态管理器

## 8.5 整合至项目状态管理器

## 8.6 页面的容器组件获取状态 mapStateToProps

## 8.7 页面的容器组件提供数据请求的函数 mapDispatchToProps

## 8.8 创建页面中请求数据的action，用户异步操作

# 9.使用ui组件库渲染数据
> cnpm install antd-mobile --save
> cnpm i babel-plugin-import -D

配置在 package.json 文件中  ---   重启服务器

# 10.自定义列表组件

# 11.创建详情的组件

# 12.入口配置详情路由

# 13.列表进入详情

## 声明式跳转

## 编程式跳转（问题：如果组件没有 history ）

this.props.history.push()

* 父组件传递 history

* withRouter
