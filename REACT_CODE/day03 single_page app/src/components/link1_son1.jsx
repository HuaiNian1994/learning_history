import React from "react"

export default class Link1_son1 extends React.Component{
    render(){

        console.log(this.props.history.location===this.props.location);
        
        return (
            <div>
                <div>我是link1_son1</div>
                <div>所接收到的参数为{this.props.match.params.my1stParam}</div>
                <div>涉及知识点：<br/>
                                1.使用this.props.match.params获取本组件被匹配到时的路由匹配参数
                                <br/>
                                2.使用this.props.history.goBack()和this.props.history.go(-1)返回上一次的历史记录页面
                </div>
                <button onClick={()=>this.props.history.goBack()}>点我返回</button>
                <button onClick={()=>this.props.history.go(-1)}>点我返回</button>
                
            </div>
        	)

    }
}