//步骤一：创建插件
const path=require("path")
const htmlWebpackPlugin=require("html-webpack-plugin")

const pluginOBJ=new htmlWebpackPlugin({
    template:path.join(__dirname,"./src/index.html"),//源文件名
    filename:"index.html"//新文件名
})

module.exports={
    mode:"development",//设定webpack的工作模式
    plugins:[pluginOBJ],//步骤二：添加插件到plugins数组中，用于暴露
    module: { //要打包的第三方模块
    rules: [//设定打包规则
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
}
}