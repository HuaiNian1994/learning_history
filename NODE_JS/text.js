console.log(this);

var xiaohong={
    name:'xiaohong',
    speak:()=>{
        console.log(this);
        
    },
    speak2:function(){
        (()=>{
            console.log(this.name);
            
        })()
    }
}
xiaohong.speak();
xiaohong.speak2();