import React from "react"

export default class Link2 extends React.Component{
    render(){
        return (
            <div>
                <div>link2</div>
                {/* 根据main.jsx中的路由规则，link1_son1的get参数为{my1stparam:"xixi"} */}
                <div onClick={()=>{this.props.history.push("/l1/xixi")}}>点我去到link1_son1</div>
                <div>涉及知识点：使用this.props.history.push跳转到指定的路径</div>
            </div>
        )
        
       
    }
}