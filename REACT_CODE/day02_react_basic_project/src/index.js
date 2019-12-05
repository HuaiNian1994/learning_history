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
function tick1(params) {//tick不是组件，只是一个函数
    ReactDOM.render(<Clock1 date={new Date()}/>,document.getElementById("root5"))
}
setInterval(tick1,1000)

//6.2将函数组件转换成 class 组件
//通过以下五步将 Clock 的函数组件转成 class 组件：
// 创建一个同名的 ES6 class，并且继承于 React.Component。
// 添加一个空的 render() 方法。
// 将函数体移动到 render() 方法之中。
// 在 render() 方法中使用 this.props 替换 params。
// 删除原来的Clock函数。
class Clock1 extends React.Component{
    render(){
        return <h2>表一：现在是北京时间{this.props.date.toLocaleTimeString()}</h2>
    }
}

//6.3使用state代替“标签属性传值”的方式
class Clock2 extends React.Component{
    constructor(props){
        super(props)
        this.state={date:new Date()}
    }
    render(){
        return <h2>表二：现在是北京时间{this.state.date.toLocaleTimeString()}</h2>
    }
}
function tick2() {//tick不是组件，只是一个函数
    ReactDOM.render(<Clock2 />,document.getElementById("root6"))
}
setInterval(tick2,1000)//这个计时器不会刷新页面的计时，因为date的值在Clock2构造时就被固定了


//6.4添加生命周期以刷新计时
class Clock3 extends React.Component{
    constructor(props){
        super(props)
        this.state={date:new Date()}//构造函数是唯一可以给 this.state 直接赋值的地方

    }
    componentDidMount(){//组件挂载到DOM后运行
        setInterval(()=>this.tick3(),1000)//为什么不能写成setInterval(this.tick3,1000)？因为在setInterval中，this指向的是global
    }
    tick3(){//使用setState改变state的值，每当使用setState()改变state的值，就自动调用Clock3的render方法重新渲染
        this.setState({date:new Date()})
    }
    render(){
        return <h2>表三：现在是北京时间{this.state.date.toLocaleTimeString()}</h2>
    }
}
ReactDOM.render(<Clock3 />,document.getElementById("root7"))


//7.事件处理
// React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同:
// React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
// 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串形式的函数调用。
//注意：若简单传入函数名作为事件处理函数，那么这个函数内部的this会有意外的指向
//解决方案：在构造器中用bind为事件处理函数绑定this、使用 class fields 语法，或者在回调中使用箭头函数
//7.1为一个组件添加事件处理函数
class Mybutton1 extends React.Component{
    constructor(props){
        super(props)
    }
    myClick(){
        console.log("class方式创建的按钮被点了");
    }
    render(){
        return <button onClick={this.myClick}>我是用class创建的按钮</button>
    }
}
ReactDOM.render(<Mybutton1 />,document.getElementById("root8"))


function Mybutton2 (){
    function myClick(){
        console.log("function方式创建的按钮被点了");
    }
    return <button onClick={myClick}>我是用function创建的按钮</button>
}
ReactDOM.render(<Mybutton2 />,document.getElementById("root9"))


//8、条件渲染
//利用与运算符 && 和三目运算符进行渲染
// 在 JavaScript 中，true && expression 总是会返回 expression, 而 false && expression 总是会返回 false
class MyComponent4 extends React.Component{
    constructor(props){
        super(props)
        this.state={notLogIn:true}
    }
    myclick=()=>{//使用 class fields 语法,确保this指向了MyComponent4创建的实例
        this.setState({notLogIn:!this.state.notLogIn})
        console.log(this.__proto__==MyComponent4.prototype);//true    
    }
    render(){
        return(//再次强调：组件return的内容需要用一个div包裹
           <div>
               <button onClick={this.myclick}>点我</button>
                {this.state.notLogIn && <input type="text" placeholder="请输入用户名"/>}
                {this.state.notLogIn?<input type="text" placeholder="请输入密码"/>:null}
                {console.log("重新运行了MyComponent4组件的render")}
              
           </div>
        )
    }
}
ReactDOM.render(<MyComponent4/>,document.getElementById("root10"))
//当子组件已被父组件渲染时如何隐藏自己：
function Root11Son(params) {
    if(!params.show){
        return null
    }
    return <h2 style={{display:"inline-block"}}>Root11son</h2>//为了便于观看，故将其设置为行内块
}
class Root11Father extends React.Component{
    constructor(props){
        super(props)
        this.state={val:false}
    }
    myclick=()=>{
        this.setState({val:!this.state.val})  
    }
    render(){     
        return(
            <div>
                <h2 style={{display:"inline-block"}}>Root11Father</h2>
                <button onClick={this.myclick}>toggle</button>
                <Root11Son show={this.state.val}></Root11Son>
            </div>
        )
    }
}
ReactDOM.render(<Root11Father/>,document.getElementById("root11"))

