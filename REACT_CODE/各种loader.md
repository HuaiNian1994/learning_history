### babel-loader

作用：高级语法转换

安装：

- 运行`npm i @babel/core babel-loader @babel/runtime  -D`
- 支持所有最新的ES标准特性`npm i @babel/preset-env  -D`

- 项目根目录添加 `.babelrc` 配置文件

  ```json
  {
    "presets": ["@babel/preset-env"]
  }
  ```

- 在webpack.config.js中的向外暴露的对象内设定babel-loader配置项：

  ```js
     module: { //要打包的第三方模块
         rules: [//设定打包规则
           { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
         ]
     }
  ```







### style-loader css-loader

作用：打包处理 CSS 样式表的第三方loader

安装：`npm i style-loader css-loader -D` 

webpack.config.js的配置

~~~js
module={
    rules:[
       { test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
}
~~~



### url-loader 

作用：打包处理字体文件和图片文件

安装：`npm i url-loader -D` 

依赖的loader： `file-loader`

webpack.config.js的配置

~~~js
module={
    rules:[
      { test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader' },
      { test: /\.jpg|png|gif|bmp$/, use: 'url-loader' },
        
    ]
}
~~~



### sass-loader 

作用：打包处理 CSS 样式表的第三方loader

安装：`npm i sass-loader node-sass -D` 

依赖的loader：`style-loader` ，`css-loader`

webpack.config.js的配置

~~~js
module={
    rules:[
       { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'sass-loader'] }
    ]
}
~~~



### 

