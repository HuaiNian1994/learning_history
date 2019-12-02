//创建html-webpack-plugin插件
const path=require("path")
const htmlWebpackPlugin=require("html-webpack-plugin")

const pluginOBJ=new htmlWebpackPlugin({
    template:path.join(__dirname,"./src/index.html"),//源文件名
    filename:"index.html"//新文件名
})

module.exports={
    mode:"development",//设定webpack的工作模式
    plugins:[pluginOBJ],//添加插件到plugins数组中，用于暴露
    module: { //配置第三方模块
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }//babel-loader配置项
        ]
    }
}
