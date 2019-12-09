### babel-loader

作用：高级语法转换

安装：

+ `npm i babel-core babel-loader babel-plugin-transform-runtime -D`

+ `npm i babel-preset-env babel-preset-stage-0 -D`

webpack.config.js的配置

~~~js
module={
    rules:[
        { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }// 别忘记添加 exclude 排除项
    ]
}
~~~

项目根目录添加 `.babelrc` 配置文件

~~~js
{
  "presets": ["env", "stage-0", "react"],
  "plugins": ["transform-runtime"]
}
~~~



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

作用：打包处理 字体文件 

安装：`npm i url-loader -D` 

依赖的loader： `file-loader`

webpack.config.js的配置

~~~js
module={
    rules:[
      { test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader' }
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

