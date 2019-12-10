const C=React.createElement;
React.Component.prototype.dateFormat=function (){
    const now=new Date()
    const y=now.getFullYear()
    const m=(now.getMonth()+1).toString().padStart(2,"0")
    const d=now.getDate().toString().padStart(2,"0")
    const hh=now.getHours().toString().padStart(2,"0")
    const mm=now.getMinutes().toString().padStart(2,"0")
    const ss=now.getSeconds().toString().padStart(2,"0")
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
class A extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return C("div",{},this.dateFormat())
    }
}
ReactDOM.render(C(A),document.getElementById("root1"))




