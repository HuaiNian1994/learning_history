const express=require("express");
const app=express();
app.use(express.static("./"));
app.get("./",(req,res)=>{
    res.sendFile("index.html");
})
app.listen(3000,'127.0.0.1',()=>{
    console.log("server running at http://127.0.0.1:3000");
});
