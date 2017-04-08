# TODO


## 简介
Vue版本Todo [React版本](https://github.com/huangzenghui/todos)
使用语言：es6  
后台：koa2 + graphql + mongodb + gulp (ps:mongodb host:localhost, port: 27017) 
前端：Vue + Vuex + cssnext + webpack2

---

## 基本命令
- 开发环境执行编译： npm run dev
- 生产环境执行编译： npm run prod
- 测试： npm run tests
- 启动服务： npm start

---
## 项目结构

```
todosVue           # 项目根目录
├── build         # 目标目录
├── config        # webpack配置目录
├── node_modules
├── src/             # 源码目录
    ├── app         #  前端源码
        ├── api     # 请求后台graphql接口 
        ├── components  # 组件
        ├── config # 前端配置文件
        ├── store  
            ├── index.js          # 组装模块并导出 store 的地方
            ├── actions.js        # 根级别的 action
            ├── mutations.js      # 根级别的 mutation
            └── modules           # 分模块store
                └── todos.js      # todos模块，包含todos模块的state、muations、actions、getters
        ├── index.html
        └── main.js
    └── server      #  后台源码
        ├── config  #  后台基本配置
        ├── controller # 路由 
        ├── data  # graphql目录，schema定义和resolver
        ├── models  # model定义
        └── app.js 
├── test          # 测试文件目录
├── gulpfile.js
├── karma.conf.js
├── package.json
├── postcss.config.js
└── wepback.config.js
```

## 单元测试

vue版本增加了karma+karma-webpack，在phantomjs运行测试。  
需要注意的点：  
1. es6语法需要在karma.conf.js中加上polyfill

```
files: [
  'node_modules/babel-polyfill/dist/polyfill.js',
  ...
],
```

2. 记得把你所有测试相关文件配置到karma配置文件中的files去，可以使用正则

3. 测试webpack配置文件中，plugins中不能使用webpack.optimize.CommonsChunkPlugin，[原因](http://vue-loader.vuejs.org/en/workflow/testing.html)

