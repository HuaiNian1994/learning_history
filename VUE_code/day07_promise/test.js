const fs=require("fs");
const path=require("path")
function fpath(arr) {
    return path.join(__dirname,arr)
}
function myFileReader(arr) {
    //若一个构造函数的参数是函数，那么后者会在前者被调用时立刻执行
   return myPromise=new Promise((resolve,reject)=>{
    fs.readFile(fpath(arr),"utf-8",(err,data)=>{
        if (err) reject(err);
        else resolve(data)
    });
});
}
//then的参数只能是匿名函数
myFileReader("./11.txt").then((data)=>{
    console.log(data);
    return myFileReader("./22.txt")
},(err)=>{
    console.log(err);
    
    return myFileReader("./22.txt")
}).then((data)=>{
    console.log(data);
    return myFileReader("./03.txt")
},(err)=>{
    console.log(err);
    return myFileReader("./03.txt")
}).then((data)=>{
    console.log(data);
 
},(err)=>{
    console.log(err);
})