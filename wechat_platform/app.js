//导入包
const express=require("express")
const xml2js=require("xml2js")
//创建路由
const app=express()
//xml to js Object
const parser=new xml2js.Parser({explicitArray:false})
//js Object to xml
//根据微信的要求，去掉文档声明，根节点改为xml，添加cdata
const builder = new xml2js.Builder({ rootName: "xml", cdata: true, headless: true });
//监听
app.get("/",(req,res)=>{
    res.send(req.query.echostr)//公众号验证
})
//启动服务器
app.listen(8888,"127.0.0.1",()=>{
    console.log("已运行http://huainian.free.idcfengye.com");
    
})
app.post("/",(req,res)=>{
    var bufferlist=[];
    req.on("data",(chunk)=>{
        bufferlist.push(chunk)
    })
    req.on("end",()=>{
        var result=Buffer.concat(bufferlist)
        
        parser.parseString(result.toString("utf-8"),(err,result)=>{
            if(result.xml.Content=="你的生日是何时") {
                var reqMsg={
                    ToUserName:result.xml.FromUserName,
                    FromUserName:result.xml.ToUserName,
                    CreateTime:+new Date(),//要求为整型
                    MsgType:"text",
                    Content: "1994.12.17  :)"

                }
                res.send(builder.buildObject(reqMsg))
            }
            
        })
        
    })

    
    
})

