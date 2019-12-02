const path=require("path")
const htmlWebpackPlugin=require("html-webpack-plugin")

const pluginOBJ=new htmlWebpackPlugin({
    template:path.join(__dirname,"./src/index.html"),//源文件名
    filename:"index.html"//新文件名
})
module.exports={
    mode:"production",
    plugins:[pluginOBJ]
}