import React from 'react'
import ReactDOM from 'react-dom'
console.log("成功!hiahiah :)");

//1.创建一个基本的react元素
const myele=<h1>我是h1</h1>
ReactDOM.render(myele,document.getElementById("root0"))

//2.创建一个最基本的react组件,其首字母必须大写
function MyComponent(){
    return <h2>我的第一个组件</h2>
}
const xixi=<MyComponent></MyComponent>
ReactDOM.render(xixi,document.getElementById("root1"))

//3.组件props的传递
const dog={name:"大黄",age:4,sex:"雄性"}
function MyComponent2(haha) {
    return <h2>{haha.name}今年有{haha.age}岁了</h2>
}
//想要传递一个值给html，那么必须将这个值注册在组件的属性中
const xixi2=<MyComponent2 name={dog.name} age={dog.age}/>
ReactDOM.render(xixi2,document.getElementById("root2"))
//发生了什么:
// 我们调用 ReactDOM.render() 函数，并传入 <MyComponent2 name={dog.name} age={dog.age}/> 作为参数。
// React 调用MyComponent2 组件，并将{name:"大黄",age:4} 传值给形参haha。
// MyComponent2 组件将 <h2>大黄今年有4岁了</h2> 元素作为返回值。
// React DOM 将 DOM 高效地更新为 <h2>大黄今年有4岁了</h2> 。


//4.组合组件
function MyComponent3(haha) {
    return <h2>{haha.name}</h2>
}
function APP(){
    return (//返回多个元素时必须用一个div包裹
    <div>
        <MyComponent3 name="小红" />
        <MyComponent3 name="小黑" />
        <MyComponent3 name="小紫" />
    </div>	
    );
}
ReactDOM.render(<APP/>,document.getElementById("root3"))

//5.组件的嵌套使用
const son={name:"小明",age:13}
function Father(params) {
    return <div>我是爸爸 <Son name={son.name}/></div>
}
function Son(params) {
    return <div>我是儿子{params.name}</div>
}
ReactDOM.render(<Father/>,document.getElementById("root4"))


//6.组件的封装
//6.1、基本外观
// function Clock(params) {
//     return <h2>现在是北京时间{params.date.toLocaleTimeString()}</h2>
// }
function tick(params) {//tick不是组件，只是一个函数
    ReactDOM.render(<Clock date={new Date()}/>,document.getElementById("root5"))
}
setInterval(tick,1000)

//6.2将函数组件转换成 class 组件
//通过以下五步将 Clock 的函数组件转成 class 组件：
// 创建一个同名的 ES6 class，并且继承于 React.Component。
// 添加一个空的 render() 方法。
// 将函数体移动到 render() 方法之中。
// 在 render() 方法中使用 this.props 替换 params。
// 删除原来的Clock函数。
class Clock extends React.Component{
    render(){
        return <h2>现在是北京时间{this.props.date.toLocaleTimeString()}</h2>
    }
}