//9、列表&key
//9.1使用Array.prototype.map()渲染一个简单的列表
const arr1=[1,2,3,4,5]
const list=arr1.map(num=><li>{num}</li>)
function Root12Component(params) {
    return(
        <ul>{list}</ul>
    )
}
ReactDOM.render(<Root12Component/>,document.getElementById("root12"))

//9.2在一个组件中渲染列表并为其添加key
// 一个好的经验法则是：在 map() 方法中的元素需要设置 key 属性。
// key 只是在兄弟节点之间必须唯一
function Root13Component(params){
    const list=params.arr.map(num=><li key={num}>{num}</li>);//添加key属性
    return <ul>{list}</ul>
}
const arr2=[6,7,8,9,10]
ReactDOM.render(<Root13Component arr={arr2}/>,document.getElementById("root13"))


//10.表单
//令state成为表单的唯一数据源，通过事件处理函数控制表单的内容和行为
class Root14Component extends React.Component{
    constructor(props){
        super(props)
        this.state={value:""}
    }
    changeHandler(e){
        this.setState({value:e.target.value.toUpperCase()})
    }
    submitHandler(e){
        console.log(this.state.value);
        e.preventDefault();
    }
    render(){
        return(
            <form  onSubmit={(e)=>this.submitHandler(e)}>
                <input type="text" value={this.state.value} placeholder="请输入" onChange={(e)=>this.changeHandler(e)}/>
                <button type="submit">提交</button>
            </form>
        )
    }
}
ReactDOM.render(<Root14Component />,document.getElementById("root14"))

class Root15Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'mango'};//在react中，使用value属性来设定默认选项，而不是用selected属性
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('你喜欢的风味是: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
ReactDOM.render(<Root15Component />,document.getElementById("root15"))


//处理多个input输入：给每个元素添加 name 属性，并让处理函数根据 event.target.name 的值选择要执行的操作
class Root16Component extends React.Component{
    constructor(props){
        super(props)
        this.state={in1:"",in2:"",in3:""}//分别设定属性，其与input的name同名
    }
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value.toUpperCase()})//核心的一步
    }
    render(){
        console.log("render of Root16Component");
        return(
            <form onChange={this.changeHandler}>
                <input type="text" name="in1" value={this.state.in1}/>
                <input type="text" name="in2" value={this.state.in2}/>
                <input type="text" name="in3" value={this.state.in3}/>
            </form>
        )
    }
}
ReactDOM.render(<Root16Component />,document.getElementById("root16"))

//11.兄弟组件间的数据共享
//将要共享的数据放到他们的父组件中，由父组件的props传值给子组件。
//并在父组件中定义“设定各子组件所共享的数据”的方法，在这些方法中setState以请求元素的重新渲染
//例子：两个输入框间数据的实时相互转换,使后者的值永远比前者小1
//父亲以props传递事件处理函数和当前的state给儿子，儿子以调用父组件事件处理函数的方式更改父组件的state
class Root17Component extends React.Component{
    constructor(props){
        super(props)
        this.state={val:5}
    }
    son1Handler=(e)=>{
        const value=parseInt(e.target.value)
        this.setState({val:value?value:0})
    }
    son2Handler=(e)=>{
        const value=parseInt(e.target.value)
        this.setState({val:value?value+1:1})
    }

    render(){
        const value=this.state.val
        return(
            <div>
                <Root17Son   sonval={{func:this.son1Handler,val:this.state.val}}/>
                <Root17Son   sonval={{func:this.son2Handler,val:this.state.val-1}}/>
            </div>
        )
    }
}
function Root17Son(props){
    return(
        <input type="text" onChange={props.sonval.func} value={props.sonval.val}/>
    )
}
ReactDOM.render(<Root17Component />,document.getElementById("root17"))

//12.组合&继承
//12.1 组件的props.children的传递
class Root18Component extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <h2>我是Root18Component</h2>
                <div>组件标签围出的内容放在这：{this.props.children}</div>
            </div>
        )
    }
}
const Root18Context=<h3>我是Root18中的内容 </h3>
ReactDOM.render(<Root18Component>{Root18Context}</Root18Component>  ,document.getElementById("root18"))

////12.2 不使用组件的props.children，自行在组件上打洞：
class Root19Component extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <h2>我是Root18Component</h2>
                <div style={{display:"inline-block"}}>{this.props.leftContent}</div>
                <div style={{display:"inline-block",marginLeft:"80%" }}>{this.props.rightContent}</div>
            </div>
        )
    }
}
const Root19left=<h3>我是Root19左边的洞 </h3>
const Root19right=<h3>我是Root19右边的洞 </h3>
ReactDOM.render(<Root19Component leftContent={Root19left} rightContent={Root19right}/>  ,document.getElementById("root19"))