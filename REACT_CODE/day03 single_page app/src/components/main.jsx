import React from "react"
//在一个框架中，要使用路由，一定要有 【路由规则、路由链接、呈现路由组件的容器】
import {HashRouter,Route,Link} from "react-router-dom"
//一个项目只能使用一次HasnRouter

//导入子组件
import Link1 from "./link1.jsx"
import Link2 from "./link2.jsx"
import Link3 from "./link3.jsx"
import Link1_son1 from "./link1_son1.jsx";

export default class Main extends React.Component{
    render(){
        return (//根组件的最外层总是用HashRouter包裹,否则其内部的路由链接不能被正常解析
            <HashRouter>
                <div>main!!</div>
                <Link to="/l1">链接一</Link>
                <Link to="/l1/1234">链接一大儿子</Link>
                <Link to="/l2">链接二</Link>
                <Link to="/l3">链接三</Link>
                <hr/>
                <Route path="/l1" component={Link1} exact></Route>
                {/* “:”意味着：只要是链接里有内容就能匹配到 本例子是用"/l1/:"匹配到了"/l1/1234" */}
                {/* “:” 后跟自定义的参数，可在被匹配到的组件中接受该参数*/}
                <Route path="/l1/:my1stParam" component={Link1_son1}></Route>
                <hr/>
                {/* exact 表示 精确匹配，含义是：只有 Link 的 to 属性，完全等于 Route 的 path 的时候，才会展示对应的 component 组件  */}
                <Route path="/l2" component={Link2} exact></Route>
                <hr/>
                <Route path="/l3" component={Link3}></Route>
            </HashRouter>
            
        )
    }
}