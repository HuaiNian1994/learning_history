import React from "react"
import ReactDOM from "react-dom"

console.log("xixi");
class A extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>xixiha</div>
    }
}
ReactDOM.render(<A/>,document.getElementById("root1"));